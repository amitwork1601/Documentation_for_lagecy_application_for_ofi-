# shop.js

**Path**: `src\plugins\import-akeneo\server\services\shop.js`

## Summary
This service module manages Google My Business API integration for syncing shop/location data and reviews within an Akeneo import plugin for Strapi. It handles OAuth2 authentication with Google APIs (including token refresh logic), initializes Google API clients, and provides utility functions for transforming Google Business data (like converting rating enums to numbers and processing shop names). The code serves as a bridge between Strapi's shop management system and Google My Business locations, enabling automated synchronization of business information and customer reviews.

## Function Details

### `initGlobal`

- **Parameters**: `strapi`

### `ratingToNumber`

- **Parameters**: `rating`

### `nameTransformer`

- **Parameters**: `name`

### `commentTransformer`

- **Parameters**: `comment`

### `googleShopsLoader`


