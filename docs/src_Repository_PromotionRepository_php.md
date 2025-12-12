# PromotionRepository.php

**Path**: `src\Repository\PromotionRepository.php`

## Summary
This repository extends Sylius's base promotion repository to provide custom data access methods for the Promotion entity. It adds functionality to search promotions by name or code with usage limit validation, and to retrieve promotions associated with specific customers, supporting the e-commerce platform's promotional discount system.

## Classes
- `PromotionRepository`

## Function Details

### `__construct`

- **Parameters**: `EntityManager $entityManager, Mapping\ClassMetadata $class`

### `findByNameOrCode`

- **Parameters**: `string $phrase`

### `findByCustomer`

- **Parameters**: `Customer $customer, bool $orderByPriority = false`

### `findActiveForPromotionSubject`

- **Parameters**: `PromotionSubjectInterface $subject`

### `hasOrders`

- **Parameters**: `Promotion $promotion`

### `orderedByPriority`

- **Parameters**: `QueryBuilder $queryBuilder, string $order = 'desc'`

### `filterByCustomer`

- **Parameters**: `QueryBuilder $queryBuilder, ?Customer $customer = null, bool $strict = false`

### `findByToExport`


