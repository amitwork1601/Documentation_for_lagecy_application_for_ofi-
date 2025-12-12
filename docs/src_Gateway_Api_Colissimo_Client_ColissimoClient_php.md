# ColissimoClient.php

**Path**: `src\Gateway\Api\Colissimo\Client\ColissimoClient.php`

## Summary
The `ColissimoClient` class is an FTP client that retrieves and manages Colissimo (French postal service) pickup point data from a remote FTP server. It connects to the FTP server, identifies and downloads the current day's CSV file containing pickup point information, archives outdated files, and parses the CSV data using a `PickupPointBuilder` to return an array of pickup point objects. The client handles file management by automatically moving old files to an archive folder while processing only today's pickup point data.

## Classes
- `ColissimoClient`

## Function Details

### `getAllPickupPoints`

- **Description**: @throws \Exception
/

### `createFtpClient`

- **Parameters**: `string $path = '/', array $extraOptions = []`

### `moveToArchive`

- **Parameters**: `string $file`

