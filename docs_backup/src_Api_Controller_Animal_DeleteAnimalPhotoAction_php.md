# DeleteAnimalPhotoAction.php

**Path**: `src\Api\Controller\Animal\DeleteAnimalPhotoAction.php`

## Summary
This API controller handles the deletion of an animal's photo by retrieving an animal entity using a code from the request and delegating the photo deletion to the AnimalPhotoService. It serves as an HTTP endpoint action that validates the animal code exists, fetches the corresponding animal from the database, and removes the associated photo file.

## Classes
- `DeleteAnimalPhotoAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

