# OrderRuleFactory.php

**Path**: `src\Factory\OrderRuleFactory.php`

## Summary
The `OrderRuleFactory` is a decorator factory class that creates `OrderRuleInterface` entities with optional type initialization. It extends the base factory functionality by providing a `createWithType()` method that instantiates an order rule and automatically sets its name property to the specified type, simplifying the creation of typed order rules in what appears to be a Sylius-based e-commerce application.

## Classes
- `OrderRuleFactory`

## Function Details

### `__construct`

- **Parameters**: `private FactoryInterface $decoratedFactory`

### `createWithType`

- **Parameters**: `string $type`

### `createNew`


