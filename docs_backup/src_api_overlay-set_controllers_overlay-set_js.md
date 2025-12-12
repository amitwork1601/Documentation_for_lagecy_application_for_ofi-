# overlay-set.js

**Path**: `src\api\overlay-set\controllers\overlay-set.js`

## Summary
This is a Strapi CMS controller for managing "overlay-set" entities with enhanced data population capabilities. It overrides the default `find` and `findOne` methods to support deep population of related data, and includes flexible lookup functionality that allows querying overlay sets either by numeric ID or by slug identifier. The controller uses custom population helpers to ensure all nested relationships are properly loaded when retrieving overlay set data from the database.

## Function Details

### `populate`

- **Parameters**: `queryApi`

