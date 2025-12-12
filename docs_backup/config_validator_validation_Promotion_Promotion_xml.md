# Promotion.xml

**Path**: `config\validator\validation\Promotion\Promotion.xml`

## Summary
This is a Symfony validation configuration file that defines validation constraints for the Promotion entity. It enforces two key business rules: a custom `RemovePromotion` validation that applies during promotion deletion (using the `app_promotion_delete` group), and a `UniqueEntity` constraint ensuring that promotion names are unique across the system to prevent duplicate promotions.

