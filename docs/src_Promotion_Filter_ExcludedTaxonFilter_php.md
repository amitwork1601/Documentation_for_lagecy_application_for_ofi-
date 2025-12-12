# ExcludedTaxonFilter.php

**Path**: `src\Promotion\Filter\ExcludedTaxonFilter.php`

## Summary
The `ExcludedTaxonFilter` class implements a promotional filter for Sylius e-commerce that excludes products belonging to specific taxons (product categories) from promotional eligibility. It filters an array of order items by removing those whose products are associated with taxons specified in the configuration's excluded taxons list, ensuring that certain product categories can be systematically excluded from promotions.

## Classes
- `ExcludedTaxonFilter`

## Function Details

### `filter`

- **Parameters**: `array $items, array $configuration`

### `hasProductValidTaxon`

- **Parameters**: `ProductInterface $product, array $taxons`
- **Description**: @param TaxonInterface[] $taxons
/

