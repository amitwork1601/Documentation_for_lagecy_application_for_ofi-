# ProcessPayPalOrderAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\ProcessPayPalOrderAction.php`

## Summary
This controller action handles the processing of PayPal orders within a Sylius e-commerce system. It manages the complete order completion workflow including customer creation/retrieval, address management, payment state transitions, and order checkout state machine processing by integrating with PayPal's API to retrieve order details and authorize payments.

## Classes
- `ProcessPayPalOrderAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

### `getOrderCustomer`

- **Parameters**: `array $customerData`

### `getOrderDetails`

- **Parameters**: `string $id, PaymentInterface $payment`

