# PickupPointGatewayInterface.php

**Path**: `src\Gateway\Interface\ShippingMethod\PickupPointGatewayInterface.php`

## Summary
This interface defines a gateway contract for retrieving pickup point shipping locations from external systems. It provides two methods: `find()` to retrieve a single pickup point by its external reference identifier, and `findAll()` to retrieve multiple pickup points, both supporting optional filtering parameters and returning PickupPointDto objects.

## Function Details

### `find`

- **Parameters**: `string $externalReference, array $params = []`

### `findAll`

- **Parameters**: `array $params = []`
- **Description**: @return array&lt;PickupPointDto&gt;
/

