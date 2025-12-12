# UpdatePickupPointPhotoHandler.php

**Path**: `src\CQRS\CommandHandler\PickupPoint\UpdatePickupPointPhotoHandler.php`

## Summary
This command handler validates pickup point photo URLs by checking their accessibility on remote servers. It retrieves pickup points by shipping method and references, then verifies each photo URL using `getimagesize()` - if the URL is invalid or inaccessible, it clears the photo field to maintain data integrity and prevent broken image references in the system.

## Classes
- `UpdatePickupPointPhotoHandler`

## Function Details

### `__construct`

- **Parameters**: `ShippingMethodRepository $shippingMethodRepository, PickupPointRepository $pickupPointRepository`

### `__invoke`

- **Parameters**: `UpdatePickupPointPhoto $updatePickupPointPhoto`
- **Description**: Ensure that the URL of the photo of the relay point exists on the remote server.
/

