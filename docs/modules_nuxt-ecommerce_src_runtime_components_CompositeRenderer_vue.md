# CompositeRenderer.vue

**Path**: `modules\nuxt-ecommerce\src\runtime\components\CompositeRenderer.vue`

## Summary
This Vue component serves as a dynamic renderer for Strapi-based composite pages in an e-commerce system. It takes a page definition with multiple content blocks, maps them to Vue components through a composable hook (`useCompositeRenderer`), and conditionally renders each component based on A/B test targeting rules. The component provides flexibility for lazy hydration, debug mode, and passes through props/events to child components while maintaining their ordering on the page.

