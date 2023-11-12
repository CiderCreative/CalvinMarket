/**
 * Refreshes the access token and returns the new tokens
 *      token: {AccessToken, AccessTokenExpires, RefreshToken, error?}
 */
import { CognitoIdentityProviderClient, InitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider";
import { signIn, signOut } from "next-auth/react";

export default async function refreshAccessToken(token) {
    const client = new CognitoIdentityProviderClient({
      region: process.env.COGNITO_REGION,
    });
    const command = new InitiateAuthCommand({
      ClientId: process.env.COGNITO_CLIENT_ID,
      AuthFlow: "REFRESH_TOKEN_AUTH",
      AuthParameters: {
        REFRESH_TOKEN: token.RefreshToken,
      },
    });
  
    try {
      const response = await client.send(command);
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
        await signOut({ callbackUrl: "/login"});
        throw new Error("RefreshAccessTokenError");
      }
    } catch (error) {
      console.error("RefreshAccessTokenError", error);
      return {
        ...token,
        error: "RefreshAccessTokenError",
      };
    }
}