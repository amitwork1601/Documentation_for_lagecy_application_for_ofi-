# DecoratedCartContext.php

**Path**: `src\Api\Context\DecoratedCartContext.php`

## Summary
This class decorates Sylius's cart context to provide enhanced cart detection functionality, specifically checking whether a valid cart exists in the current request context. It iterates through available cart context providers to determine cart presence, with special handling for token-based cart contexts in API requests, extending the standard Sylius cart management to implement the `EnhancedCartContextInterface` with a `hasCart()` method.

## Classes
- `DecoratedCartContext`

## Function Details

### `getCart`


### `hasCart`


### `checkApiRequest`

- **Parameters**: `Request $request`

