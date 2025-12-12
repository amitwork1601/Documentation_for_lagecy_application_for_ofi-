# FullBiNutritionStep2.vue

**Path**: `apps\front-ecommerce\components\userGuide\FullBiNutritionStep2.vue`

## Summary
This Vue component implements Step 2 of a pet nutrition user guide, where customers select appropriate food products for their pet based on previous profile information. It fetches and displays recommended products from both Strapi (CMS) and Sylius (e-commerce platform), manages product selection state, calculates feeding frequencies, and handles cart operations while tracking user interactions through the guide flow. The component serves as a crucial conversion point in the customer journey, bridging pet profile data with product recommendations.

## Function Details

### `tracking`


### `emitSelectedProduct`

- **Parameters**: `selectedProduct: TEmitAddToCart`

