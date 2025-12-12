# UniqueEntityValidator.php

**Path**: `src\Doctrine\Validator\UniqueEntityValidator.php`

## Summary
This class is a **decorator** for Symfony's Doctrine UniqueEntity validator that extends the base validation functionality for ensuring entity uniqueness constraints. It wraps the standard `BaseUniqueEntityValidator` to customize or extend the validation logic for checking if entities with unique field constraints already exist in the database, while delegating core functionality to the decorated validator. The decorator pattern allows the application to add custom behavior around Doctrine's built-in uniqueness validation without modifying the original validator implementation.

## Classes
- `UniqueEntityValidator`

## Function Details

### `initialize`

- **Parameters**: `ExecutionContextInterface $context`

### `formatTypeOf`

- **Parameters**: `mixed $value`

### `formatValue`

- **Parameters**: `mixed $value, int $format = 0`

### `formatValues`

- **Parameters**: `array $values, int $format = 0`

### `validate`

- **Parameters**: `mixed $value, Constraint $constraint`

### `getMergeEntity`

- **Parameters**: `object $entity, EntityManager $em`

### `getIdentifiersFromEntity`

- **Parameters**: `object $entity, EntityManager $em`

