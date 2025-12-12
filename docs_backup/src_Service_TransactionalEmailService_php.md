# TransactionalEmailService.php

**Path**: `src\Service\TransactionalEmailService.php`

## Summary
The `TransactionalEmailService` class handles sending transactional emails through the SendinBlue API by retrieving email templates from a Strapi CMS based on channel configuration. It creates email audit records for tracking, fetches localized email content from Strapi using template slugs, and manages the complete email sending workflow including channel resolution, template retrieval, and audit logging for customer communications.

## Classes
- `TransactionalEmailService`

## Function Details

### `send`

- **Parameters**: `string $templateKey, array $to, ?string $channelCode = null, array $options = []`

### `getTemplateSlug`

- **Parameters**: `string $templateKey`

### `getLocaleCodeFromCustomer`

- **Parameters**: `string $email`

