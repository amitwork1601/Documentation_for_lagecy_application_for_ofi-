# PaymentInstrument.xml

**Path**: `config\api_platform\resources\admin\PaymentInstrument.xml`

## Summary
This API Platform configuration file defines RESTful API endpoints for managing payment instruments in the admin section of a Sylius e-commerce application. It configures three operations: retrieving a collection of payment instruments (GET collection), fetching a single payment instrument (GET), and creating a new payment instrument (POST) with the creation handled via a messenger command. The configuration specifies serialization groups for controlling which data fields are exposed or accepted for each operation, with separate groups for read and create operations.

