# ContactForm.vue

**Path**: `apps\front-ecommerce\components\content\ContactForm.vue`

## Summary
This Vue component manages a contact form submission process for an e-commerce front-end application. It handles form data collection, integrates reCAPTCHA validation for security, submits the data to a cloud contact API endpoint with additional metadata (country, origin), and tracks the submission outcome (success/error) for analytics purposes using a custom tracking event system.

## Function Details

### `handleSubmit`

- **Parameters**: `form: { [key: string]: any }`

