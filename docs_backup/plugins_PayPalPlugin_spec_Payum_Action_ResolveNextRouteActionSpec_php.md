# ResolveNextRouteActionSpec.php

**Path**: `plugins\PayPalPlugin\spec\Payum\Action\ResolveNextRouteActionSpec.php`

## Summary
This is a PHPSpec test specification for a PayPal plugin action that determines the next route/page to navigate to after a payment attempt. It tests that the action correctly routes users to the PayPal payment form page for new payments (passing order token and payment ID as parameters), while handling completed payments differently based on their state.

## Classes
- `ResolveNextRouteActionSpec`

## Function Details

### `it_does_not_support_request_other_than_resolve_next_route`

- **Parameters**: `Capture $request`

### `it_does_not_support_request_with_first_model_other_than_payment`

- **Parameters**: `ResolveNextRoute $request`

