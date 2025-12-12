# ForceSendNextShippingEmailHandler.php

**Path**: `src\Api\CommandHandler\Subscription\ForceSendNextShippingEmailHandler.php`

## Summary
This handler processes commands to manually trigger next shipping notification emails for active subscriptions. It retrieves a subscription by code, then dispatches an email command (either "next shipping" or "next shipping soon" variant based on command type) to be sent synchronously, supporting administrative or debugging scenarios where shipping notifications need to be sent on-demand rather than through the regular automated workflow.

## Classes
- `ForceSendNextShippingEmailHandler`

## Function Details

### `__invoke`

- **Parameters**: `ForceSendNextShippingEmail $command`

