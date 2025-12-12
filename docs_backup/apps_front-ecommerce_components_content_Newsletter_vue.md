# Newsletter.vue

**Path**: `apps\front-ecommerce\components\content\Newsletter.vue`

## Summary
This Vue component implements a newsletter subscription form for an e-commerce front-end application. It handles form submission by collecting user email data, validating it with reCAPTCHA, sending the subscription request to a CloudContact service, and tracking the subscription event for analytics. The component supports customization through props including optional image display and footer placement, while managing UI states (loading, success, error) throughout the subscription process.

## Function Details

### `handleSubmit`

- **Parameters**: `form: TNewsletterRequest, source: string`

