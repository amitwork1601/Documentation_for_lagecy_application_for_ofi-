# GetShippingMethodRuleSchema.php

**Path**: `src\Api\Controller\ShippingMethod\GetShippingMethodRuleSchema.php`

## Summary
This controller generates a JSON schema for shipping method rule configuration forms in an e-commerce system. It dynamically builds a form schema that includes a dropdown to select a shipping method rule type, and for each registered rule type, it serializes its specific configuration form fields and options, enabling frontend clients to render appropriate forms based on the selected rule type.

## Classes
- `GetShippingMethodRuleSchema`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

