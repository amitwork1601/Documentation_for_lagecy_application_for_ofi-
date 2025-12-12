# import-akeneo.js

**Path**: `src\plugins\import-akeneo\server\controllers\import-akeneo.js`

## Summary
This controller provides API endpoints for a Strapi plugin that imports and manages product data from Akeneo PIM (Product Information Management) system. It handles operations such as importing individual products or bulk products, localizing/translating product content across different languages, and checking if the import functionality is enabled. The controller acts as the HTTP interface layer that delegates the actual import, localization, and translation work to underlying service modules (importer and localizer services).

## Function Details

### `localize`


