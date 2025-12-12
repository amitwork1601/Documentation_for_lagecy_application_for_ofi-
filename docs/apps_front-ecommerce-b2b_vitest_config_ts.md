# vitest.config.ts

**Path**: `apps\front-ecommerce-b2b\vitest.config.ts`

## Summary
This Vitest configuration file sets up the testing environment for a B2B e-commerce frontend application. It extends a base Vitest config and configures plugins for auto-importing composables and components from both the shared nuxt-ecommerce module and the B2B-specific application directories, along with SVG loading capabilities. The configuration also establishes path aliases to enable clean imports across the monorepo structure, mapping shortcuts like `@front-core` to the shared e-commerce runtime module and `@front-ecommerce-b2b` to the current B2B application.

