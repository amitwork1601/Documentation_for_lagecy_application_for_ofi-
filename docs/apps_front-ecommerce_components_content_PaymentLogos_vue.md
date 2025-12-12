# PaymentLogos.vue

**Path**: `apps\front-ecommerce\components\content\PaymentLogos.vue`

## Summary
This Vue component displays a horizontal list of payment method logos for an e-commerce storefront. It accepts payment options as props from a CMS and renders them as icons, with special handling for the Bancontact payment method that uses a custom component, while falling back to translation messages if no payment data is provided. The component serves as a trust indicator typically shown in the footer to communicate accepted payment methods to customers.

## Function Details

### `bancontact`

- **Parameters**: `computed((`

