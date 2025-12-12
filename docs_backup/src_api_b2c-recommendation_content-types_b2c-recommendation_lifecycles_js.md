# lifecycles.js

**Path**: `src\api\b2c-recommendation\content-types\b2c-recommendation\lifecycles.js`

## Summary
This lifecycle hook module triggers localization operations for B2C recommendation content after creation or updates. Specifically, it calls the `localize()` service from the `import-akeneo` plugin whenever a B2C recommendation entity is created or modified, ensuring that product data imported from Akeneo PIM is properly localized across different language/region variants.

