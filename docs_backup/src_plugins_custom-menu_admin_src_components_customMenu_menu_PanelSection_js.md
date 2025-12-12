# PanelSection.js

**Path**: `src\plugins\custom-menu\admin\src\components\customMenu\menu\PanelSection.js`

## Summary
This component manages a customizable menu panel section in a Strapi admin interface, allowing users to configure section properties including type (list or push), images, links, and nested items. It provides drag-and-drop functionality for reordering elements, handles different section types with conditional rendering based on whether it's a list-based menu or a push/banner section, and maintains state synchronization with a parent component through save/delete callbacks. The component serves as a form interface for building hierarchical navigation menus with support for both desktop and mobile image configurations.

## Function Details

### `onDragTabSection`

- **Parameters**: `result`

### `PanelSection`

- **Parameters**: `{ data, saveSection, deleteSection }`

### `handleChangeSection`

- **Parameters**: `e`

### `handleChangeLink`

- **Parameters**: `link`

### `handleChangeImageMobile`

- **Parameters**: `imageMobile`

### `handleChangeImage`

- **Parameters**: `image`

### `createNewItem`


### `saveProduct`

- **Parameters**: `product`

### `existingProduct`

- **Parameters**: `section?.items?.find((p`

### `deleteProductTab`

- **Parameters**: `productId`

### `displayTitle`


