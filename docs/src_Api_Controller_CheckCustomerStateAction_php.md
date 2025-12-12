# CheckCustomerStateAction.php

**Path**: `src\Api\Controller\CheckCustomerStateAction.php`

## Summary
This API controller endpoint checks whether a customer exists in the system based on their email address and validates if they belong to the current channel. It returns a JSON response indicating if the customer is known to the system and whether they are associated with a different channel, which is useful for preventing cross-channel customer conflicts during registration or login processes in a multi-channel e-commerce setup.

## Classes
- `CheckCustomerStateAction`

## Function Details

### `__construct`

- **Parameters**: `UserRepositoryInterface $userRepository, ChannelContextInterface $channelContext`

### `__invoke`

- **Parameters**: `Request $request`

