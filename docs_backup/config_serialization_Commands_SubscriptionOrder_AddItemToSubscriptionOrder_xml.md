# AddItemToSubscriptionOrder.xml

**Path**: `config\serialization\Commands\SubscriptionOrder\AddItemToSubscriptionOrder.xml`

## Summary
This is a Symfony serializer configuration file that defines serialization groups for the `AddItemToSubscriptionOrder` command. It specifies that four attributes (`variant`, `quantity`, `upsell`, and `sourceItemList`) should be included when serializing this command for both admin and shop contexts when adding items to subscription orders, enabling different access levels or API endpoints to control what data is exposed during the add-to-subscription operation.

