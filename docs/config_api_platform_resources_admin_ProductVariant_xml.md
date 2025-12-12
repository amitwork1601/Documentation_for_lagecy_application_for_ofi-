# ProductVariant.xml

**Path**: `config\api_platform\resources\admin\ProductVariant.xml`

## Summary
This API Platform configuration file defines a custom admin API endpoint for replacing product variants in a Sylius e-commerce system. It configures a POST operation at `/admin/product-variants/replace` that uses a message bus (messenger) pattern, accepting `ReplaceRequest` input with specific denormalization and validation groups for administrative product variant replacement operations.

