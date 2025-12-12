# types.d.ts

**Path**: `packages\types\src\types.d.ts`

## Summary
This TypeScript declaration file extends Vue's component properties to add global utilities for Markdown rendering and Google reCAPTCHA v3 integration. It augments the Vue module to make a MarkdownIt instance (`$md`) and reCAPTCHA methods (`$recaptcha`, `$recaptchaLoaded`, `$recaptchaInstance`) available as properties on all Vue components. This enables type-safe access to these third-party integrations throughout the Vue application without manual typing in each component.

## Interfaces
- `ComponentCustomProperties`

