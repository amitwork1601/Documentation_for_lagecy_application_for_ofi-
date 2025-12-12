# GoogleStorageFactory.php

**Path**: `src\Factory\Google\GoogleStorageFactory.php`

## Summary
This factory class creates and configures `GoogleStorage` service instances for managing bill-related files in Google Cloud Storage. It injects environment-specific configuration (project ID, bucket name, file path prefix, and signed URL duration) via Symfony's dependency injection and provides a `getStorage()` method to instantiate properly configured `GoogleStorage` objects for handling bill document storage operations.

## Classes
- `GoogleStorageFactory`

## Function Details

### `getStorage`


