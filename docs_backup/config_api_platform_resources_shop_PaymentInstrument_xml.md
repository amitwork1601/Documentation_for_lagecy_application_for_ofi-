# PaymentInstrument.xml

**Path**: `config\api_platform\resources\shop\PaymentInstrument.xml`

## Summary
This API Platform configuration file defines REST API endpoints for managing payment instruments in a Sylius shop. It configures two operations: a GET endpoint to retrieve a payment instrument by code (`/shop/payment-instruments/{code}`) and a POST endpoint to create new payment instruments (`/shop/payment-instruments`), with the POST operation using a command-based messenger pattern for processing. The configuration specifies normalization/denormalization contexts with appropriate serialization groups for reading and creating payment instrument data.

