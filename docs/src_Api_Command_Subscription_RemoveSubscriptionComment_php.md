# RemoveSubscriptionComment.php

**Path**: `src\Api\Command\Subscription\RemoveSubscriptionComment.php`

## Summary
This class represents a command for removing a comment from a subscription in the API layer. It extends `AbstractSubscriptionComment` and uses attributes to mark that it requires both a subscription code and a comment ID to identify which specific comment should be deleted. The command follows a CQRS pattern for handling subscription comment removal operations, with an optional message field that likely serves as a reason or audit trail for the deletion.

## Classes
- `RemoveSubscriptionComment`

