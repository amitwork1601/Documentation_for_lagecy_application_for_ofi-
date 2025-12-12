# ForceSyncWebmethodOrderHandler.php

**Path**: `src\Api\CommandHandler\Order\ForceSyncWebmethodOrderHandler.php`

## Summary
This command handler forces a synchronization of an order to an enterprise bus system based on a provided order token. It retrieves an order by its token value from the repository and triggers a forced notification to the enterprise bus, specifically for handling webmethod order integrations that may need manual or emergency resynchronization.

## Classes
- `ForceSyncWebmethodOrderHandler`

## Function Details

### `__invoke`

- **Parameters**: `ForceSyncWebmethodOrder $message`
- **Description**: @throws SMException
/

