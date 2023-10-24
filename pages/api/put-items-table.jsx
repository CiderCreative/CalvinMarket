import { Table } from "sst/node/table";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {PutCommand,  DynamoDBDocumentClient,} from "@aws-sdk/lib-dynamodb";

export default async function handler(req, res) {
    const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));

    try {
        const put = new PutCommand({
            TableName: Table.items.tableName,
            Item: {
                itemId: Date.now() /1000,                      //UNIX timestamp
                title: req.body.title,                         //title of item
                price: req.body.price,                         //price of item (in dollars)
                dateAdded: req.body.dateAdded,                 //date item was added (not updated when sold or edited)
                dateSold: req.body.dateSold,                   //date sold (if sold, "" if not)
                status: req.body.status,                       //status of item (deleted, sold, not_shown, for_sale)
                description: req.body.description,             //desc of item
                preferredMeetup: req.body.preferredMeetup,     //preferred meetup location
                profileId: req.body.profileId,                 //profile id of seller
                type: req.body.type,                           //type of item (clothing, electronics, textbook etc.)
                imageKeys: JSON.stringify(req.body.imageKeys), //list of image keys
                tags: JSON.stringify(req.body.tags),           //tags of item
            }
        });

        await db.send(put);

        res.status(200).json({ success: true });
    }

    catch(error){
        res.status(400).json({ success: false });
        console.error("Error:", error);
    }
  }

