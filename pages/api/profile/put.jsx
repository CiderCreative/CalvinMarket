import { Table } from "sst/node/table";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {PutCommand, DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb";
import { getServerSession } from "next-auth/next"
import { authConfig } from '../auth/[...nextauth]'

const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export default async function handler (req, res) {
    const session= getServerSession(req, res, authConfig)
    if (!session) {res.status(401).json({ success: "unauthorized to access api" }); return;}

    const { email, firstName, lastName, rating, dateJoined, profileImg, favoriteItems } = JSON.parse(req.body);
    try {
        const put = new PutCommand({
            TableName: Table.profiles.tableName,
            Item: {
                email,           //email of user
                firstName,       //first name of user
                lastName,        //last name of user
                rating,          //profile id of user
                dateJoined,      //date user joined
                profileImg,      //profile image of user
                favoriteItems,   //stringified list of item ids eg "[1, 2, 3]"
            }
        });
        await db.send(put);
        res.status(200).json({ success: true });
    }
    catch(error){
        res.status(400).json({ success: false });
        console.error("Error:", error);
    }
} 