# DeleteItemToSubscription.xml

**Path**: `config\serialization\Commands\Subscription\DeleteItemToSubscription.xml`

## Summary
This is a Symfony serializer configuration file that defines serialization rules for the `DeleteItemToSubscription` command class. It specifies that three attributes (`subscriptionCode`, `subscriptionItem`, and `spreadOnDraft`) should be included when serializing this command under the `admin:subscription:delete_item` serialization group, which is used for administrative operations to remove items from subscriptions.

