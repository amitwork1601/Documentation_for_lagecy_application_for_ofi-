# TheHeader.vue

**Path**: `apps\front-ecommerce\components\header\TheHeader.vue`

## Summary
This Vue component implements the main header/navigation for an e-commerce front-end application. It manages the mega menu navigation system with multi-level menu paths, integrates shopping cart functionality (mini-cart display with item totals), and handles customer authentication state. The component adapts between desktop and mobile breakpoints, supports touch/hover interactions for menu opening, and connects to CMS data for menu content and shop links.

## Function Details

### `onOpenMegaMenu`

- **Parameters**: `menu?: any`

### `onCloseMegaMenu`

- **Parameters**: `location?: string`

### `showMiniCart`


### `menuMainLevelTopOpen`

- **Parameters**: `id: number | string`

### `menuPanelOpen`

- **Parameters**: `id: number | string`

### `menuLightBack`


### `close`

- **Parameters**: `location?: string`

### `touchEnd`

- **Parameters**: `$event: TouchEvent, menu?: any`

### `trackingMenuNavigation`

- **Parameters**: `location: string`

### `shopLinks`

- **Parameters**: `computed((`

### `itemsTotal`

- **Parameters**: `computed((`

### `menuLightMobileMainLevel`

- **Parameters**: `computed((`

### `menuLightMobileMainLevelTop`

- **Parameters**: `computed((`

### `menuLightMobileMainLevelBottom`

- **Parameters**: `computed((`

### `hideMiniCart`

- **Parameters**: `linkClicked?: boolean`

