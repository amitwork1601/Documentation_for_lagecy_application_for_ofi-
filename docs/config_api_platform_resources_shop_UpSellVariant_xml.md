# UpSellVariant.xml

**Path**: `config\api_platform\resources\shop\UpSellVariant.xml`

## Summary
This API Platform configuration file defines REST API endpoints for managing up-sell product variants in a Sylius e-commerce shop. It exposes two shop-facing operations: a GET collection endpoint (`/upsells-variant`) that retrieves all up-sell variants sorted by position with pagination disabled, and a GET single item endpoint (`/upsells-variant/{id}`) for fetching individual up-sell variants, both using the `shop:upsell_variant:read` serialization group for controlling data exposure.

