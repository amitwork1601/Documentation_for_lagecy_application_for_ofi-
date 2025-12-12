# UploadAnimalPhotoAction.php

**Path**: `src\Api\Controller\Animal\UploadAnimalPhotoAction.php`

## Summary
This Symfony API controller action handles the uploading of photos for animals in the system. It extracts an uploaded file and animal code from the request, retrieves the corresponding Animal entity from the database, and delegates the photo saving logic to the AnimalPhotoService, ultimately returning an AnimalPhoto entity. The action serves as an API endpoint for associating uploaded images with specific animals identified by their unique code.

## Classes
- `UploadAnimalPhotoAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

