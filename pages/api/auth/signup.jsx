import { CognitoIdentityProviderClient, SignUpCommand } from '@aws-sdk/client-cognito-identity-provider'


export default async function handler(req, res) {
    //if (req.method !== 'POST') return res.status(405).send()

    const crypto = require('crypto');
    const  body = JSON.parse(req.body)

    const hmac = crypto.createHmac('sha256', process.env.COGNITO_CLIENT_SECRET);
    
    hmac.update(body.email + process.env.COGNITO_CLIENT_ID);
    
    const hmacDigest = hmac.digest('base64');
    const params = {
        ClientId: process.env.COGNITO_CLIENT_ID,
        SecretHash: hmacDigest,
        Password: body.password,
        Username: body.email,
        UserAttributes: [
            {
                Name: 'email',
                Value: body.email
            }
        ],
    }

    const cognitoClient = new CognitoIdentityProviderClient({
        region: process.env.COGNITO_REGION
    })
    const signUpCommand = new SignUpCommand(params)

    try {
        const response = await cognitoClient.send(signUpCommand)
        return res.status(response['$metadata'].httpStatusCode).send()
    } catch (err) {
        console.log(err)
        if(err['__type'] === 'UsernameExistsException'){
            return res.status(err['$metadata'].httpStatusCode).json({msg: "Username already exists"});
        }
        else if(err['__type'] === 'InvalidPasswordException'){
            return res.status(err['$metadata'].httpStatusCode).json({msg: err.message});
        }
        return res.status(err['$metadata'].httpStatusCode).send();
    }
}

