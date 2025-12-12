# CompletePayment.php

**Path**: `src\Api\Command\Payment\CompletePayment.php`

## Summary
This is a data transfer object (DTO) command class used to complete a payment transaction in a Sylius-based e-commerce API. It encapsulates the payment identifier and optional payment details (like transaction metadata or gateway responses) needed to finalize a payment process. The `PaymentIdAware` attribute indicates this command is validated to ensure the payment ID corresponds to an existing payment entity in the system.

## Classes
- `CompletePayment`

