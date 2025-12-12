# UnaddressedOrder.php

**Path**: `src\Api\Command\Checkout\UnaddressedOrder.php`

## Summary
This class represents a command object for the checkout process that handles orders lacking address information. It serves as a data transfer object (DTO) that carries an order token value and is marked with the `OrderTokenValueAware` attribute to enable token-based order identification within Sylius's API bundle. The command is likely used to transition or manage orders in the checkout flow when address details have not yet been provided or need to be removed.

## Classes
- `UnaddressedOrder`

## Function Details

### `__construct`

- **Parameters**: `public string $orderTokenValue`

