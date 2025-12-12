# GetWebmethodOrderHandler.php

**Path**: `src\Api\CommandHandler\Order\GetWebmethodOrderHandler.php`

## Summary
This command handler retrieves an Order entity from the database by its token value for Webmethod payment processing. It acts as a message handler that receives a GetWebmethodOrder command, queries the order repository using the provided token, and returns the order while ensuring it exists through an assertion check.

## Classes
- `GetWebmethodOrderHandler`

## Function Details

### `__invoke`

- **Parameters**: `GetWebmethodOrder $message`

