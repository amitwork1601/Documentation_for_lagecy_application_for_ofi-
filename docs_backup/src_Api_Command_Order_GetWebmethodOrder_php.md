# GetWebmethodOrder.php

**Path**: `src\Api\Command\Order\GetWebmethodOrder.php`

## Summary
This is a command class used to retrieve an order using Sylius's webmethod API integration. The class serves as a data transfer object (DTO) that carries an order token value, with the `OrderTokenValueAware` attribute ensuring the token is validated and processed appropriately by Sylius's API infrastructure. It enables secure order lookups through tokenized references rather than exposing direct order IDs.

## Classes
- `GetWebmethodOrder`

## Function Details

### `__construct`

- **Parameters**: `public string $orderTokenValue`

