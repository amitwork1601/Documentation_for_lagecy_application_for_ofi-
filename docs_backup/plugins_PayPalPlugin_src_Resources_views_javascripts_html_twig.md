# javascripts.html.twig

**Path**: `plugins\PayPalPlugin\src\Resources\views\javascripts.html.twig`

## Summary
This JavaScript code implements a confirmation modal dialog for PayPal data sharing consent in a Sylius e-commerce plugin. When users click elements with the `data-confirm-pay-pal-consent` attribute, it intercepts the action, displays a modal with a consent message (translated via `sylius.pay_pal.share_data_consent_confirmation`), and only proceeds to the intended URL after the user clicks the confirmation button. The modal automatically restores its default content when closed, ensuring proper state management for subsequent consent requests.

