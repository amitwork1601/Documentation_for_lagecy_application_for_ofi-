# ExitPopup.vue

**Path**: `apps\front-ecommerce\components\modals\ExitPopup.vue`

## Summary
This Vue component implements an exit-intent popup modal for newsletter subscription in an e-commerce application. It captures user email addresses when they attempt to leave the site, submits the data to a newsletter service (Cloud Contact) with reCAPTCHA validation, and tracks subscription events for analytics purposes. The component handles form submission states (loading, success, error) and integrates with the application's internationalization and tracking systems.

## Function Details

### `handleSubmit`

- **Parameters**: `form: TNewsletterRequest, source: string`

### `trackingOnPopUp`

- **Parameters**: `view?: boolean`

### `newsletterForm`

- **Parameters**: `new NewsletterRequestForm('exit-popup', async (data`

