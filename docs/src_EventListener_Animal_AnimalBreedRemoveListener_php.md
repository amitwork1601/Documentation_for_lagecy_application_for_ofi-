# AnimalBreedRemoveListener.php

**Path**: `src\EventListener\Animal\AnimalBreedRemoveListener.php`

## Summary
This Doctrine event listener handles the cascading cleanup when an `AnimalBreed` entity is being deleted. Before removal, it finds all `Animal` entities associated with that breed and sets their breed reference to null, preventing orphaned foreign key relationships and ensuring data integrity during breed deletion.

## Classes
- `AnimalBreedRemoveListener`

## Function Details

### `__construct`

- **Parameters**: `EventDispatcherInterface $eventDispatcher, AnimalRepository $animalRepository`

### `preRemove`

- **Parameters**: `AnimalBreed $breed, LifecycleEventArgs $lifecycleEventArgs`

