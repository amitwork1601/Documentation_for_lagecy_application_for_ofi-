# AmountUntilConfigurationType.php

**Path**: `src\Form\Type\Order\Rule\AmountUntilConfigurationType.php`

## Summary
This Symfony form type configures a channel-specific collection form for defining "amount until" order rules in an e-commerce context. It creates a form entry for each sales channel that uses `OrderTotalMoreThanOrEqualConfigurationType` to set minimum order total thresholds, automatically passing each channel's name and base currency to properly format and validate the monetary amounts per channel.

## Classes
- `AmountUntilConfigurationType`

## Function Details

### `configureOptions`

- **Parameters**: `OptionsResolver $resolver`

### `getParent`


