# PromotionAnalyticBroadcast.xml

**Path**: `config\serialization\Promotion\PromotionAnalyticBroadcast.xml`

## Summary
This Symfony serializer configuration file defines serialization groups for the `PromotionAnalyticBroadcast` entity, which tracks analytics data for promotional broadcasts. It specifies which attributes (id, mainCategory, name, active, position) should be included when serializing this entity for different contexts: admin promotion views, webmethod promotion reads, and webmethod order reads. The configuration enables controlled exposure of promotion analytics data across different API endpoints and administrative interfaces.

