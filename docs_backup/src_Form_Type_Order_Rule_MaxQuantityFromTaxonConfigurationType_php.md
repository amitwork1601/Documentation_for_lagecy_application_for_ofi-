# MaxQuantityFromTaxonConfigurationType.php

**Path**: `src\Form\Type\Order\Rule\MaxQuantityFromTaxonConfigurationType.php`

## Summary
This Symfony form type configures a channel-specific collection for setting maximum order quantity rules based on product taxons (categories). It extends Sylius's ChannelCollectionType to allow merchants to define different quantity limits per sales channel, with each entry using OrderQuantityLessThanOrEqualOnTaxonConfigurationType to configure the actual taxon-based quantity constraints.

## Classes
- `MaxQuantityFromTaxonConfigurationType`

## Function Details

### `configureOptions`

- **Parameters**: `OptionsResolver $resolver`

### `getParent`


