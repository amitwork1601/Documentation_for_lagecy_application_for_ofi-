# STDistanceSphere.php

**Path**: `src\Doctrine\STDistanceSphere.php`

## Summary
This class implements a custom Doctrine DQL (Doctrine Query Language) function that wraps MySQL's `ST_Distance_Sphere` spatial function for calculating geographic distances between two points on a sphere (Earth). It extends the LongitudeOne Spatial library's abstract function class to enable the use of MySQL's spherical distance calculation directly within Doctrine queries, requiring exactly two geometric parameters and being MySQL-platform specific.

## Classes
- `STDistanceSphere`

## Function Details

### `getFunctionName`


### `getMaxParameter`


### `getMinParameter`


### `getPlatforms`


