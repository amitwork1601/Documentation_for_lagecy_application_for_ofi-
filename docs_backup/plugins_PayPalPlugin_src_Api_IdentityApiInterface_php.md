# IdentityApiInterface.php

**Path**: `plugins\PayPalPlugin\src\Api\IdentityApiInterface.php`

## Summary
This interface defines the contract for PayPal identity/authentication operations within the Sylius PayPal plugin. It specifies a single method `generateToken()` that takes an existing token string and returns a new token string, likely used for OAuth token generation or token refresh flows required to authenticate with PayPal's API services.

## Function Details

### `generateToken`

- **Parameters**: `string $token`

