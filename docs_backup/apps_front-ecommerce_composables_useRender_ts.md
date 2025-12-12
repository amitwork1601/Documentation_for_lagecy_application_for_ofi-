# useRender.ts

**Path**: `apps\front-ecommerce\composables\useRender.ts`

## Summary
This composable provides a utility function to programmatically set a Vue component's render function at runtime, working around a Vue 3 production build issue where Single File Components (SFCs) without a `&lt;template&gt;` section have their render function overwritten. It uses direct assignment in development mode and `Object.defineProperty` in production to ensure the custom render function persists, enabling components to be defined purely through render functions in the setup function.

## Interfaces
- `Arrayable`

## Function Details

### `useRender`

- **Parameters**: `render: (`

