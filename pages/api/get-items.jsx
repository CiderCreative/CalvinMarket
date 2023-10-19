import { Table } from "sst/node/table";
import { DynamoDBClient, GetItemCommand, BatchGetItemCommand } from "@aws-sdk/client-dynamodb";
import {ScanCommand, UpdateCommand, PutCommand,  DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb";

export default async function handler(req, res) {
    const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));
    const input = {
        TableName: Table.items.tableName,
        ExpressionAttributeValues: {":val": "Bible"},
        FilterExpression: "title = :val",
      };
    try {
        console.log(input);
        const scan = new ScanCommand(input);

        const resp = await db.send(scan);

        res.status(200).json({ ...resp });
    }

    catch(error){
        res.status(400).json({ success: false });
        console.error("Error:", error);
    }
  }