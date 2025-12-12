# AssignCustomer.xml

**Path**: `config\serialization\Commands\Checkout\AssignCustomer.xml`

## Summary
This XML configuration file defines serialization groups for the `AssignCustomer` command in a checkout context. It specifies that the `customer` attribute should be included when serializing/deserializing this command for both admin and shop cart update operations, enabling controlled exposure of customer assignment data based on user context (admin vs. shop frontend).

