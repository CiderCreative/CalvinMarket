import { Table } from "sst/node/table";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {GetCommand, DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb";

const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));
/**
 * example request body:
 * {
 *      "email": "someEmail@calvin.edu"
 * }
 */
export default async function handler(req, res) {
    try {
        const body = JSON.parse(req.body)
        
        const input = {
            TableName: Table.profiles.tableName,
            Key:{
                "email": body.email,
            }
        };

        const scan = new GetCommand(input);
        const resp = await db.send(scan);

        res.status(200).json({ ...resp });
    }

    catch(error){
        res.status(400).json({ success: false });
        console.error("Error:", error);
    }
  }
