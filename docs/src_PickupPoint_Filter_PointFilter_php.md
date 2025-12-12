# PointFilter.php

**Path**: `src\PickupPoint\Filter\PointFilter.php`

## Summary
The `PointFilter` class is a custom API Platform filter for querying pickup points based on geographic proximity using geospatial calculations. It filters pickup point entities by latitude, longitude, and an optional radius (defaulting to 10km, capped at 50km), leveraging MySQL's `ST_Distance_Sphere` function to find locations within the specified distance from a given coordinate point.

## Classes
- `PointFilter`

## Function Details

### `__construct`

- **Parameters**: `ManagerRegistry $managerRegistry, PropertyAccessorInterface $propertyAccessor`

### `getDescription`

- **Parameters**: `string $resourceClass`

