# b2c-ration.js

**Path**: `src\api\b2c-ration\services\b2c-ration.js`

## Summary
This is a B2C (business-to-consumer) rations calculation service for Strapi CMS that determines appropriate food/product ration quantities based on weight parameters. The service contains utility functions that look up ration values from weight-based tables, finding the appropriate ration amount for a given weight by sorting through weight brackets and returning corresponding values, along with calculating next weight thresholds for progressive ration adjustments.

## Function Details

### `GetWeight`

- **Parameters**: `weightTable, weight`

### `NextWeight`

- **Parameters**: `weightTable, weight`

### `sort_by`

- **Parameters**: `field, reverse, primer`

### `rationCalculator`

- **Parameters**: `rations, month, poids, maxRation, type, poidsSac, maxPoids`

