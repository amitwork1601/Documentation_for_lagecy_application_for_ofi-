# UserOAuth.php

**Path**: `src\Entity\User\UserOAuth.php`

## Summary
This class represents an OAuth authentication entity for users in a Sylius-based e-commerce application. It extends Sylius's base UserOAuth model to store OAuth provider credentials and tokens, enabling users to authenticate through third-party services (like Google, Facebook, etc.) instead of traditional username/password login. The class uses Doctrine ORM for database persistence with a dedicated `sylius_user_oauth` table.

## Classes
- `UserOAuth`

