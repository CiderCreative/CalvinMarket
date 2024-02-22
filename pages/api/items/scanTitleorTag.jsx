import { Table } from "sst/node/table";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { ScanCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));

//eg. request body: { "val": "Title" } will search items table for titles or tags containing "Title"
export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ error: "unauthorized to access api" });
    return;
  }
  const { val } = JSON.parse(req.body);
  const results = await scanForTitlesOrTags(
    Table.ItemsTable.tableName,
    val,
    val,
  );
  res.status(200).json({ results: results || [] });
}

async function scanForTitlesOrTags(tableName, titleSearch, tagSearch) {
  const params = {
    TableName: tableName,
    FilterExpression:
      "contains(title, :titleValue) OR contains(tags, :tagValue)",
    ExpressionAttributeValues: {
      ":titleValue": titleSearch,
      ":tagValue": tagSearch,
    },
  };

  try {
    const results = await db.send(new ScanCommand(params));
    return results.Items;
  } catch (error) {
    console.error("Error during scan:", error);
    throw error;
  }
}
