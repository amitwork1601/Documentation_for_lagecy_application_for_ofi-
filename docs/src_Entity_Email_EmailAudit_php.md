# EmailAudit.php

**Path**: `src\Entity\Email\EmailAudit.php`

## Summary
The `EmailAudit` entity is a Doctrine ORM model that tracks and logs email sending activities within the Sylius e-commerce system. It stores comprehensive audit information including template details, recipient email, message IDs, parameters, validation errors, Strapi CMS content, and any exceptions that occurred during email delivery. This entity is exposed via GraphQL API with filtering and ordering capabilities, enabling administrators to query and monitor email communication history for debugging and compliance purposes.

## Classes
- `EmailAudit`

## Function Details

### `__construct`


### `getId`


### `getListInvalidProperties`


### `setListInvalidProperties`

- **Parameters**: `?array $listInvalidProperties`

### `getStrapiContents`


### `setStrapiContents`

- **Parameters**: `?array $strapiContents`

### `getException`


### `setException`

- **Parameters**: `?string $exception`

### `getParameters`


### `setParameters`

- **Parameters**: `?array $parameters`

### `getCreatedAt`


### `getTemplateName`


### `setTemplateName`

- **Parameters**: `string $templateName`

### `getTemplateSlug`


### `setTemplateSlug`

- **Parameters**: `?string $templateSlug`

### `getCustomerEmail`


### `setCustomerEmail`

- **Parameters**: `string $customerEmail`

### `getMessageId`


### `setMessageId`

- **Parameters**: `?string $messageId`

