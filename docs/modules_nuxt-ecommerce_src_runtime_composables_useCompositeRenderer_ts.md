# useCompositeRenderer.ts

**Path**: `modules\nuxt-ecommerce\src\runtime\composables\useCompositeRenderer.ts`

## Summary
This composable manages the dynamic rendering of CMS-driven UI components from a Strapi headless CMS in a Nuxt e-commerce application. It maps Strapi component schemas to Vue components by matching them against a component registry, filtering for enabled components, and resolving them into renderable instances that can be dynamically displayed on composite pages. The composable provides fallback debug components when mappings are missing and allows flexible content attribute selection for accessing the component data within the Strapi page structure.

## Function Details

### `renderable`

- **Parameters**: `unref(componentsMap).find((renderable`

