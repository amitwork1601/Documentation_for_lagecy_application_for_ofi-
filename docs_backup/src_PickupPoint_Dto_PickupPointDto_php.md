# PickupPointDto.php

**Path**: `src\PickupPoint\Dto\PickupPointDto.php`

## Summary
This Data Transfer Object (DTO) represents a pickup point location for shipping/delivery purposes. It encapsulates all relevant information about a physical pickup location including geographic coordinates, address details, operating hours (openings/closing periods), capacity constraints (weight limits), and associations with available shipping methods. The class serves as a structured container for transferring pickup point data between application layers, with support for external system integration (via `externalReference` and `colissimoType` for the Colissimo shipping provider).

## Classes
- `PickupPointDto`

## Function Details

### `__construct`


