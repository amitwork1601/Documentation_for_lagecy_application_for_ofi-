# CompleteOrder.php

**Path**: `src\Api\Command\Checkout\CompleteOrder.php`

## Summary
This class represents a command/data transfer object for completing a checkout order in an e-commerce system. It encapsulates all the necessary payment and order completion data, including the order token, payment gateway session IDs (Checkout.com's `ckoSessionId` and PayPal's `PayerID`), and optional order notes. The `OrderTokenValueAware` attribute indicates this command integrates with Sylius's API bundle to validate and process order tokens during the checkout completion process.

## Classes
- `CompleteOrder`

