# UniqueUpSellValidator.php

**Path**: `src\Validator\UniqueUpSellValidator.php`

## Summary
This validator ensures uniqueness of enabled UpSell entities based on their classification and typology combination. It queries the repository to check if any other enabled UpSell record exists with the same classification and typology values (excluding the current entity if it's being updated), and adds validation violations to both fields if duplicates are found, preventing multiple active up-sell configurations for the same product category combination.

## Classes
- `UniqueUpSellValidator`

## Function Details

### `__construct`

- **Parameters**: `UpSellRepository $upSellRepository`

### `validate`

- **Parameters**: `$value, Constraint $constraint`

