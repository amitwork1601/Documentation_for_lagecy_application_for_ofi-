# ProductOptionValue.xml

**Path**: `config\api_platform\resources\admin\ProductOptionValue.xml`

## Summary
This API Platform configuration file defines REST API endpoints for managing product option values in the Sylius e-commerce admin panel. It exposes two read-only operations: a collection endpoint (`GET /admin/product-option-values`) to retrieve all product option values and a single-item endpoint (`GET /admin/product-option-values/{code}`) to fetch individual option values by their code, both using the `sylius:admin:product_option_value:show` serialization group for data normalization.

