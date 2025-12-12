# OrderProviderInterface.php

**Path**: `plugins\PayPalPlugin\src\Provider\OrderProviderInterface.php`

## Summary
This interface defines a contract for retrieving Sylius e-commerce orders within the PayPal plugin integration. It provides two methods to fetch order entities: one by numeric ID and another by a token string, both throwing an OrderNotFoundException if the order cannot be found. This abstraction enables the PayPal plugin to retrieve order information needed for payment processing without being coupled to a specific data access implementation.

## Function Details

### `provideOrderById`

- **Parameters**: `int $id`
- **Description**: @throws OrderNotFoundException
/

### `provideOrderByToken`

- **Parameters**: `string $token`
- **Description**: @throws OrderNotFoundException
/

