# localizer.js

**Path**: `src\plugins\import-akeneo\server\services\localizer.js`

## Summary
This code provides database synchronization functionality for an Akeneo import plugin, specifically comparing and syncing B2C localizer tables between two MySQL databases. It identifies missing and outdated records (based on `updated_at` timestamps) in tables like `b2c_products` and `b2c_cross_sells`, then transforms and migrates the data while handling capitalization rules and excluding certain database keys or slugs.

## Function Details

### `capitalizeString`

- **Parameters**: `input, output`

### `syncTable`

- **Parameters**: `table, db1, db2, target, excludedDBKeys, excludedSlugKeys`

### `transformRow`

- **Parameters**: `row, table, target, excludedDBKeys, excludedSlugKeys`

### `insertRowIntoTable`

- **Parameters**: `db, tableName, row`

### `fields`

- **Parameters**: `Object.keys(row).map(key`

### `values`

- **Parameters**: `Object.values(row).map(value`

### `placeholders`

- **Parameters**: `values.map((`

### `syncContent`

- **Parameters**: `strapi, clean = false`

### `tables1`

- **Parameters**: `tablesDb1.map(row`

### `tables2`

- **Parameters**: `tablesDb2.map(row`

### `cleanSlugs`

- **Parameters**: `strapi`

### `tables`

- **Parameters**: `tablesDb.map(row`

### `setClause`

- **Parameters**: `fields.map(key`

### `translateContent`

- **Parameters**: `strapi, body`

### `getSyncEntity`

- **Parameters**: `strapi`

