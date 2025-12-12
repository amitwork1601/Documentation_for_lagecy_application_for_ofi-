# JunkEmail.php

**Path**: `src\Validator\JunkEmail.php`

## Summary
The `JunkEmail` class is a custom Symfony validation constraint that checks if an email address belongs to a blacklisted email provider. It extends Symfony's `Constraint` class and can be applied as either a PHP attribute or annotation to class properties and methods to prevent users from registering with disposable or junk email services. The constraint includes a customizable error message, an optional normalizer callback for preprocessing email values before validation, and defines a specific error code (`EMAIL_IS_JUNK_ERROR`) for when validation fails.

## Classes
- `JunkEmail`

