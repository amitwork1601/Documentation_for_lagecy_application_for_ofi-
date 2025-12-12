# CacheItemPoolBlockedTokenManager.php

**Path**: `src\JWTBlockedToken\CacheItemPoolBlockedTokenManager.php`

## Summary
This class manages a blocklist/revocation system for JWT tokens by storing blocked token IDs (JTI claims) in a PSR-6 cache implementation. It provides functionality to add tokens to the blocklist with automatic expiration based on the token's exp claim (plus 45 minutes buffer), check if a token is blocked, and remove tokens from the blocklist, enabling token invalidation before their natural expiration for logout or security scenarios.

## Classes
- `CacheItemPoolBlockedTokenManager`

## Function Details

### `add`

- **Parameters**: `array $payload`
- **Description**: From JWTAuthenticationBundle v^2.21 */
final readonly class CacheItemPoolBlockedTokenManager
{
public function __construct(private CacheItemPoolInterface $cacheJwt)
{
}

/**
@param array $payload

@return bool

@throws MissingClaimException
@throws InvalidArgumentException
@throws \Exception
/

### `has`

- **Parameters**: `array $payload`
- **Description**: @param array $payload

@return bool

@throws MissingClaimException
@throws InvalidArgumentException
/

### `remove`

- **Parameters**: `array $payload`
- **Description**: @param array $payload

@throws MissingClaimException
@throws InvalidArgumentException
/

