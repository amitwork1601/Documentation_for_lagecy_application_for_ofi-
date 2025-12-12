# Overlay.vue

**Path**: `apps\front-ecommerce\components\overlay\Overlay.vue`

## Summary
# Component Summary

This Vue component renders a configurable overlay system for an e-commerce application that dynamically displays different types of content layers (made-in information, markdown content, CTA buttons, product cards, and reviews). It uses TypeScript type guards to identify each layer's component type and handles responsive behavior for desktop vs. mobile viewports. The component serves as a flexible container for displaying promotional or informational overlays that can combine multiple types of content blocks in a single view.

## Function Details

### `getLayerComponent`

- **Parameters**: `layer: IOverlayLayer`

