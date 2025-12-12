# RequestResolver.php

**Path**: `src\Api\Context\RequestResolver.php`

## Summary
This class implements a request-based channel resolver for a Sylius e-commerce application, responsible for determining the appropriate sales channel (e.g., web store, mobile app, or regional storefront) based on the incoming HTTP request. It extracts a `channelCode` parameter from the request query string and retrieves the corresponding channel from the repository, falling back to a default channel if no code is provided, or throws a `ChannelNotFoundException` if no valid channel can be found. This enables multi-channel commerce functionality where different storefronts or sales channels can be served from the same application instance.

## Classes
- `RequestResolver`

## Function Details

### `findChannel`

- **Parameters**: `Request $request`

