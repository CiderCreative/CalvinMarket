import { Bucket } from "sst/node/bucket";
import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const { file_key, user } = JSON.parse(req.body);
  if (session.user.email !== user) {
    res.status(401).json({ success: "ERROR unauthorized" });
    return;
  }
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
