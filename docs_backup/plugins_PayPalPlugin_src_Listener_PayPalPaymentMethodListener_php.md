# PayPalPaymentMethodListener.php

**Path**: `plugins\PayPalPlugin\src\Listener\PayPalPaymentMethodListener.php`

## Summary
The `PayPalPaymentMethodListener` class manages PayPal payment method creation and configuration within a Sylius e-commerce system. It enforces business rules by preventing multiple PayPal payment methods from being created (only one seller account allowed) and initiates the PayPal onboarding process when a new PayPal payment method is being set up, redirecting administrators through the necessary configuration flow.

## Classes
- `PayPalPaymentMethodListener`

## Function Details

### `initializeCreate`

- **Parameters**: `ResourceControllerEvent $event`

### `isNewPaymentMethodPayPal`

- **Parameters**: `PaymentMethodInterface $paymentMethod`

### `isTherePayPalPaymentMethod`


