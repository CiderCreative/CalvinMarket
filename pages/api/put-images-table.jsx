import { Table } from "sst/node/table";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  GetCommand,
  UpdateCommand,
  PutCommand,
  DynamoDBDocumentClient,
} from "@aws-sdk/lib-dynamodb";

export default async function handler(req, res) {
  const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));

  try {
    const put = new PutCommand({
      TableName: Table.ItemsTable.tableName,
      Item: {
        imgId: Date.now(), //UNIX timestamp
        imgKey: req.body.imgKey, //url of image in s3 bucket
        itemId: req.body.itemId, //profile id of seller
      },
    });

    await db.send(put);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
    console.error("Error:", error);
  }
}
