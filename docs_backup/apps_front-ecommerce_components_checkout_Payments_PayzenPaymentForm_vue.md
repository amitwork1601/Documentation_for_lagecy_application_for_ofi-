# PayzenPaymentForm.vue

**Path**: `apps\front-ecommerce\components\checkout\Payments\PayzenPaymentForm.vue`

## Summary
This Vue component integrates the Payzen payment gateway into an e-commerce checkout flow by embedding and configuring the Payzen payment form. It loads the Payzen SDK, mounts the payment form with proper localization and security settings (including 3D Secure), handles payment submission events, and manages error states throughout the payment process. The component serves as a bridge between the checkout system and Payzen's embedded payment solution, emitting events to notify parent components of payment status changes.

## Function Details

### `mountPaymentForm`


