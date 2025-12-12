# GetPromotionActionSchema.php

**Path**: `src\Api\Controller\Promotion\GetPromotionActionSchema.php`

## Summary
This class generates a JSON schema for promotion action types in a Sylius e-commerce application. It iterates through configured promotion actions, dynamically builds forms for each action's configuration using Symfony's form factory, and serializes them into a structured schema that includes action type choices and their associated configuration fields for use in an API response.

## Classes
- `GetPromotionActionSchema`

## Function Details

### `__invoke`


