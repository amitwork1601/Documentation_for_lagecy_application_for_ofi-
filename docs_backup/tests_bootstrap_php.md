# bootstrap.php

**Path**: `tests\bootstrap.php`

## Summary
This is a PHPUnit test bootstrap file that initializes the testing environment for a Symfony application. It loads Composer's autoloader and then either includes the application's main bootstrap configuration file or falls back to loading environment variables from a `.env` file using Symfony's Dotenv component. This ensures all necessary dependencies and environment configurations are available before running the test suite.

