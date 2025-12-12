# concreteCompositeRenderable.ts

**Path**: `modules\nuxt-ecommerce\src\runtime\compositeRenderable\concreteCompositeRenderable.ts`

## Summary
This class extends `CompositeRenderable` to create concrete instances of dynamically-loaded Strapi CMS components for rendering in a Nuxt e-commerce application. It wraps Strapi component data with an asynchronously-loaded Vue component, providing error handling that renders a hidden fallback div if component loading fails, and generates unique keys for each component instance based on its type and ID.

## Classes
- `ConcreteCompositeRenderable`

