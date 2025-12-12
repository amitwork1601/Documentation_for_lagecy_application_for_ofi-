# mockIntersectionObserverDirective.ts

**Path**: `apps\storybook\composables\mockIntersectionObserverDirective.ts`

## Summary
This file exports a Vue directive that mocks the IntersectionObserver API for Storybook testing environments. It simulates intersection observer behavior by automatically triggering the bound callback with a mock "isIntersecting: true" event after a 1-second delay, allowing developers to test components that rely on intersection observation without requiring actual browser IntersectionObserver support or real DOM intersection events.

