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
          tags: "string",            //stringified JSON of tags eg "{type: textbook}"
        },
        primaryIndex: { partitionKey: "itemId", sortKey: "title"},
      });

      const imagesTable = new Table(stack, "images", {
        fields: {
          imgId: "number",           //id of image (UNIX timestamp)
          imgKey: "string",          //url of image in s3 bucket
          itemId: "number",          //id of item image is for
        },
        primaryIndex: { partitionKey: "imgId", sortKey: "itemId"}
      });

      const site = new NextjsSite(stack, "site", {
        bind: [imagesBucket, itemsTable, imagesTable]
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
