import { Table } from "sst/node/table";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { UpdateCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
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
    const update = new UpdateCommand({
      TableName: Table.ItemsTable.tableName,
      Key: {
        itemId: body.itemId,
        title: body.title,
      },
      UpdateExpression:
        "set price = :p, dateSold = :ds, #status = :s, description = :d, profileId = :pi, imageKeys = :ik, tags = :tg",
      ExpressionAttributeValues: {
        ":p": body.price || 0,
        ":ds": body.dateSold,
        ":s": body.status,
        ":d": body.description,
        ":pi": body.profileId,
        ":ik": body.imageKeys,
        ":tg": body.tags,
      },
      ExpressionAttributeNames: {
        "#status": "status",
      },
    });

    await db.send(update);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false });
    console.error("Error:", error);
  }
}
