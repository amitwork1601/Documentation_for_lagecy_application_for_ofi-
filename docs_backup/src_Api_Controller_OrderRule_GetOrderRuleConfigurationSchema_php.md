# GetOrderRuleConfigurationSchema.php

**Path**: `src\Api\Controller\OrderRule\GetOrderRuleConfigurationSchema.php`

## Summary
This controller generates a JSON schema that describes the configuration options for order rule conditions in an e-commerce system. It dynamically builds a form schema by iterating through available rule condition types, creating Symfony forms for each type's configuration, and serializing them into a structured JSON response that can be used by a frontend to render dynamic form fields based on the selected rule type.

## Classes
- `GetOrderRuleConfigurationSchema`

## Function Details

### `__invoke`


