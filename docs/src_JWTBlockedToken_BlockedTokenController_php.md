# BlockedTokenController.php

**Path**: `src\JWTBlockedToken\BlockedTokenController.php`

## Summary
This controller implements JWT token revocation/blacklisting functionality by allowing clients to explicitly block/invalidate JWT tokens before they naturally expire. When invoked, it extracts a JWT from the request, validates and parses it, then adds the token's payload to a cache-based blocked token manager, returning HTTP 201 on success or HTTP 204 if the token is missing, invalid, or lacks required claims.

## Classes
- `BlockedTokenController`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

