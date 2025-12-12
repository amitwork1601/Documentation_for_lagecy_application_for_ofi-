# CustomerProvider.php

**Path**: `src\Provider\Customer\CustomerProvider.php`

## Summary
The `CustomerProvider` class is responsible for retrieving or creating customer entities in a Sylius e-commerce system based on their email address and channel. It canonicalizes the provided email, searches for an existing customer in the specified channel, and if none exists, creates a new customer instance with that email, ensuring customer uniqueness per channel context.

## Classes
- `CustomerProvider`

## Function Details

### `provide`

- **Parameters**: `string $email, ChannelInterface $channel`

