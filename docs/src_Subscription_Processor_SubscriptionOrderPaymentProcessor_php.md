# SubscriptionOrderPaymentProcessor.php

**Path**: `src\Subscription\Processor\SubscriptionOrderPaymentProcessor.php`

## Summary
The `SubscriptionOrderPaymentProcessor` class handles the processing of recurring subscription order payments. It orchestrates the payment workflow by managing state transitions for subscription orders, creating and processing payments through payment gateways, and coordinating with auxiliary services like TalonOne promotions and activity tracking via message bus. This processor is specifically designed to handle the automated billing cycle for subscription-based orders, including payment gateway integration and error handling for failed payment attempts.

## Classes
- `SubscriptionOrderPaymentProcessor`

## Function Details

### `process`

- **Parameters**: `SubscriptionOrder $subscriptionOrder`
- **Description**: @throws SMException
/

### `selectAndProcessPayment`

- **Parameters**: `SubscriptionOrder $subscriptionOrder`

### `handlePaymentFailed`

- **Parameters**: `SubscriptionOrder $subscriptionOrder`

