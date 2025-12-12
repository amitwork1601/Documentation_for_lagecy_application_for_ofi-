# GetPaymentMethodGatewaySchema.php

**Path**: `src\Api\Controller\PaymentMethod\GetPaymentMethodGatewaySchema.php`

## Summary
This controller generates a JSON schema for payment method gateway configuration forms. It iterates through registered gateway factories, creates their respective configuration forms, and serializes them into a nested schema structure where each gateway type is presented as a choice option with its own dynamic configuration fields, enabling dynamic form generation in the frontend based on the selected payment gateway type.

## Classes
- `GetPaymentMethodGatewaySchema`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

