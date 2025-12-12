# Version20241020131444.php

**Path**: `migrations\Version20241020131444.php`

## Summary
This is a Doctrine database migration for Sylius 2.0 that removes deprecated password hashing fields (`salt` and `encoder_name`) from the user authentication tables (`sylius_admin_user` and `sylius_shop_user`). The migration modernizes the password storage mechanism by eliminating the need for separate salt storage and encoder configuration, likely moving to a more secure hashing approach where salt is embedded within the hash itself. The down migration provides rollback capability by restoring these fields if needed.

## Classes
- `Version20241020131444`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

