# 5-google-identity.client.ts

**Path**: `apps\front-ecommerce\plugins\5-google-identity.client.ts`

## Summary
This Nuxt plugin handles Google Identity authentication by intercepting Google OAuth callbacks and processing JWT tokens. When a Google sign-in occurs, it attempts to authenticate the user with the customer store using the Google token and reCAPTCHA verification, then either redirects to their intended destination (or account page) on success, or to the login page with the token as a query parameter on failure.

## Function Details

### `loginWithGoogleJWT`

- **Parameters**: `token: string`

