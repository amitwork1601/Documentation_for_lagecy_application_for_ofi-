# PromotionRule.xml

**Path**: `config\serialization\Promotion\PromotionRule.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `PromotionRule` entity, which represents the conditions that must be met for a promotion to be applied. It specifies which attributes (id, type, and configuration) should be included when serializing promotion rules in different contexts, such as admin views (show, create, update) and API endpoints (webmethod promotion and order reads), enabling controlled data exposure based on the operation being performed.

