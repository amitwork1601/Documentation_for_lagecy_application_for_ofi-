# ExpirationPeriodItemExtension.php

**Path**: `src\Api\QueryExtension\Shop\Order\ExpirationPeriodItemExtension.php`

## Summary
This API Platform query extension filters order retrieval requests in the shop API by enforcing expiration rules on non-subscription orders. It prevents customers from accessing orders that have reached their terminal state (e.g., completed or cancelled) and exceeded a configurable expiration period, ensuring that old orders are no longer retrievable through the shop API while allowing subscription orders to remain accessible indefinitely.

## Classes
- `ExpirationPeriodItemExtension`

