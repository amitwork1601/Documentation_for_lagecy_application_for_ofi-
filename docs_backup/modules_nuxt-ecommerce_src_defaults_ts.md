# defaults.ts

**Path**: `modules\nuxt-ecommerce\src\defaults.ts`

## Summary
This file defines default configuration options for a Nuxt-based e-commerce module, specifically for Ultra Premium Direct (a pet food company). It establishes various defaults including app transitions, SEO/meta tags, route rules (with SSR disabled for sensitive pages like cart, account, checkout), and Nitro build options, along with a utility function to remove test attributes from Vue templates during compilation.

## Function Details

### `removeDataTestAttrs`

- **Parameters**: `node: RootNode | TemplateChildNode`

