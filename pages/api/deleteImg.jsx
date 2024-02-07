import { Bucket } from "sst/node/bucket";
import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";

export default async function handler(req, res) {
  const { file_key } = JSON.parse(req.body);
  console.log("LOOK HERE", req.method, file_key);
  switch (req.method) {
    case "DELETE":
      try {
        const command = new DeleteObjectCommand({
          Key: file_key,
          Bucket: Bucket.ItemImages.bucketName,
        });

        const resp = await new S3Client().send(command);

        if (
          resp.$metadata.httpStatusCode === 204 ||
          resp.$metadata.httpStatusCode === 200
        ) {
          res.status(200).json({ success: true });
        } else {
          res.status(400).json({ success: false });
        }
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
