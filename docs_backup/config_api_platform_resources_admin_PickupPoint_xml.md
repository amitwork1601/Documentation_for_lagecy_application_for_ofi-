# PickupPoint.xml

**Path**: `config\api_platform\resources\admin\PickupPoint.xml`

## Summary
This API Platform configuration file defines admin endpoints for retrieving pickup point locations in an e-commerce system. It provides two GET collection operations: one for fetching available pickup points for a specific order (by token value) and another for subscription-based orders (by code), both utilizing a shared `CollectionProvider` and supporting filtering by point location and shipping method. The configuration is part of a Sylius-based application's admin API, allowing administrators to query pickup point options associated with orders or subscriptions.

