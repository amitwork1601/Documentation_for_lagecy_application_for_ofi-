# pixie.js

**Path**: `src\plugins\pixie\server\services\pixie.js`

## Summary
This file implements a Strapi plugin service that acts as a client interface to a Pixie campaign management API. It provides CRUD operations (create, read, update, delete) for campaigns and retrieves action/condition schemas, using HTTP basic authentication to communicate with an external Pixie endpoint configured in the plugin settings.

## Function Details

### `initGlobals`

- **Parameters**: `strapi`

