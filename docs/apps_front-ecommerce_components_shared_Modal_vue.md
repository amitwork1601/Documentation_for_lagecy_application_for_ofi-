# Modal.vue

**Path**: `apps\front-ecommerce\components\shared\Modal.vue`

## Summary
This is a reusable modal/dialog component for an e-commerce application that provides a customizable overlay interface. It manages dialog state through props (open/close, positioning options like centerMobile, sideDesktop, fitDesktop), handles opening/closing animations with different transitions for mobile (slide up) and desktop (slide from side), and uses Vue's Teleport to render the modal in the document body. The component includes commented-out body scroll prevention functionality and emits close events to parent components, with lifecycle hooks to synchronize the dialog state with the component's mounted/unmounted lifecycle.

## Function Details

### `openDialog`


### `closeDialog`

- **Parameters**: `event: string`

