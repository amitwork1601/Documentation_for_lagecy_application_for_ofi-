# ShippingWeightProvider.php

**Path**: `src\Shipping\Provider\ShippingWeightProvider.php`

## Summary
The `ShippingWeightProvider` class calculates the total shipping weight for an order by combining the base shipment weight with the weights of any free products included in the cart. It exists to ensure accurate shipping cost calculations by accounting for promotional/free items that may not be included in the standard shipment weight, retrieving variant details from the repository to add their weights to the total.

## Classes
- `ShippingWeightProvider`

## Function Details

### `getWeight`

- **Parameters**: `OrderInterface $cart`

