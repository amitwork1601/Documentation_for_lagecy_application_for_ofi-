# AdditionalAccessTokenClaimsAndHeaderSubscriber.php

**Path**: `src\JWTBlockedToken\AdditionalAccessTokenClaimsAndHeaderSubscriber.php`

## Summary
This Symfony event subscriber enhances JWT access tokens by automatically adding a unique `jti` (JWT ID) claim to each generated token. The `jti` claim provides a unique identifier for each token, which is essential for implementing token blocklisting/revocation functionality, allowing the application to track and invalidate specific tokens even before their expiration time.

## Classes
- `AdditionalAccessTokenClaimsAndHeaderSubscriber`

## Function Details

### `getSubscribedEvents`


### `addClaims`

- **Parameters**: `JWTCreatedEvent $event`

