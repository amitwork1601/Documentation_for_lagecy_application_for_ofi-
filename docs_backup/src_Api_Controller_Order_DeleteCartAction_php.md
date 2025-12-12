# DeleteCartAction.php

**Path**: `src\Api\Controller\Order\DeleteCartAction.php`

## Summary
This API controller handles the deletion of shopping carts in an e-commerce system. It extracts a cart token value from the request, dispatches a `RemoveCart` command via the message bus to asynchronously delete the cart, and returns a 204 No Content response upon success. The action includes validation error handling and ensures the token value exists before processing the deletion request.

## Classes
- `DeleteCartAction`

## Function Details

### `__construct`

- **Parameters**: `private MessageBusInterface $messageBus`

### `__invoke`

- **Parameters**: `Request $request, ValidatorInterface $validator`
- **Description**: @throws \Throwable
/

