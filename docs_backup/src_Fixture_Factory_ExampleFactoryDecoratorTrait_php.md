# ExampleFactoryDecoratorTrait.php

**Path**: `src\Fixture\Factory\ExampleFactoryDecoratorTrait.php`

## Summary
This trait provides utility functionality for fixture factories in a Symfony application, specifically for handling and separating options when decorating factory classes. The `extractOptions` method splits an array of options into two groups: those that are defined in an OptionsResolver (which are validated and resolved) and remaining undefined options, enabling decorators to process their own options while passing through others to the decorated factory.

## Function Details

### `extractOptions`

- **Parameters**: `array $options, OptionsResolver $resolver`

