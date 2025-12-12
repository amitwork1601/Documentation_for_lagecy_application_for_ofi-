# useRecaptchaHelper.ts

**Path**: `apps\front-ecommerce\composables\useRecaptchaHelper.ts`

## Summary
This composable provides a helper function for integrating Google reCAPTCHA v3 into a Nuxt.js e-commerce application. It wraps the vue-recaptcha-v3 library to generate reCAPTCHA tokens for specific actions (like form submissions), handling server-side rendering cases by returning empty tokens when running on the server. The composable ensures the reCAPTCHA instance is loaded before executing token generation and provides the token retrieval function through Nuxt's plugin system for application-wide access.

## Function Details

### `getRecaptchaToken`

- **Parameters**: `action: string`

### `useRecaptchaHelper`


