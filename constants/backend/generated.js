import { graphqlOperation, API } from "aws-amplify";
import next from "next";

export const config = {
  aws_appsync_graphqlEndpoint:
    "https://cznd6iwygzdi7e4pkgwxteppfq.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-iyq6gxzjivhcdjpx27xr7wer6i",
};

export const publishMessage =
  /* GraphQL */
  `
    mutation PublishData(
      $dateSent: Int!
      $senderId: String!
      $message: String!
      $receiverId: String!
    ) {
      createBlintCalvinmarketMessages(
        input: {
          dateSent: $dateSent
          senderId: $senderId
          message: $message
          receiverId: $receiverId
        }
      ) {
        dateSent
        message
        receiverId
        senderId
      }
    }
  `;

export const subscribeMessage = /* GraphQL */ `
  subscription SubscribeToData($userId: String!) {
    onCreateBlintCalvinmarketMessages(userId: $userId) {
      dateSent
      message
      receiverId
      senderId
    }
  }
`;

export const listMessageSend = /* GraphQL */ `
  query MyQuery($userId: String!, $nextToken: String) {
    listBlintCalvinmarketMessages(
      filter: { senderId: { eq: $userId } }
      nextToken: $nextToken
    ) {
      items {
        dateSent
        receiverId
        senderId
        message
      }
      nextToken
    }
  }
`;
//only dif between ^ & v is senderId & recieverId
export const listMessageRec = /* GraphQL */ `
  query MyQuery($userId: String!, $nextToken: String) {
    listBlintCalvinmarketMessages(
      filter: { receiverId: { eq: $userId } }
      nextToken: $nextToken
    ) {
      items {
        dateSent
        receiverId
        senderId
        message
      }
      nextToken
    }
  }
`;

export async function listSender(userId) {
  let nextToken = null;
  let messages = [];
  try {
    do {
      let result = await API.graphql({
        query: listMessageSend,
        variables: { userId, nextToken },
      });
      messages = messages.concat(
        result.data.listBlintCalvinmarketMessages.items
      );
      nextToken = result.data.listBlintCalvinmarketMessages.nextToken;
    } while (nextToken);
  } catch (error) {
    console.error(error);
  }
  return messages;
}

export async function listReceiver(userId) {
  let nextToken = null;
  let messages = [];
  try {
    do {
      let result = await API.graphql(
        graphqlOperation(listMessageRec, { userId, nextToken })
      );
      messages = messages.concat(
        result.data.listBlintCalvinmarketMessages.items
      );
      nextToken = result.data.listBlintCalvinmarketMessages.nextToken;
    } while (nextToken);
  } catch (error) {
    console.error(error.message);
  }
  //const res=  await API.graphql(graphqlOperation(listMessageRec, {userId}));

  //return res.data.listBlintCalvinmarketMessages.items;
  return messages;
}

export async function publish(dateSent, senderId, message, receiverId) {
  const variables = { dateSent, senderId, message, receiverId };
  return await API.graphql(graphqlOperation(publishMessage, variables));
}

export function subscribe(userId, next, error) {
  return API.graphql(graphqlOperation(subscribeMessage, { userId })).subscribe({
    next: ({ provider, value }) => {
      next(value.data.onCreateBlintCalvinmarketMessages);
    },
    error: error || console.log,
  });
}
