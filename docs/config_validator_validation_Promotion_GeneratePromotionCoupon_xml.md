# GeneratePromotionCoupon.xml

**Path**: `config\validator\validation\Promotion\GeneratePromotionCoupon.xml`

## Summary
This XML file defines validation rules for the `GeneratePromotionCoupon` command in a Sylius-based e-commerce system. It enforces constraints on coupon code generation, specifically requiring that the `codeLength` property must be present, positive, and not exceed 40 characters, while also applying a custom `CreatePromotionCoupon` validator to ensure proper coupon generation logic.

