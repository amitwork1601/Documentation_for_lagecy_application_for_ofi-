# b2c-subscription.js

**Path**: `src\api\b2c-subscription\routes\b2c-subscription.js`

## Summary
This file defines a custom Strapi router for B2C (Business-to-Consumer) subscription management that extends the default CRUD operations. It excludes the standard "findOne" route and adds a custom GET endpoint `/b2c-subscriptions/:locale` to retrieve subscriptions filtered by locale/language, enabling internationalized subscription data retrieval for consumer-facing applications.

## Function Details

### `customRouter`

- **Parameters**: `innerRouter, extraRoutes = []`

