# OrderRuleConditionChoiceType.php

**Path**: `src\Form\Type\Order\OrderRuleConditionChoiceType.php`

## Summary
This Symfony form type provides a dropdown/choice field for selecting order rule conditions in an e-commerce or order management system. It extends the base ChoiceType and dynamically populates available condition options from an injected array of rule conditions (flipped for proper key-value mapping), allowing users to define criteria for order-based business rules or automated actions.

## Classes
- `OrderRuleConditionChoiceType`

## Function Details

### `__construct`

- **Parameters**: `array $ruleConditions`

### `configureOptions`

- **Parameters**: `OptionsResolver $resolver`

### `getParent`


### `getBlockPrefix`


