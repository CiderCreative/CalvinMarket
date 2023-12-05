// import { Table } from "sst/node/table";
// import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// import {DeleteCommand, DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb";

// const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));

// export default handler (req, res){

//     try {
//         const deleteCommand = new DeleteCommand({
//             TableName: Table.items.tableName,
//             Key: {
//                 itemId: req.body.itemId,
//             }
//         });

//         await db.send(deleteCommand);

//         res.status(200).json({ success: true });
//     }
//     catch(error){

//     }
// }