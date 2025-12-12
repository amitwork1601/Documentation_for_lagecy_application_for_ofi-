# lifecycles.js

**Path**: `src\api\b2c-header\content-types\b2c-header\lifecycles.js`

## Summary
This file defines lifecycle hooks for the B2C header content type that trigger localization operations after header content is created or updated. Specifically, it calls the `localize()` service from the `import-akeneo` plugin to ensure header content is properly localized across different languages/regions whenever changes are made. This ensures that B2C header data remains synchronized and localized throughout the system after any CRUD operations.

