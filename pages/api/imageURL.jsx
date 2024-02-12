import { Bucket } from "sst/node/bucket";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ success: "ERROR unauthorized" });
    return;
  }
  const { file_key } = JSON.parse(req.body);
  switch (req.method) {
    case "POST":
      try {
        const command = new GetObjectCommand({
          ACL: "public-read",
          Key: file_key.trim(),
          Bucket: Bucket.ItemImages.bucketName,
        });

        const url = await getSignedUrl(
          new S3Client({ region: "us-east-1" }),
          command,
          { expiresIn: 3600 },
        );

        res.status(200).json({ url });
      } catch (error) {
        res.status(400).json({ success: false });
        console.error("AWS S3 API - imageUrl - POST Error:", error);
      }
      break;

    default:
      res.status(405).end();
      break;
  }
}
