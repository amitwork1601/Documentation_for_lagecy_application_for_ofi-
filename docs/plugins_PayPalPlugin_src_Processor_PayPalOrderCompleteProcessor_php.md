# PayPalOrderCompleteProcessor.php

**Path**: `plugins\PayPalPlugin\src\Processor\PayPalOrderCompleteProcessor.php`

## Summary
This class processes the completion of PayPal orders in a Sylius e-commerce system. It retrieves the last processing payment from an order, verifies it uses the PayPal payment gateway ('sylius.pay_pal'), and delegates to a payment state manager to mark the payment as complete. This processor serves as a specialized handler to finalize PayPal-specific payment flows within the broader order processing workflow.

## Classes
- `PayPalOrderCompleteProcessor`

## Function Details

### `__construct`

- **Parameters**: `PaymentStateManagerInterface $paymentStateManager`

### `completePayPalOrder`

- **Parameters**: `OrderInterface $order`

