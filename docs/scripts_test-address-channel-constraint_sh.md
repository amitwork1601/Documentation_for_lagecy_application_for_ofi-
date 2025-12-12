# test-address-channel-constraint.sh

**Path**: `scripts\test-address-channel-constraint.sh`

## Summary
This bash script validates that the `AddressChannelConstraint` validator has been successfully migrated from PHP attribute-based configuration to XML-based configuration for the `AddressOrder` command class. It performs three checks: verifies the constraint is loaded in Symfony's validator configuration, confirms the PHP attribute has been removed from the source class, and ensures the constraint definition exists in the XML validation file.

