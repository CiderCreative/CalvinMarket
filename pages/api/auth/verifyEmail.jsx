import {
  CognitoIdentityProviderClient,
  ConfirmSignUpCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { Config } from "sst/node/config";

export default async function handler(req, res) {
  const crypto = require("crypto");
  // This API route should handle POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Parse the request body for the email and code
  const { email, code } = JSON.parse(req.body);

  const hmac = crypto.createHmac("sha256", Config.COGNITO_CLIENT_SECRET);
  hmac.update(email + Config.COGNITO_CLIENT_ID);
  // Initialize the Cognito client
  const client = new CognitoIdentityProviderClient({
    region: Config.COGNITO_REGION, // e.g., 'us-east-1'
  });

  const hmacDigest = hmac.digest("base64");
  // Setup the confirm sign up parameters
  const params = {
    ClientId: Config.COGNITO_CLIENT_ID,
    SecretHash: hmacDigest,
    ConfirmationCode: code,
    Username: email,
  };

  // Create the command
  const command = new ConfirmSignUpCommand(params);

  try {
    // Send the command to Cognito
    await client.send(command);

    // If successful, send back a success response
    return res.status(200).json({ message: "Email verified successfully!" });
  } catch (error) {
    // Log the error and send back an error response
    console.error("Email verification error:", error);
    return res
      .status(400)
      .json({ message: "Email verification failed", error: error.message });
  }
}

// if (req.method !== 'POST') return res.status(405).send()

// const crypto = require('crypto');
// const  body = JSON.parse(req.body)

// const secretKey = COGNITO_CLIENT_SECRET; // Replace with your client secret
// const clientId = COGNITO_CLIENT_ID; // Replace with your client ID

// const hmac = crypto.createHmac('sha256', secretKey);

// hmac.update(body.email + clientId);

// const hmacDigest = hmac.digest('base64');
// const params = {
//     ClientId: COGNITO_CLIENT_ID,
//     SecretHash: hmacDigest,
//     Password: body.password,
//     Username: body.email,
//     UserAttributes: [
//         {
//             Name: 'email',
//             Value: body.email
//         }
//     ],
// }

// const cognitoClient = new CognitoIdentityProviderClient({
//     region: COGNITO_REGION
// })
// const signUpCommand = new SignUpCommand(params)
