# RegisterCartRuleCheckerPass.php

**Path**: `src\DependencyInjection\Compiler\RegisterCartRuleCheckerPass.php`

## Summary
This Symfony compiler pass registers cart validity rule checker services that are tagged with `app.cart.validity_rule_checker`. It collects tagged services, validates they have required attributes (type, label, form_type), and registers them into two registries: one for the rule checker logic itself and another for their associated form types, while also building schema configuration for order rule conditions used by an API controller.

## Classes
- `RegisterCartRuleCheckerPass`

## Function Details

### `process`

- **Parameters**: `ContainerBuilder $container`

