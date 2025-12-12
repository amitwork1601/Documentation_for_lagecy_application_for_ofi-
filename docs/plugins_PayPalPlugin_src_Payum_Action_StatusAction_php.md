# StatusAction.php

**Path**: `plugins\PayPalPlugin\src\Payum\Action\StatusAction.php`

## Summary
The `StatusAction` class is a Payum action that maps PayPal payment statuses to Sylius payment states for the PayPal plugin integration. It examines the payment model's status field and translates PayPal-specific statuses (CREATED, CAPTURED, COMPLETED) into corresponding Sylius payment markers (new, pending, captured, or failed), enabling the e-commerce platform to properly track and respond to PayPal transaction states.

## Classes
- `StatusAction`

## Function Details

### `execute`

- **Parameters**: `$request`
- **Description**: @param GetStatus $request */

### `supports`

- **Parameters**: `$request`

