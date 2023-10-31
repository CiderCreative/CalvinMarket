import { Table } from "sst/node/table";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {PutCommand, DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb";


const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export default async function handler (req, res) {
    const { senderId, receiverId, message, dateSent } = JSON.parse(req.body);
    try {
        const put = new PutCommand({
            TableName: Table.messages.tableName,
            Item: {
                senderId,                    //id of sender
                receiverId,                  //id of receiver
                message,                     //message content
                dateSent: Date.now(),  //date message was sent
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