# preview-head.html

**Path**: `apps\storybook\.storybook\preview-head.html`

## Summary
This code sets up global browser environment variables required for Storybook to run properly. It polyfills Node.js-specific globals (`window.global` and `process`) that are expected by the application code but don't exist natively in the browser, specifically marking the environment as client-side and disabling Datadog agent host configuration for the Storybook development environment.

