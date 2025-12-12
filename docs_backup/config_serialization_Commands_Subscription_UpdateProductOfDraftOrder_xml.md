# UpdateProductOfDraftOrder.xml

**Path**: `config\serialization\Commands\Subscription\UpdateProductOfDraftOrder.xml`

## Summary
This XML configuration file defines serialization groups for the `UpdateProductOfDraftOrder` command in a subscription management system. It specifies that the `orderItem` and `quantity` attributes should be included when serializing/deserializing this command under the `shop:subscription_order:update_product` context, enabling controlled data exposure when updating products in draft subscription orders through the API.

