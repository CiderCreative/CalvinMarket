import { Table } from "sst/node/table";
import { Bucket } from "sst/node/bucket";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DeleteCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));
const s3 = new S3Client();

export default async function handler(req, res) {
  const item = JSON.parse(req.body).item;
  const imageKeys = item.imageKeys.slice(1, -1).split(",");
  try {
    // Delete images from S3 bucket
    for (const imageKey of imageKeys) {
      const deleteObjectCommand = new DeleteObjectCommand({
        Bucket: Bucket.ItemImages.bucketName,
        Key: imageKey.trim(),
      });

      await s3.send(deleteObjectCommand);
    }

    // Delete item from DynamoDB
    const deleteCommand = new DeleteCommand({
      TableName: Table.ItemsTable.tableName,
      Key: {
        itemId: item.itemId,
        title: item.title,
      },
    });

    await db.send(deleteCommand);

    res.status(200).json({ success: true });
  } catch (error) {
    // Handle the error here
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
