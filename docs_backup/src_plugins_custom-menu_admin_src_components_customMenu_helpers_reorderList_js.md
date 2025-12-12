# reorderList.js

**Path**: `src\plugins\custom-menu\admin\src\components\customMenu\helpers\reorderList.js`

## Summary
This utility function implements drag-and-drop reordering functionality for menu items in a custom menu plugin. It takes a list and two indices, removes an item from the start position, and inserts it at the end position, returning the reordered array. This is a common pattern used with drag-and-drop libraries (like react-beautiful-dnd) to update the order of menu items when administrators rearrange them in the Strapi admin interface.

## Function Details

### `reorder`

- **Parameters**: `list, startIndex, endIndex`

