# 2-intersection-observer-once-directive.ts

**Path**: `apps\front-ecommerce\plugins\2-intersection-observer-once-directive.ts`

## Summary
This Nuxt plugin registers a custom Vue directive called `interception-observer` that enables lazy loading or trigger actions when DOM elements become visible in the viewport. It wraps VueUse's `useIntersectionObserver` composable to allow declarative use of the Intersection Observer API through template directives, accepting either a callback function or an array of parameters. The plugin includes SSR support by providing an empty SSR props function to prevent hydration issues.

