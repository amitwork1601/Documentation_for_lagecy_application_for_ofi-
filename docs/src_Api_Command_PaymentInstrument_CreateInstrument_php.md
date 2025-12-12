# CreateInstrument.php

**Path**: `src\Api\Command\PaymentInstrument\CreateInstrument.php`

## Summary
This is a Command object that represents a request to create a new payment instrument in the system. It serves as a data transfer object (DTO) in a CQRS (Command Query Responsibility Segregation) pattern, encapsulating the necessary data—specifically an optional Customer entity—required to initiate the payment instrument creation process. This command would typically be dispatched to a command handler that executes the business logic for creating and persisting a payment instrument associated with a customer.

## Classes
- `CreateInstrument`

