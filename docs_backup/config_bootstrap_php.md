# bootstrap.php

**Path**: `config\bootstrap.php`

## Summary
This is a Symfony application bootstrap file that initializes the runtime environment by loading environment variables from `.env` files (with support for cached and context-specific variants) and configuring application settings. It sets up `APP_ENV` and `APP_DEBUG` server variables with appropriate defaults and overrides Doctrine's default date/datetime types to use custom UTC-based implementations, ensuring consistent timezone handling across the application's database layer.

