# MiniCart.vue

**Path**: `apps\front-ecommerce\components\cart\MiniCart.vue`

## Summary
This Vue component implements a mini shopping cart dropdown that displays when users hover over the cart icon in an e-commerce application. It manages cart item display and removal functionality, integrates with the cart store (Pinia) for state management, and includes tracking analytics when items are removed from the cart. The component handles responsive positioning based on language locale availability and provides smooth transition animations for showing/hiding the cart overlay.

## Function Details

### `removeItemFromCart`

- **Parameters**: `item: ICartItem`

### `tracking`

- **Parameters**: `{ itemRemoved }: { itemRemoved?: ICartItem }`

