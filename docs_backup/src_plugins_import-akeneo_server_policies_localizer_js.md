# localizer.js

**Path**: `src\plugins\import-akeneo\server\policies\localizer.js`

## Summary
This code implements a token-based authentication policy for the Akeneo import plugin's localizer functionality. It validates incoming requests by comparing the provided token in the request header against a stored API secret retrieved from the plugin configuration, returning false (denying access) if the token is missing or doesn't match, and true (allowing access) if authentication succeeds.

