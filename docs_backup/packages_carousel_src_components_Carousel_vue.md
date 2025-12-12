# Carousel.vue

**Path**: `packages\carousel\src\components\Carousel.vue`

## Summary
This Vue 3 component implements a configurable carousel/slider with support for multiple items per slide, navigation arrows, dots, and auto-play functionality. It provides flexible display options across different screen sizes, supports both infinite and finite scrolling modes, and emits events when slides or the component itself become visible. The component uses the Intersection Observer API to track slide visibility and can automatically update the current slide index on mobile devices when slides enter the viewport.

## Function Details

### `onIntersectingShown`

- **Parameters**: `$event: IntersectionObserverEntry[]`

