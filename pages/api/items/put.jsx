import { Table } from "sst/node/table";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {PutCommand,  DynamoDBDocumentClient,} from "@aws-sdk/lib-dynamodb";
import { getServerSession } from "next-auth/next"
import { authConfig } from '../auth/[...nextauth]'

export default async function handler(req, res) {
    const session = getServerSession(req, res, authConfig);
    if (!session) {res.status(401).json({ success: "unauthorized to access api" }); return;}

    const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));
    const body = JSON.parse(req.body);
    try {
        const put = new PutCommand({
            TableName: Table.items.tableName,
            Item: {
                itemId: Date.now(),                  //UNIX timestamp
                title: body.title,                         //title of item
                price: body.price,                         //price of item (in dollars)
                dateSold: body.dateSold || "",           //date sold (if sold, "" if not)
                status: body.status,                       //status of item (deleted, sold, not_shown, for_sale)
                description: body.description,             //desc of item
                preferredMeetup: body.preferredMeetup,     //preferred meetup location
                profileId: body.profileId,                 //profile id of seller
                type: body.type,                           //type of item (clothing, electronics, textbook etc.)
                imageKeys: body.imageKeys,                 //list of image keys
                tags: body.tags,           //tags of item
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

