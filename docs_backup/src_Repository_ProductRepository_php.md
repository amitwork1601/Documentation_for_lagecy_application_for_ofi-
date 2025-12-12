# ProductRepository.php

**Path**: `src\Repository\ProductRepository.php`

## Summary
This repository extends Sylius's core ProductRepository to provide custom product search functionality. It implements a `findByNamePart` method that searches for products by partial name matches in a specific locale, returning results as a concatenated string of product name and code along with the product code itself. The method supports limiting the number of results and is likely used for autocomplete or search suggestion features in the storefront.

## Classes
- `ProductRepository`

## Function Details

### `findByNamePart`

- **Parameters**: `string $phrase, string $locale, ?int $limit = null`

