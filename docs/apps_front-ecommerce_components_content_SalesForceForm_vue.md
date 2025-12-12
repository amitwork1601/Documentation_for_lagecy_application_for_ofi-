# SalesForceForm.vue

**Path**: `apps\front-ecommerce\components\content\SalesForceForm.vue`

## Summary
This Vue component provides a Salesforce lead capture form integration for an e-commerce front-end application. It handles form submissions by enriching user input with campaign tracking data, reCAPTCHA validation, and UPD (likely country/regional) configuration before sending it to Salesforce's Web-to-Lead API, then tracks successful submissions and displays success/error states to users.

## Function Details

### `handleSubmit`

- **Parameters**: `form: MutationRequestForm['Data']`

