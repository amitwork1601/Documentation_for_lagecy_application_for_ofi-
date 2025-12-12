# ShippingMethodConsistencyValidator.php

**Path**: `src\Validator\ShippingMethodConsistencyValidator.php`

## Summary
This validator ensures consistency between an order's shipping method and its delivery address type. It validates that pickup point shipment methods are only used with PickupAddress types and home delivery methods are only used with non-pickup addresses, raising appropriate violations when mismatches are detected.

## Classes
- `ShippingMethodConsistencyValidator`

## Function Details

### `validate`

- **Parameters**: `$value, Constraint $constraint`
- **Description**: @param Order $value
/

