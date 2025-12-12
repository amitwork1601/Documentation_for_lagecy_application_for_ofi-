# JWTCreatedListener.php

**Path**: `src\EventListener\JWTCreatedListener.php`

## Summary
This event listener intercepts JWT token creation events and enhances the token payload by adding an IRI (Internationalized Resource Identifier) reference to the authenticated user. It subscribes to the `JWT_CREATED` event from LexikJWTAuthenticationBundle and uses ApiPlatform's IRI converter to include a standardized API resource identifier for the current user in the JWT payload, enabling clients to directly reference the user resource through the API.

## Classes
- `JWTCreatedListener`

## Function Details

### `getSubscribedEvents`


### `onJWTCreated`

- **Parameters**: `JWTCreatedEvent $event`

