# PaymentInstrument.xml

**Path**: `config\api_platform\properties\PaymentInstrument.xml`

## Summary
This XML configuration file defines API Platform property metadata for a PaymentInstrument resource. It specifies that properties like `id`, `code`, `state`, `customer`, and `method` are read-only (not writable via the API), with `code` serving as the resource identifier instead of the default `id`. This configuration controls how payment instrument data can be accessed and modified through the API, enforcing business rules that prevent direct modification of payment instrument details.

