import { graphqlOperation, API } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import config from "./aws-exports";

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
  const client = generateClient(config);
  let nextToken = null;
  let messages = [];
  try {
    do {
      let result = await client.graphql({
        query: listMessageSend,
        variables: { userId, nextToken },
      });
      messages = messages.concat(
        result.data.listBlintCalvinmarketMessages.items,
      );
      nextToken = result.data.listBlintCalvinmarketMessages.nextToken;
    } while (nextToken);
  } catch (error) {
    console.error(error);
  }
  return messages;
}

export async function listReceiver(userId) {
  const client = generateClient(config);

  let nextToken = null;
  let messages = [];
  try {
    do {
      let result = await client.graphql({
        query: listMessageRec,
        variables: { userId, nextToken },
      });
      messages = messages.concat(
        result.data.listBlintCalvinmarketMessages.items,
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
  const client = generateClient(config);

  const variables = { dateSent, senderId, message, receiverId };
  return await client.graphql({ query: publishMessage, variables });
}

export function subscribe(userId, next, error) {
  const client = generateClient(config);

  return client
    .graphql({ query: subscribeMessage, variables: { userId } })
    .subscribe({
      next: (data) => {
        next(data.data.onCreateBlintCalvinmarketMessages);
      },
      error: error || console.log,
    });
}
