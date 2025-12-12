# RemoveCart.php

**Path**: `src\Api\Command\Cart\RemoveCart.php`

## Summary
This is a command class that represents a request to remove/delete a shopping cart in a Sylius e-commerce application. It serves as a Data Transfer Object (DTO) that carries the cart's unique token identifier (`orderTokenValue`) and is decorated with `OrderTokenValueAware` attribute to enable automatic token value injection/validation through Sylius API infrastructure.

## Classes
- `RemoveCart`

## Function Details

### `__construct`

- **Parameters**: `public string $orderTokenValue`

