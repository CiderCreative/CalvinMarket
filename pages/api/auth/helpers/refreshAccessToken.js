/**
 * Refreshes the access token and returns the new tokens
 *      token: {AccessToken, AccessTokenExpires, RefreshToken, error?}
 */
import { CognitoIdentityProviderClient, InitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider";
import { signIn, signOut } from "next-auth/react";

export default async function refreshAccessToken(token, user) {
    const crypto = require('crypto');
    const client = new CognitoIdentityProviderClient({
      region: process.env.COGNITO_REGION,
    });

    const hmac = crypto.createHmac('sha256', process.env.COGNITO_CLIENT_SECRET);
    hmac.update(token.sub + process.env.COGNITO_CLIENT_ID);
    const hmacDigest = hmac.digest('base64');

    const commandProps = {
      AuthFlow: "REFRESH_TOKEN",
      ClientId: process.env.COGNITO_CLIENT_ID,
      AuthParameters: {
        SECRET_HASH: hmacDigest,
        REFRESH_TOKEN: token.RefreshToken
      },
    };
  
    try {
      const response = await client.send( new InitiateAuthCommand(commandProps));
      if (response.AuthenticationResult) {
        // Replace the old tokens with the new ones
        return {
          ...token,
          AccessToken: response.AuthenticationResult.AccessToken,
          AccessTokenExpires: Date.now() + response.AuthenticationResult.ExpiresIn * 1000,
          RefreshToken: response.AuthenticationResult.RefreshToken ?? token.RefreshToken, // Renew the refresh token, if it's returned
        };
      } else {
        // The refresh token is invalid, sign out the user
        await signOut({ callbackUrl: "/LogIn"});
        throw new Error("RefreshAccessTokenError");
      }
    } catch (error) {
      await signOut({ callbackUrl: "/LogIn"});
      return {
        ...token,
        error: "RefreshAccessTokenError",
      };
    }
}