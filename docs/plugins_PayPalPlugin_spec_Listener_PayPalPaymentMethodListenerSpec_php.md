# PayPalPaymentMethodListenerSpec.php

**Path**: `plugins\PayPalPlugin\spec\Listener\PayPalPaymentMethodListenerSpec.php`

## Summary
This is a PHPSpec specification file that tests the `PayPalPaymentMethodListener` class, which handles the PayPal payment method onboarding process in a Sylius e-commerce application. The listener intercepts payment method creation events and initiates the PayPal merchant onboarding flow when a PayPal gateway is configured, ensuring proper integration setup before the payment method becomes active.

## Classes
- `PayPalPaymentMethodListenerSpec`

## Function Details

### `it_throws_an_exception_if_subject_is_not_a_payment_method`

- **Parameters**: `ResourceControllerEvent $event`

