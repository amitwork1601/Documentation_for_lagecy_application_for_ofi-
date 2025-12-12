# AnimalKibbleBrandExtension.php

**Path**: `src\Doctrine\Extension\AnimalKibbleBrandExtension.php`

## Summary
This Doctrine ORM extension automatically applies default sorting by name (ascending) to `AnimalKibbleBrand` entity collection queries specifically for the "shop_get" operation. It implements API Platform's query collection extension interface to modify database queries, but only when no explicit order filter has been provided by the client, ensuring a consistent alphabetical display of kibble brands in the shop interface.

## Classes
- `AnimalKibbleBrandExtension`

