# DisplayImages.vue

**Path**: `apps\front-ecommerce\components\product\DisplayImages.vue`

## Summary
This Vue component manages product image display functionality for an e-commerce site, including both image carousel navigation and zoom capabilities. It implements desktop hover-to-zoom with dynamic positioning and a mobile touch-based zoom dialog with pinch/drag interactions. The component adapts between desktop and mobile viewing modes using breakpoints, allowing users to view product images in detail through different interaction patterns optimized for each device type.

## Function Details

### `setCurrentIndexImage`

- **Parameters**: `index: number`

### `handleMouseEnter`


### `handleMouseLeave`


### `handleMouseMove`

- **Parameters**: `event: MouseEvent, index: number`

### `openZoomOnTouch`


### `setDivImageToDoubleTap`

- **Parameters**: `scrollX: number, scrollY: number`

### `changeScale`

- **Parameters**: `$event: TouchEvent | MouseEvent`

### `isDoubleTouch`

- **Parameters**: `$event: TouchEvent`

### `touchEnd`

- **Parameters**: `$event: TouchEvent`

### `transformOrigin`

- **Parameters**: `computed((`

