# PercentNormalizerTypeExtension.php

**Path**: `src\Form\Extension\Rule\PercentNormalizerTypeExtension.php`

## Summary
This Symfony form extension customizes the PercentType field to handle normalization of percent values with flexible decimal and grouping separator parsing. It replaces the default view transformers to intelligently convert user input strings (supporting both dot and comma as decimal separators) into normalized numeric percent values, using a NumberFormatter to respect locale-specific formatting rules while ensuring consistent data transformation with configurable scale and rounding mode.

## Classes
- `PercentNormalizerTypeExtension`

## Function Details

### `getExtendedTypes`


### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `getNumberFormatter`


### `round`

- **Parameters**: `int|float $number`
- **Description**: Rounds a number according to the configured scale and rounding mode.
/

