import { Bucket } from "sst/node/bucket";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";


export default async function handler(req, res) {
    const {file_key, type} = (req.body);
    
    switch (req.method) {
      case "POST":

        try {
            console.log(Bucket.itemImgs.bucketName)
            const command = new GetObjectCommand({
            ACL: "public-read",
            Key: file_key,
            Bucket: Bucket.itemImgs.bucketName,
            });

            const url = await getSignedUrl(new S3Client({region: "us-east-1"}), command, { expiresIn: 3600 });
            
            res.status(200).json({ url });

        } catch (error) {
            res.status(400).json({ success: false });
            console.log("AWS S3 API - upload_file.tsx - POST Error:", error);
        }
        break;

      default:
        res.status(405).end();
        break;
    }
    

  }