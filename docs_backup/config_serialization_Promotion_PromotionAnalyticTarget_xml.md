# PromotionAnalyticTarget.xml

**Path**: `config\serialization\Promotion\PromotionAnalyticTarget.xml`

## Summary
This Symfony serializer configuration file defines how the `PromotionAnalyticTarget` entity should be serialized across different contexts (serialization groups). It specifies that attributes like `id`, `mainCategory`, `name`, `active`, and `position` should be included when serializing promotion analytics data for admin views, webmethod promotion reads, and webmethod order reads. The configuration enables controlled exposure of promotion analytics target data to different API endpoints and user interfaces based on their access context.

