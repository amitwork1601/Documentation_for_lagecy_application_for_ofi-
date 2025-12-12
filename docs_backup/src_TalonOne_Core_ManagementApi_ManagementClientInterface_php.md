# ManagementClientInterface.php

**Path**: `src\TalonOne\Core\ManagementApi\ManagementClientInterface.php`

## Summary
This interface defines the contract for a Talon.One Management API client, which is responsible for executing management-level API requests to the Talon.One promotion and loyalty platform. It extends the base TalonOne client interface and adds a single `execute()` method that accepts management API requests, enabling administrative operations like campaign management, rule configuration, and account settings separate from the runtime Integration API.

## Function Details

### `execute`

- **Parameters**: `TalonOneRequestInterface $request`

