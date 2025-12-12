# Panels.js

**Path**: `src\plugins\custom-menu\admin\src\components\customMenu\menu\Panels.js`

## Summary
This React component renders a draggable list of menu panels for a Strapi custom menu plugin, allowing users to organize and manage multiple panel sections within a menu structure. It provides UI for adding new panels via "Add a panel" buttons (shown both when empty and at the bottom of the list), deleting existing panels, and reordering them through drag-and-drop functionality. The component serves as a container that orchestrates panel management operations by delegating create, save, delete, and drag-end actions to parent component handlers.

## Function Details

### `Panels`

- **Parameters**: `{ data, savePanels, createNewPanel, deletePanel, handleDragEnd }`

