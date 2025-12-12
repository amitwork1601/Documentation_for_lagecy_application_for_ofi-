# format.js

**Path**: `src\plugins\custom-menu\admin\src\components\customMenu\helpers\format.js`

## Summary
This module formats and normalizes custom menu data structures by parsing JSON and ensuring all nested objects have unique IDs. It supports two menu types: 'full' (complex menus with panels, configs, and mobile images) and 'light' (simpler menus with submenus and links), generating UUIDs for any items missing IDs to enable proper tracking and manipulation of menu hierarchies in a CMS or e-commerce admin interface.

## Function Details

### `formatMenu`

- **Parameters**: `customMenu, type`

### `Panels`

- **Parameters**: `menu?.Panels?.map((panel`

### `Config`

- **Parameters**: `panel?.Config?.map((config`

### `items`

- **Parameters**: `config?.items?.map((item`

### `sub_menus`

- **Parameters**: `menu?.sub_menus?.map((submenu`

### `links`

- **Parameters**: `submenu?.links?.map((link`

