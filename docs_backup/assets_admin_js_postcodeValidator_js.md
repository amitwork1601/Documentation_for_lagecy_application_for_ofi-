# postcodeValidator.js

**Path**: `assets\admin\js\postcodeValidator.js`

## Summary
This code serves as a bridge module that imports postcode validation functionality from the 'postcode-validator' library and exposes it globally to the admin interface. It makes two functions available globally: one for validating postcodes/zip codes against country-specific formats, and another for checking if validation rules exist for a given country. This allows the admin UI to perform client-side postal code validation across different international formats without requiring module imports in legacy code.

