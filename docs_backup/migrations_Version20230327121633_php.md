# Version20230327121633.php

**Path**: `migrations\Version20230327121633.php`

## Summary
This is a Doctrine database migration for Sylius e-commerce platform that modifies the OAuth user authentication schema. The migration changes the `access_token` and `refresh_token` columns in the `sylius_user_oauth` table from VARCHAR(255) to TEXT type to accommodate longer token values that exceed the previous 255-character limit. This update ensures OAuth integration can handle modern authentication providers that may issue tokens longer than the original column size allowed.

## Classes
- `Version20230327121633`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

