# DeleteSubscriptionCommentAction.php

**Path**: `src\Api\Controller\Subscription\DeleteSubscriptionCommentAction.php`

## Summary
This API controller handles HTTP requests to delete a comment from a subscription. It validates the subscription code and comment ID from the request, retrieves the subscription entity, then dispatches a `RemoveSubscriptionComment` command through the message bus to perform the deletion, returning a 204 No Content response on success or throwing a NotFoundHttpException if the subscription or comment cannot be found.

## Classes
- `DeleteSubscriptionCommentAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

