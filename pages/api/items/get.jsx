import { Table } from "sst/node/table";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { ScanCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));
/**
 * example request body:
 * {
 *      "filter": "title = Title OR title = Bible"
 * }
 */
export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ error: "unauthorized to access api" });
    return;
  }
  const { ExpressionAttributeValues, FilterExpression } = toScanCommand(
    JSON.parse(req.body).filter
  );

  const ExpressionAttributeNames = FilterExpression.includes("#STATUS")
    ? { "#STATUS": "status" }
    : null;
  const input = {
    TableName: Table.ItemsTable.tableName,
    ExpressionAttributeNames,
    //ExpressionAttributeNames: {"#STATUS": "status"}, //status is a reserved word for dynamodb
    ExpressionAttributeValues,
    FilterExpression,
  };

  try {
    const scan = new ScanCommand(input);
    const resp = await db.send(scan);

    res.status(200).json({ ...resp });
  } catch (error) {
    res.status(400).json({ success: false });
    console.error("Error:", error);
  }
}

// something like "title = Title OR title = Bible" gets turned into correct Expression Attribute and filter for scan command
function toScanCommand(expression) {
  let ExpressionAttributeValues = {};
  let FilterExpression = "";
  const cutExpression = expression.trim().split(/\s*(=|OR|AND)\s*/);

  cutExpression.forEach((item, index) => {
    if (cutExpression[index - 1] === "=") {
      let attributeLength = Object.keys(ExpressionAttributeValues).length + 1;
      const isNumber = !isNaN(item) && !isNaN(parseFloat(item));
      //take out the item from the expression
      ExpressionAttributeValues = {
        ...ExpressionAttributeValues,
        [`:var${attributeLength}`]: isNumber ? parseInt(item) : item,
      };

      //add the variable for the item back into the filter expression
      FilterExpression += `:var${attributeLength} `;
    } else if (cutExpression[index + 1] === "=") {
      FilterExpression +=
        item.toLowerCase() === "status" ? "#STATUS " : item + " ";
    } else {
      FilterExpression += item + " ";
    }
  });
  return { ExpressionAttributeValues, FilterExpression };
}
