# RefreshToken.php

**Path**: `src\Entity\RefreshToken\RefreshToken.php`

## Summary
This class defines a Doctrine entity for storing JWT refresh tokens in the database. It extends the base RefreshToken class from the Gesdinet JWT Refresh Token Bundle to enable token-based authentication persistence, allowing users to obtain new access tokens without re-authenticating. The entity maps to a `refresh_tokens` database table and inherits all refresh token management functionality from the parent class.

## Classes
- `RefreshToken`

