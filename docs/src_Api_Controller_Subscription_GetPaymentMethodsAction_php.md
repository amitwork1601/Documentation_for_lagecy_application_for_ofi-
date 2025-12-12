# GetPaymentMethodsAction.php

**Path**: `src\Api\Controller\Subscription\GetPaymentMethodsAction.php`

## Summary
This API controller action retrieves available payment methods for a subscription's draft order. It extracts a subscription from the request, ensures it has a draft order with an associated payment object (creating one if necessary), then uses the payment methods resolver to return all supported payment methods for that payment. This enables clients to present valid payment options to users during the subscription checkout or payment update process.

## Classes
- `GetPaymentMethodsAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

### `getPayment`

- **Parameters**: `SubscriptionOrder $draftOrder`

