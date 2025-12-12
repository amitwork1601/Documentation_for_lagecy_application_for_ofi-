# TalonOneClientInterface.php

**Path**: `src\TalonOne\Core\Config\TalonOneClientInterface.php`

## Summary
This interface defines a contract for TalonOne API client implementations, requiring an `execute()` method that processes TalonOne requests. It serves as an abstraction layer for communicating with the TalonOne promotion and loyalty platform, enabling dependency injection and allowing different client implementations to handle API request execution consistently.

## Function Details

### `execute`

- **Parameters**: `TalonOneRequestInterface $request`

