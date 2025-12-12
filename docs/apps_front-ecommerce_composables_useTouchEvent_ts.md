# useTouchEvent.ts

**Path**: `apps\front-ecommerce\composables\useTouchEvent.ts`

## Summary
This composable provides touch event detection functionality for distinguishing between single and double taps on touch-enabled devices in an e-commerce application. It tracks touch timestamps to determine if a touch event is a simple tap (single touch with 250ms delay verification) or a double tap (two touches within 250ms), enabling different UI behaviors based on tap patterns.

## Function Details

### `useTouchEvent`


### `isSimpleTouch`

- **Parameters**: `$event: TouchEvent`

### `isDoubleTouch`

- **Parameters**: `$event: TouchEvent`

