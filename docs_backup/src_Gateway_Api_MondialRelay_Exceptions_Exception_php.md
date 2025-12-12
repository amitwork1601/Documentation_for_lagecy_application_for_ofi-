# Exception.php

**Path**: `src\Gateway\Api\MondialRelay\Exceptions\Exception.php`

## Summary
This is a custom exception class for the MondialRelay shipping/logistics service integration, providing specialized static factory methods for common API and FTP connection errors. It handles authentication failures, missing required parameters, invalid configuration (API URLs, FTP hosts), and request/connection errors specific to the MondialRelay Web Services, making error handling more semantic and developer-friendly throughout the integration layer.

## Classes
- `Exception`

## Function Details

### `invalidCredentials`

- **Parameters**: `string $key`

### `invalidApiUrl`


### `invalidFtpHost`


### `invalidRequestRequiredParameters`

- **Parameters**: `$method, $requiredParameter`

### `requestError`

- **Parameters**: `string $code`

### `invalidFtpConnection`

- **Parameters**: `string $host`

### `loginFtpFailed`


