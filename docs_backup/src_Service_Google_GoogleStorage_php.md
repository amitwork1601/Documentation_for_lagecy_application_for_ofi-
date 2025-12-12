# GoogleStorage.php

**Path**: `src\Service\Google\GoogleStorage.php`

## Summary
The `GoogleStorage` class is a service wrapper for Google Cloud Storage operations, providing a simplified interface for interacting with a specific GCS bucket. It handles file operations including downloading files as strings, checking file existence, retrieving file metadata, and generating time-limited signed URLs for secure file access. The class automatically prefixes all file paths with a configurable storage prefix and manages authentication through a Google Cloud Storage client initialized with project credentials.

## Classes
- `GoogleStorage`

## Function Details

### `downloadFile`

- **Parameters**: `string $filename`

### `getSignedUrl`

- **Parameters**: `string $filename, ?string $duration = null`
- **Description**: @throws \Exception
/

### `fileExist`

- **Parameters**: `string $filename`

### `fileInfo`

- **Parameters**: `string $filename`

