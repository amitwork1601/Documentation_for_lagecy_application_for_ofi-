# gesdinet_jwt_refresh_token.yaml

**Path**: `config\packages\gesdinet_jwt_refresh_token.yaml`

## Summary
This configuration file sets up JWT refresh token behavior for the Gesdinet JWT Refresh Token Bundle in a Symfony application. It specifies that refresh tokens should use a custom `RefreshToken` entity class, have a 30-day time-to-live (2,592,000 seconds), and automatically update the TTL when tokens are refreshed. This enables secure, long-lived authentication sessions where users can obtain new access tokens without re-authenticating frequently.

