# b2c-localizer.js

**Path**: `src\api\b2c-localizer\routes\b2c-localizer.js`

## Summary
This Strapi router configuration file extends the default b2c-localizer content type router with custom localization endpoints. It adds three custom routes that handle localization requests (GET/POST to `/localizer/*`) and translation data updates (GET to `/localizer-translate/`), enabling dynamic content localization for a B2C (business-to-consumer) application by routing requests to corresponding controller handlers.

## Function Details

### `customRouter`

- **Parameters**: `innerRouter, extraRoutes = []`

