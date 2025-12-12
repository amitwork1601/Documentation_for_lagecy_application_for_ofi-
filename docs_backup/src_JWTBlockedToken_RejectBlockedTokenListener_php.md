# RejectBlockedTokenListener.php

**Path**: `src\JWTBlockedToken\RejectBlockedTokenListener.php`

## Summary
This event listener intercepts JWT authentication events to reject tokens that have been blocked/revoked. It checks if an authenticated JWT's payload exists in a blocklist managed by `CacheItemPoolBlockedTokenManager`, throwing an `InvalidTokenException` if the token is blocked, thereby preventing access even if the token is otherwise valid. This provides a token revocation mechanism for the application's JWT-based authentication system, gracefully handling older tokens that may lack required claims like "jti" (JWT ID).

## Classes
- `RejectBlockedTokenListener`

## Function Details

### `__invoke`

- **Parameters**: `JWTAuthenticatedEvent $event`
- **Description**: From JWTAuthenticationBundle v^2.21 */
#[AutoconfigureTag(name: 'kernel.event_listener', attributes: [
'event' =&gt; 'lexik_jwt_authentication.on_jwt_authenticated',
])]
final readonly class RejectBlockedTokenListener
{
public function __construct(private CacheItemPoolBlockedTokenManager $blockedTokenManager)
{
}

/**
@throws \Psr\Cache\InvalidArgumentException
@throws InvalidTokenException
/

