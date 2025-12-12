# OnboardingProcessorInterface.php

**Path**: `plugins\PayPalPlugin\src\Onboarding\Processor\OnboardingProcessorInterface.php`

## Summary
This interface defines a contract for processing PayPal onboarding workflows within a Sylius e-commerce payment system. It requires implementers to handle the onboarding process for PayPal payment methods by processing HTTP requests and determining support for specific payment method configurations. The interface enables a strategy pattern where different processors can handle various PayPal onboarding scenarios based on the payment method and request context.

## Function Details

### `process`

- **Parameters**: `PaymentMethodInterface $paymentMethod, Request $request`

### `supports`

- **Parameters**: `PaymentMethodInterface $paymentMethod, Request $request`

