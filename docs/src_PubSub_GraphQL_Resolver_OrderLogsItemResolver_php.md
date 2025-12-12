# OrderLogsItemResolver.php

**Path**: `src\PubSub\GraphQL\Resolver\OrderLogsItemResolver.php`

## Summary
This class implements a GraphQL query item resolver for order log entries in a pub/sub system. It serves as a pass-through resolver that returns OrderLog DTO items without modification, fulfilling ApiPlatform's requirement for a QueryItemResolverInterface implementation while delegating the actual data retrieval logic to other layers of the application.

## Classes
- `OrderLogsItemResolver`

## Function Details

### `__invoke`

- **Parameters**: `$item, array $context`

