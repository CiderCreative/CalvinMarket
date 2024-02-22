import { Table } from "sst/node/table";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { ScanCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));
/**
 * example request body:
 * {
 *      "val": "adsf"
 * }
 */
export default async function handler(req, res) {
  const session = getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ success: "unauthorized to access api" });
    return;
  }
  try {
    const val = JSON.parse(req.body).val;

    const params = {
      TableName: Table.ProfileTable.tableName,
      FilterExpression: `contains(email, :emailVal)`,
      ExpressionAttributeValues: {
        ":emailVal": val,
      },
    };

    const scan = new ScanCommand(params);
    const results = await db.send(scan);

    res.status(200).json({ results: results.Items || [] });
  } catch (error) {
    res.status(400).json({ success: false });
    console.error("Error:", error);
  }
}
