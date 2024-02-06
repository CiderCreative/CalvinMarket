import { Table } from "sst/node/table";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  UpdateItemCommand,
  DynamoDBDocumentClient,
} from "@aws-sdk/lib-dynamodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ error: "Unauthorized to access API" });
    return;
  }

  const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));
  const body = JSON.parse(req.body);

  try {
    const update = new UpdateItemCommand({
      TableName: Table.ItemsTable.tableName,
      Key: {
        itemId: body.itemId,
      },
      UpdateExpression:
        "set title = :t, price = :p, dateSold = :ds, status = :s, description = :d, preferredMeetup = :pm, profileId = :pi, type = :ty, imageKeys = :ik, tags = :tg",
      ExpressionAttributeValues: {
        ":t": body.title,
        ":p": body.price,
        ":ds": body.dateSold,
        ":s": body.status,
        ":d": body.description,
        ":pm": body.preferredMeetup,
        ":pi": body.profileId,
        ":ty": body.type,
        ":ik": body.imageKeys,
        ":tg": body.tags,
      },
    });

    await db.send(update);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
    console.error("Error:", error);
  }
}
