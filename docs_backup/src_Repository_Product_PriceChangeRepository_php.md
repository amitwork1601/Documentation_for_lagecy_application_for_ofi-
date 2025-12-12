# PriceChangeRepository.php

**Path**: `src\Repository\Product\PriceChangeRepository.php`

## Summary
This repository class provides database access methods for the PriceChange entity, which tracks historical price modifications for products. It extends Doctrine's ServiceEntityRepository to inherit standard CRUD operations (find, findAll, findBy, findOneBy) for querying and retrieving price change records. This repository exists to manage the persistence layer for product price history, enabling the application to track and audit when product prices are modified over time.

## Classes
- `PriceChangeRepository`

## Function Details

### `__construct`

- **Parameters**: `ManagerRegistry $registry`

