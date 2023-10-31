import { PrimaryKey } from "aws-cdk-lib/aws-appsync";
import { SSTConfig } from "sst";
import { NextjsSite, Bucket, Table } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "calvinmarket",
      region: "us-east-1",
    };
  },
  stacks(app) {
    
    app.stack(function Site({ stack }) {
      const imagesBucket = new Bucket(stack, "itemImgs");

      const profileTable = new Table(stack, "profiles", {
        fields: {
          email: "string",           //email of user
          firstName: "string",       //first name of user
          lastName: "string",        //last name of user
          rating: "number",          //profile id of user
          dateJoined: "string",      //date user joined
          profileImg: "string",      //profile image of user
          favoriteItems: "string",   //stringified list of item ids eg "[1, 2, 3]"
        },
        primaryIndex: { partitionKey: "email"},
      });

      const itemsTable = new Table(stack, "items", {
        fields: {
          itemId: "number",          //going to be UNIX timestamp
          title: "string",           //title of item
          price: "number",           //price of item (in dollars)
          dateAdded: "string",       //date item was added (not updated when sold or edited)
          dateSold: "string",        //date sold (if sold, "" if not)
          status: "string",          //status of item (deleted, sold, not_shown, for_sale)
          description: "string",     //desc of item
          preferredMeetup: "string", //preferred meetup location
          profileId: "string",       //profile id of seller
          type: "string",            //type of item (textbook, furniture, etc)
          imageKeys: "string",       //stringified list of image names eg "[textbook.png, textbook2.png, textbook3.png]"
          tags: "string",            //stringified JSON of tags eg "{type: textbook}"
        },
        primaryIndex: { partitionKey: "itemId", sortKey: "title"},
      });

      const messagesTable = new Table(stack, "messages", {
        fields: {
          senderId: "string",        //id of sender
          receiverId: "string",      //id of receiver
          message: "string",         //message content
          dateSent: "number",        //date message was sent
        },
        primaryIndex: { partitionKey: "senderId", sortKey: "dateSent"},
      });

      const site = new NextjsSite(stack, "site", {
        bind: [imagesBucket, profileTable, itemsTable, messagesTable],
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
