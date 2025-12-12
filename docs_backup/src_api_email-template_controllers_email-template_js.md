# email-template.js

**Path**: `src\api\email-template\controllers\email-template.js`

## Summary
This is a Strapi controller for rendering email templates with dynamic content and localization support. It fetches email templates by slug, handles internationalization by selecting the appropriate locale (including localizations), and uses the Twing templating engine to render the template with provided parameters. The controller also integrates with ImageKit for asset management and supports multipart form data parsing for template parameter injection.

## Function Details

### `parseBody`

- **Parameters**: `ctx`

### `variant`

- **Parameters**: `value.ProductVariants.find((variant`

