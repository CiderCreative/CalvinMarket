import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  AuthFlowType,
} from "@aws-sdk/client-cognito-identity-provider";
import { decode } from "jsonwebtoken";
import jwt from "./helpers/jwt";
import { Config } from "sst/node/config";

process.env.NEXTAUTH_URL = Config.NEXTAUTH_URL;
process.env.NEXTAUTH_SECRET = Config.NEXTAUTH_SECRET;

export const authOptions = {
  secret: Config.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const crypto = require("crypto");
        const client = new CognitoIdentityProviderClient({
          region: Config.COGNITO_REGION,
        });

        // Check if credentials are defined
        if (!credentials || !credentials.username || !credentials.password) {
          // Handle the case where credentials are not provided or incomplete
          return null;
        }

        const hmac = crypto.createHmac("sha256", Config.COGNITO_CLIENT_SECRET);
        hmac.update(credentials.username + Config.COGNITO_CLIENT_ID);
        const hmacDigest = hmac.digest("base64");

        const signInParams = {
          AuthFlow: "USER_PASSWORD_AUTH" as AuthFlowType,
          ClientId: Config.COGNITO_CLIENT_ID,
          AuthParameters: {
            SECRET_HASH: hmacDigest,
            USERNAME: credentials.username,
            PASSWORD: credentials.password,
          },
        };

        try {
          const res = await client.send(new InitiateAuthCommand(signInParams));
          if (res.AuthenticationResult?.IdToken) {
            const decodedToken = decode(res.AuthenticationResult.IdToken) as {
              sub: string;
              email: string;
            };

            if (decodedToken) {
              return Promise.resolve({
                ...res.AuthenticationResult,
                id: decodedToken.sub,
                email: decodedToken.email,
              });
            }
          }
        } catch (error) {
          console.error("Authorize error:", error);
          return Promise.resolve(null);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    //ensures all tokens are good and up to date
    //token includes email, sub, AccessToken, AccessTokenExpires, Refresh Token, iat, exp, and jti
    async jwt({ token, user, account }) {
      return jwt(token, user, account);
    },
    //basically just takes the token and adds it to the session objs (but doesn't add them 4 sum reason)
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          ...token,
        };

        if (token.error) {
          session.error = token.error;
        }
      }
      return session;
    },
  },
  pages: {
    signIn: "/SignUp",
  },
  // Add other NextAuth options as needed
};

export default NextAuth(authOptions);
