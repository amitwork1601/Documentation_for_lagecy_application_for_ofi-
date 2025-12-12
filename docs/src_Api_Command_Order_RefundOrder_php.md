# RefundOrder.php

**Path**: `src\Api\Command\Order\RefundOrder.php`

## Summary
This class represents a command for refunding an order in a Sylius-based e-commerce API. It carries the order token value as a data transfer object (DTO) that will be used to identify and process order refunds. The `OrderTokenValueAware` attribute indicates this command participates in Sylius's order token-based security mechanism for authorizing refund operations.

## Classes
- `RefundOrder`

## Function Details

### `__construct`

- **Parameters**: `public string $orderTokenValue`

