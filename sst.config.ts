import { PrimaryKey } from "aws-cdk-lib/aws-appsync";
import { SSTConfig } from "sst";
import { NextjsSite, Bucket, Table, Config } from "sst/constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";

export default {
  config(_input) {
    return {
      name: "calvinmarket",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      // const imagesBucket = new Bucket(stack, "itemImgs");

      // const profileTable = new Table(stack, "profiles", {
      //   fields: {
      //     email: "string", //email of user
      //     firstName: "string", //first name of user
      //     lastName: "string", //last name of user
      //     rating: "number", //profile id of user
      //     dateJoined: "string", //date user joined
      //     profileImg: "string", //profile image of user
      //     favoriteItems: "string", //stringified list of item ids eg "[1, 2, 3]"
      //   },
      //   primaryIndex: { partitionKey: "email" },
      // });

      // const itemsTable = new Table(stack, "items", {
      //   fields: {
      //     itemId: "number", //going to be UNIX timestamp
      //     title: "string", //title of item
      //     price: "number", //price of item (in dollars)
      //     dateSold: "string", //date sold (if sold, "" if not)
      //     status: "string", //status of item (deleted, sold, not_shown, for_sale)
      //     description: "string", //desc of item
      //     preferredMeetup: "string", //preferred meetup location
      //     profileId: "string", //profile id of seller
      //     type: "string", //type of item (textbook, furniture, etc)
      //     imageKeys: "string", //stringified list of image names eg "[textbook.png, textbook2.png, textbook3.png]"
      //     tags: "string", //stringified JSON of tags eg "{type: textbook}"
      //   },
      //   primaryIndex: { partitionKey: "itemId", sortKey: "title" },
      // });

      // const messagesTable = new Table(stack, "messages", {
      //   fields: {
      //     senderId: "string", //id of sender
      //     receiverId: "string", //id of receiver
      //     message: "string", //message content
      //     dateSent: "number", //date message was sent
      //   },
      //   primaryIndex: { partitionKey: "senderId", sortKey: "dateSent" },
      // });
      const NEXTAUTH_URL = new Config.Secret(stack, "NEXTAUTH_URL");
      const NEXTAUTH_SECRET = new Config.Secret(stack, "NEXTAUTH_SECRET");
      const COGNITO_CLIENT_ID = new Config.Secret(stack, "COGNITO_CLIENT_ID");
      const COGNITO_CLIENT_SECRET = new Config.Secret(
        stack,
        "COGNITO_CLIENT_SECRET"
      );
      const COGNITO_ISSUER = new Config.Secret(stack, "COGNITO_ISSUER");
      const COGNITO_REGION = new Config.Secret(stack, "COGNITO_REGION");
      const COGNITO_USER_POOL_ID = new Config.Secret(
        stack,
        "COGNITO_USER_POOL_ID"
      );

      const imagesBucket = new Bucket(stack, "ItemImages", {
        cdk: {
          bucket: s3.Bucket.fromBucketArn(
            stack,
            "ItemImages1",
            "arn:aws:s3:::blint-calvinmarket-site-itemimgsbucket19c4dc57-kafbox1v5lux"
          ),
        },
      });

      const profileTable = new Table(stack, "ProfileTable", {
        cdk: {
          table: dynamodb.Table.fromTableArn(
            stack,
            "ProfileTable1",
            "arn:aws:dynamodb:us-east-1:857197001789:table/blint-calvinmarket-profiles"
          ),
        },
      });

      const itemsTable = new Table(stack, "ItemsTable", {
        cdk: {
          table: dynamodb.Table.fromTableArn(
            stack,
            "ItemsTable1",
            "arn:aws:dynamodb:us-east-1:857197001789:table/blint-calvinmarket-items"
          ),
        },
      });

      const messagesTable = new Table(stack, "MessagesTable", {
        cdk: {
          table: dynamodb.Table.fromTableArn(
            stack,
            "MessagesTable1",
            "arn:aws:dynamodb:us-east-1:857197001789:table/blint-calvinmarket-messages"
          ),
        },
      });

      const site = new NextjsSite(stack, "site", {
        bind: [
          imagesBucket,
          profileTable,
          itemsTable,
          messagesTable,
          NEXTAUTH_URL,
          NEXTAUTH_SECRET,
          COGNITO_CLIENT_ID,
          COGNITO_CLIENT_SECRET,
          COGNITO_ISSUER,
          COGNITO_REGION,
          COGNITO_USER_POOL_ID,
        ],
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
