# AnimalRepository.php

**Path**: `src\Repository\AnimalRepository.php`

## Summary
This repository class extends Doctrine's EntityRepository to manage database queries for Animal entities in what appears to be a Sylius-based application. It provides two specialized query builders: one for retrieving active (non-deleted) animals by filtering where `deletedReason` is null, and another for retrieving soft-deleted animals where `deletedReason` has a value, implementing a soft-delete pattern for animal records.

## Classes
- `AnimalRepository`

## Function Details

### `createListQueryBuilder`


### `createDeletedListQueryBuilder`


