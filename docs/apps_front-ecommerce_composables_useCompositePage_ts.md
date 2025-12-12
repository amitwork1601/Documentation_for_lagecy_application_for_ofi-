# useCompositePage.ts

**Path**: `apps\front-ecommerce\composables\useCompositePage.ts`

## Summary
This composable creates a registry of dynamic component mappings for a composite page rendering system in an e-commerce application. It maps string identifiers (like 'generic.cta-listing', 'b2c.booxi-cta') to lazy-loaded Vue components using the `CompositeRenderable` class, enabling dynamic page composition from CMS or backend-defined content blocks. The function accepts optional additional components and returns a combined array of both generic UI elements (embeds, images, rich content) and business-specific components (carousels, calendars, CTAs) that can be rendered based on page configuration.

