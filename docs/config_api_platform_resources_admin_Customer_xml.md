# Customer.xml

**Path**: `config\api_platform\resources\admin\Customer.xml`

## Summary
This API Platform configuration file defines admin-level REST API operations for managing Customer resources in a Sylius e-commerce application. It configures two operations: POST for creating new customers (mapped to a RegisterShopUser command via messenger) and PUT for updating existing customers, with specific serialization groups controlling which customer data fields are exposed and validated in admin contexts.

