# AddShipment.php

**Path**: `src\Api\Command\Checkout\AddShipment.php`

## Summary
This is a command class for adding shipment tracking information to an order during checkout in a Sylius e-commerce application. It encapsulates the data transfer object (DTO) that carries an order token and tracking code, which will be used by a command handler to associate shipping tracking details with a specific order. The `OrderTokenValueAware` attribute indicates this command is designed to work with Sylius's order token-based security mechanism for guest checkout scenarios.

## Classes
- `AddShipment`

## Function Details

### `__construct`

- **Parameters**: `public string $orderTokenValue, public string $trackingCode`

