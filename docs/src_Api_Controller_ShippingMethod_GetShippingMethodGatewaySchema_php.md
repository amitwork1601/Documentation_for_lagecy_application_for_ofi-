# GetShippingMethodGatewaySchema.php

**Path**: `src\Api\Controller\ShippingMethod\GetShippingMethodGatewaySchema.php`

## Summary
This controller generates a JSON schema for shipping method gateway configuration forms. It dynamically builds a form structure by iterating through registered gateway factories, creating a choice field for gateway types and serializing each gateway's specific configuration form fields, which enables frontend rendering of shipping method gateway configuration interfaces.

## Classes
- `GetShippingMethodGatewaySchema`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

