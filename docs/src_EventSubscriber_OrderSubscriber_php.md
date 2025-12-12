# OrderSubscriber.php

**Path**: `src\EventSubscriber\OrderSubscriber.php`

## Summary
The `OrderSubscriber` is an event subscriber that intercepts API requests to admin endpoints and allows using a custom `order_id` parameter as an order identifier instead of the default identifier. It specifically listens to kernel request events at the PRE_READ priority and modifies the request attributes when accessing Order resources through admin firewall-protected API routes (e.g., `/api/v2/admin/orders/{order_id}/...`), enabling more flexible order identification in the admin API context.

## Classes
- `OrderSubscriber`

## Function Details

### `getSubscribedEvents`


### `onPreRead`

- **Parameters**: `RequestEvent $event`

