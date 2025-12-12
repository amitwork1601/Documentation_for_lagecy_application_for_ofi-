# Link.js

**Path**: `src\plugins\custom-menu\admin\src\components\customMenu\menu\Link.js`

## Summary
This React component provides a form interface for creating and editing custom menu links in a Strapi admin panel. It renders two input fields (URL and label) side-by-side, manages the link state locally, and propagates changes to a parent component through the `handleChangeLink` callback using a trigger-based effect pattern to batch updates.

## Function Details

### `Link`

- **Parameters**: `{ required, dataLink, title, handleChangeLink }`

