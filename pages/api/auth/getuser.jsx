// import { CognitoIdentityProviderClient, AdminGetUserCommand } from '@aws-sdk/client-cognito-identity-provider';

// export default async function handler(req, res) {
//   // Only allow POST requests for security reasons
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//     const crypto = require('crypto');
//     const  {email} = JSON.parse(req.body)

//     const secretKey = process.env.COGNITO_CLIENT_SECRET; // Replace with your client secret
//     const clientId = process.env.COGNITO_CLIENT_ID; // Replace with your client ID

//     const hmac = crypto.createHmac('sha256', secretKey);

//     hmac.update(email + clientId);
//     const hmacDigest = hmac.digest('base64');
//     const client = new CognitoIdentityProviderClient({
//         region: process.env.COGNITO_REGION, // e.g., 'us-east-1'
//     });

//   // Setup the command parameters
//   const params = {
//     SecretHash: hmacDigest,
//     UserPoolId: process.env.COGNITO_USER_POOL_ID,
//     Username: email,
//   };

//   // Create the command
//   const command = new AdminGetUserCommand(params);

//   try {
//     // Send the command to Cognito
//     const response = await client.send(command);

//     // If successful, send back the user data
//     return res.status(200).json(response);
//   } catch (error) {
//     // Log the error and send back an error response
//     console.error('Error retrieving user from Cognito:', error);
//     return res.status(400).json({ message: 'Failed to retrieve user', error: error.message });
//   }
// }
import {
  CognitoIdentityProviderClient,
  GetUserCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export async function getUser(accessToken) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ success: "unauthorized to access api" });
    return;
  }
  const client = new CognitoIdentityProviderClient({
    region: process.env.COGNITO_REGION,
  });

  const commandProps = {
    AccessToken: accessToken,
  };

  try {
    const response = await client.send(new GetUserCommand(commandProps));
    return response.UserAttributes; // You can return the user attributes or use them as needed.
  } catch (error) {
    console.error("GetUser Error:", error);
    throw error;
  }
}
