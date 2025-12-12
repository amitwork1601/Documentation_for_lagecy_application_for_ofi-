# AnimalCodeListener.php

**Path**: `src\EventListener\Animal\AnimalCodeListener.php`

## Summary
This Doctrine event listener automatically generates a unique 10-character URI-safe code for Animal entities before they are persisted to the database. It serves as a pre-persist hook that ensures every Animal has a code identifier, only generating one if the code hasn't been manually set, which is useful for creating human-readable yet unique animal references in the system.

## Classes
- `AnimalCodeListener`

## Function Details

### `__construct`

- **Parameters**: `RandomnessGeneratorInterface $generator`

### `prePersist`

- **Parameters**: `Animal $animal, LifecycleEventArgs $event`

