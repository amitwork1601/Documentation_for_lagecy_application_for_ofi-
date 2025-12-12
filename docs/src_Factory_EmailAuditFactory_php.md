# EmailAuditFactory.php

**Path**: `src\Factory\EmailAuditFactory.php`

## Summary
This factory class creates `EmailAudit` entities used for tracking and auditing email communications in the application. It decorates the base factory with a `createNewFromParams()` method that initializes audit records with email template details (template key, slug), recipient information (customer email), and template parameters, providing a convenient way to log email activity for compliance or debugging purposes.

## Classes
- `EmailAuditFactory`

## Function Details

### `createNew`


