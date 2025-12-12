# ForceSyncWebmethodOrder.php

**Path**: `src\Api\Command\Order\ForceSyncWebmethodOrder.php`

## Summary
This class is a command object that triggers a forced synchronization of an order with a web-based payment method system in a Sylius e-commerce application. It carries an order token value as its payload and is marked with the `OrderTokenValueAware` attribute to enable automatic order resolution from the token during API request handling.

## Classes
- `ForceSyncWebmethodOrder`

## Function Details

### `__construct`

- **Parameters**: `public string $orderTokenValue`

