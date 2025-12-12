# ProductOptionValue.xml

**Path**: `config\api_platform\resources\shop\ProductOptionValue.xml`

## Summary
This API Platform configuration file defines a shop-facing REST API endpoint for retrieving product option values (e.g., size, color variations) in a Sylius e-commerce system. It exposes a single GET operation at `/shop/product-option-values/{code}` that returns product option value details using the `sylius:shop:product_option_value:show` serialization group for controlling the response data structure.

