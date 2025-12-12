# useIntersectionObserverOnce.ts

**Path**: `apps\front-ecommerce\composables\useIntersectionObserverOnce.ts`

## Summary
This composable wraps Vue's `useIntersectionObserver` to create a single-use intersection observer that automatically stops observing after the first intersection event is triggered. It's designed for scenarios where you only need to detect when an element enters the viewport once (e.g., lazy loading images or triggering animations on first appearance), improving performance by preventing unnecessary repeated observations.

