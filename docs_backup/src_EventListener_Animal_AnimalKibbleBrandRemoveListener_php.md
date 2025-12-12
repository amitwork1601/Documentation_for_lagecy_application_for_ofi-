# AnimalKibbleBrandRemoveListener.php

**Path**: `src\EventListener\Animal\AnimalKibbleBrandRemoveListener.php`

## Summary
This Doctrine event listener handles the cleanup of animal-kibble brand associations before an `AnimalKibbleBrand` entity is deleted from the database. When triggered by the `preRemove` lifecycle event, it finds all animals that reference the kibble brand (either as current or old brand) and nullifies those references to prevent orphaned foreign key constraints, then persists the changes before the brand deletion completes.

## Classes
- `AnimalKibbleBrandRemoveListener`

## Function Details

### `__construct`

- **Parameters**: `EventDispatcherInterface $eventDispatcher, AnimalRepository $animalRepository`

### `preRemove`

- **Parameters**: `AnimalKibbleBrand $kibbleBrand, LifecycleEventArgs $lifecycleEventArgs`

