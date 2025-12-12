# CreateInstrumentHandler.php

**Path**: `src\Api\CommandHandler\PaymentInstrument\CreateInstrumentHandler.php`

## Summary
This command handler creates a new payment instrument entity for a customer in an e-commerce system. It either uses a customer provided in the command message or retrieves the currently authenticated shop user's customer, then uses a factory to create and persist the payment instrument entity to the database. The handler is part of Sylius-based payment infrastructure for managing customer payment methods.

## Classes
- `CreateInstrumentHandler`

## Function Details

### `__invoke`

- **Parameters**: `CreateInstrument $message`

### `provideCustomer`


