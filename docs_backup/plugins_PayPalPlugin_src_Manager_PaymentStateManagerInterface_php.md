# PaymentStateManagerInterface.php

**Path**: `plugins\PayPalPlugin\src\Manager\PaymentStateManagerInterface.php`

## Summary
This interface defines a contract for managing payment state transitions in the PayPal plugin for Sylius e-commerce platform. It provides four core methods (`create`, `process`, `complete`, and `cancel`) that handle the different lifecycle stages of a payment, enabling implementations to orchestrate payment state changes according to PayPal's payment workflow.

## Function Details

### `create`

- **Parameters**: `PaymentInterface $payment`

### `process`

- **Parameters**: `PaymentInterface $payment`

### `complete`

- **Parameters**: `PaymentInterface $payment`

### `cancel`

- **Parameters**: `PaymentInterface $payment`

