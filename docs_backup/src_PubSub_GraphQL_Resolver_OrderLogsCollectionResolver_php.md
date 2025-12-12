# OrderLogsCollectionResolver.php

**Path**: `src\PubSub\GraphQL\Resolver\OrderLogsCollectionResolver.php`

## Summary
This class serves as a pass-through GraphQL collection resolver for OrderLogs entities in a pub/sub system. It implements ApiPlatform's `QueryCollectionResolverInterface` but performs no transformation or filtering, simply returning the collection as-is. This likely exists as a placeholder for future business logic or to satisfy ApiPlatform's architectural requirements for custom GraphQL resolvers while currently delegating all query handling to the default behavior.

## Classes
- `OrderLogsCollectionResolver`

## Function Details

### `__invoke`

- **Parameters**: `iterable $collection, array $context`

