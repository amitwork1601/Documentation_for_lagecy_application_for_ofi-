# DebitSubscriptionOrder.php

**Path**: `src\CQRS\Command\SubscriptionOrder\DebitSubscriptionOrder.php`

## Summary
This class represents a CQRS command for debiting a subscription order in a token-based payment system. It extends `AbstractTokenValueCommand`, indicating it carries token value data needed to process a debit transaction against a subscription order. The command serves as a data transfer object that encapsulates the intent to deduct funds/tokens from a subscription order, likely triggering a corresponding command handler to execute the actual debit operation.

## Classes
- `DebitSubscriptionOrder`

