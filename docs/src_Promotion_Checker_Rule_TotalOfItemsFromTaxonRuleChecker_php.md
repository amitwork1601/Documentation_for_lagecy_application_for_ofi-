# TotalOfItemsFromTaxonRuleChecker.php

**Path**: `src\Promotion\Checker\Rule\TotalOfItemsFromTaxonRuleChecker.php`

## Summary
This class is a Sylius promotion rule checker that determines if an order is eligible for a promotion based on the total value of items belonging to a specific product taxon (category). It decorates the default Sylius checker and validates that the sum of order items from a configured taxon meets or exceeds a specified monetary threshold, checking against channel-specific configuration and using a repository to verify product-taxon relationships.

## Classes
- `TotalOfItemsFromTaxonRuleChecker`

## Function Details

### `__construct`

- **Parameters**: `private ProductTaxonRepository $productTaxonRepository`

### `isEligible`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration`

