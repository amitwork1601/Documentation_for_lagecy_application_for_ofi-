# UpSell.xml

**Path**: `config\api_platform\resources\shop\UpSell.xml`

## Summary
This API Platform configuration file defines REST API endpoints for managing upsell product recommendations in an e-commerce shop context. It exposes two operations: a collection endpoint (`/upsells`) that retrieves all upsells filtered by cart context with position-based ordering and pagination disabled, and a single item endpoint (`/upsells/{id}`) for fetching individual upsell details. The configuration is part of a Sylius-based e-commerce system and uses custom state providers and filters to determine which upsell products should be displayed to customers based on their shopping cart contents.

