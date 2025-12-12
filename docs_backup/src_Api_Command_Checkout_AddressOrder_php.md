# AddressOrder.php

**Path**: `src\Api\Command\Checkout\AddressOrder.php`

## Summary
This command class represents a CQRS command for setting customer address information during the checkout process in an e-commerce system. It encapsulates the data needed to update an order's email, shipping address, and billing address, identified by an order token value. The class extends `AbstractTokenValueCommand` and uses the `OrderTokenValueAware` attribute to enable token-based order identification in a Sylius-based API.

## Classes
- `AddressOrder`

