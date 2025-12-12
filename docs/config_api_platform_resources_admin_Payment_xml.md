# Payment.xml

**Path**: `config\api_platform\resources\admin\Payment.xml`

## Summary
This API Platform configuration file defines a REST API endpoint for completing payment transactions in a Sylius e-commerce admin interface. It configures a PATCH operation at `/admin/payments/{id}/complete` that processes payment completion commands through a messenger system, with specific serialization groups for admin payment operations and customer data display. The configuration handles the denormalization of incoming payment completion requests and normalization of responses while applying appropriate validation rules for customer-related data.

