# OrderRuleCondition.xml

**Path**: `config\serialization\OrderRule\OrderRuleCondition.xml`

## Summary
This Symfony serializer configuration file defines serialization rules for the `OrderRuleCondition` entity, specifying which attributes should be exposed during API operations. It controls access to the `id`, `type`, and `configuration` fields through different serialization groups (read, create, update) for admin order rule management, ensuring that the `id` is only readable while `type` and `configuration` can be created, read, and updated.

