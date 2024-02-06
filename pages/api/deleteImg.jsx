import { Bucket } from "sst/node/bucket";
import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";

export default async function handler(req, res) {
  const { file_key } = req.body;

  switch (req.method) {
    case "DELETE":
      try {
        const command = new DeleteObjectCommand({
          Key: file_key,
          Bucket: Bucket.ItemImages.bucketName,
        });

        await new S3Client({ region: "us-east-1" }).send(command);

        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
        console.error("AWS S3 API - delete_file.tsx - DELETE Error:", error);
      }
      break;

    default:
      res.status(405).end();
      break;
  }
}
