# MissingClaimException.php

**Path**: `src\JWTBlockedToken\MissingClaimException.php`

## Summary
This exception class handles the specific case when a required claim is missing from a JWT (JSON Web Token) payload during authentication. It extends the JWTAuthenticationBundle's failure exception to provide a standardized error message and failure reason ('missing_claim') when JWT token validation fails due to an absent required claim, which is essential for enforcing JWT token integrity and security requirements.

## Classes
- `MissingClaimException`

