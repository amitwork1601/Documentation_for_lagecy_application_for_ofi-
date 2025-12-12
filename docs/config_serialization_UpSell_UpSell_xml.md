# UpSell.xml

**Path**: `config\serialization\UpSell\UpSell.xml`

## Summary
# Summary

This Symfony serializer configuration file defines serialization groups for the `UpSell` entity, controlling which attributes (id, name, enabled, availableVariants) are exposed in different API contexts. It manages visibility of upselling data across various contexts including admin interfaces (subscription management, order viewing, upsell CRUD operations) and shop-facing views (cart, order display), ensuring appropriate data access based on user role and operation type.

