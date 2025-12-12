# useOrder.ts

**Path**: `apps\front-ecommerce\composables\useOrder.ts`

## Summary
This Vue composable provides order state management and status determination logic for an e-commerce application. It accepts an optional order object and exposes computed properties that check various order states (cancelled, shipped, payment errors, awaiting payment) by evaluating combinations of checkout state, payment state, and shipping state flags. The composable centralizes business logic for determining order status based on multiple state properties, making it easier to conditionally render UI elements or trigger actions based on the current order lifecycle stage.

## Function Details

### `useOrder`

- **Parameters**: `order?: MaybeRef<IOrder | undefined>`

### `getMostExpensiveItem`

- **Parameters**: `computedAsync(async (`

### `getShipment`

- **Parameters**: `computed((`

