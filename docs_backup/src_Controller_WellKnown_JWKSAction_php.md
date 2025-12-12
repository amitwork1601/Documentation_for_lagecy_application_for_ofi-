# JWKSAction.php

**Path**: `src\Controller\WellKnown\JWKSAction.php`

## Summary
This controller implements a JWKS (JSON Web Key Set) endpoint, commonly found at `/.well-known/jwks.json`, which exposes the server's public key in JWK format for JWT token verification. It reads an RSA public key from the filesystem, extracts its cryptographic parameters (modulus and exponent), and returns them as a standardized JSON response that allows external clients to validate JWT signatures issued by this application.

## Classes
- `JWKSAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

