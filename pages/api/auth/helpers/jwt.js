/**
 * Helper function to refresh the access token
 */
import refreshAccessToken from "./refreshAccessToken";

export default async function jwt(token, user, account) {
  // If account is not null, it's a sign-in event
  if (account && user) {
    token.AccessToken = user.AccessToken;
    token.AccessTokenExpires = Date.now() + user.ExpiresIn * 1000;
    token.RefreshToken = user.RefreshToken;
    return token;
  }
  // Return previous token if the access token has not expired yet
  if (Date.now() < token.AccessTokenExpires) {
    return token;
  }
  // Access token has expired, try to update it
  return refreshAccessToken(token, user);
}
