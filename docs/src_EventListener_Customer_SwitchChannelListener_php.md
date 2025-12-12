# SwitchChannelListener.php

**Path**: `src\EventListener\Customer\SwitchChannelListener.php`

## Summary
This Doctrine event listener monitors changes to Customer entities and automatically updates associated data when a customer's channel is switched. When it detects that a customer's channel field has been modified during a database flush operation, it triggers corresponding channel updates for all related orders and subscriptions through their respective repositories, ensuring data consistency across the customer's entire relationship hierarchy.

## Classes
- `SwitchChannelListener`

## Function Details

### `onFlush`

- **Parameters**: `OnFlushEventArgs $event`

### `switchCustomerChannel`

- **Parameters**: `Customer $customer`

