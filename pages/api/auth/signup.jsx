import { CognitoIdentityProviderClient, SignUpCommand } from '@aws-sdk/client-cognito-identity-provider'

const { COGNITO_REGION, COGNITO_CLIENT_ID, COGNITO_CLIENT_SECRET } = process.env

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send()

    const crypto = require('crypto');


    const secretKey = COGNITO_CLIENT_SECRET; // Replace with your client secret
    const username = req.body.email; // Replace with the username
    const clientId = COGNITO_CLIENT_ID; // Replace with your client ID
    
    const hmac = crypto.createHmac('sha256', secretKey);
    
    hmac.update(username + clientId);
    
    const hmacDigest = hmac.digest('base64');
    const params = {
        ClientId: COGNITO_CLIENT_ID,
        SecretHash: hmacDigest,
        Password: req.body.password,
        Username: req.body.email,
        UserAttributes: [
            {
                Name: 'email',
                Value: req.body.email
            }
        ],
    }

    const cognitoClient = new CognitoIdentityProviderClient({
        region: COGNITO_REGION
    })
    const signUpCommand = new SignUpCommand(params)

    try {
        const response = await cognitoClient.send(signUpCommand)
        return res.status(response['$metadata'].httpStatusCode).send()
    } catch (err) {
        console.log(err)
        return res.status(err['$metadata'].httpStatusCode).json({ message: err.toString() })
    }
}

