# GetPromotionRulesSchema.php

**Path**: `src\Api\Controller\Promotion\GetPromotionRulesSchema.php`

## Summary
This controller generates a JSON schema for promotion rule configuration forms in an e-commerce system. It iterates through available promotion rule types, dynamically builds their form structures using Symfony's form factory, and serializes them into a unified schema that includes a type selector dropdown and the corresponding configuration fields for each rule type. The schema is intended for frontend consumption to render dynamic promotion rule forms based on the selected rule type.

## Classes
- `GetPromotionRulesSchema`

## Function Details

### `__invoke`


