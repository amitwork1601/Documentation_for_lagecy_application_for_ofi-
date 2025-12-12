# b2c-footer.js

**Path**: `src\api\b2c-footer\controllers\b2c-footer.js`

## Summary
This is a Strapi CMS controller for managing a B2C (business-to-consumer) website footer as a single-type content entity. It overrides the default `find` method to retrieve footer data with deep population of nested relationships, specifically customizing how USP (Unique Selling Proposition) lists and their associated images are populated before returning the sanitized response. The controller ensures all footer content, including nested marketing elements like USPs, are fully loaded for front-end display.

## Function Details

### `populate`


