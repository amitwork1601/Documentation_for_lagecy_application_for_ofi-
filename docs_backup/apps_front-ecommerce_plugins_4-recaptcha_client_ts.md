# 4-recaptcha.client.ts

**Path**: `apps\front-ecommerce\plugins\4-recaptcha.client.ts`

## Summary
This Nuxt plugin integrates Google reCAPTCHA v3 into the e-commerce front-end application by registering the VueReCaptcha component globally. It configures reCAPTCHA using settings from the application's public runtime configuration, enabling bot protection and spam prevention across the e-commerce site. The plugin runs client-side only to initialize reCAPTCHA's invisible verification mechanism that can be used on forms like checkout, login, and registration.

