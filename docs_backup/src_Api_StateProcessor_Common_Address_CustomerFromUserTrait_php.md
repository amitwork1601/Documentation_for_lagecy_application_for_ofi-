# CustomerFromUserTrait.php

**Path**: `src\Api\StateProcessor\Common\Address\CustomerFromUserTrait.php`

## Summary
This trait provides a helper method to resolve a Sylius customer instance from either a shop user or an existing customer reference. It's designed to be used in API state processors for address-related operations, ensuring the correct customer entity is obtained by prioritizing the authenticated shop user's customer association over a directly provided customer object.

## Function Details

### `getCustomer`

- **Parameters**: `?CustomerInterface $customer = null, ?UserInterface $user = null`

