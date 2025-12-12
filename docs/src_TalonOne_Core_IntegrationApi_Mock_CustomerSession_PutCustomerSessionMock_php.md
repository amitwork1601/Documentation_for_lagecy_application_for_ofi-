# PutCustomerSessionMock.php

**Path**: `src\TalonOne\Core\IntegrationApi\Mock\CustomerSession\PutCustomerSessionMock.php`

## Summary
This class provides a mock implementation for TalonOne's customer session PUT API endpoint, used for testing purposes. It returns a static JSON response from a local file instead of making an actual HTTP request to the TalonOne integration API, allowing developers to test customer session update functionality without requiring a live API connection or consuming API quota.

## Classes
- `PutCustomerSessionMock`

## Function Details

### `getContent`

- **Parameters**: `TalonOneRequestInterface $request, int $statusCode = 200`

