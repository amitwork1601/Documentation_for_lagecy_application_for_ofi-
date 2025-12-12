# b2c-localizer.js

**Path**: `src\api\b2c-localizer\controllers\b2c-localizer.js`

## Summary
This is a Strapi controller that handles B2C (Business-to-Consumer) content localization by dynamically translating API responses based on requested locale parameters. It retrieves localization configurations from the database, maps front-end locale requests to target locales, then proxies and transforms API requests through a localization service to return translated content. The controller enables multi-language support for customer-facing content by intercepting API calls and applying locale-specific translations before returning responses.

## Function Details

### `config`

- **Parameters**: `configs?.find(item`

### `contentTypes`

- **Parameters**: `Object.values(strapi.contentTypes).filter(type`

