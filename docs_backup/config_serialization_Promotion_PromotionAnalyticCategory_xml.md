# PromotionAnalyticCategory.xml

**Path**: `config\serialization\Promotion\PromotionAnalyticCategory.xml`

## Summary
This Symfony serializer configuration file defines how the `PromotionAnalyticCategory` entity should be serialized across different contexts (serialization groups). It specifies that attributes like `id`, `mainCategory`, `name`, `active`, and `position` should be exposed in different API/admin views, with most fields available in admin promotion displays and webmethod API responses for promotions and orders. The configuration enables controlled data exposure for promotion analytics categories in both administrative interfaces and API endpoints.

