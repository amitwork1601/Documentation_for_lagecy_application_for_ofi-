# _payments.html.twig

**Path**: `plugins\PayPalPlugin\src\Resources\views\bundles\SyliusShopBundle\Common\Order\_payments.html.twig`

## Summary
This Twig template renders the payment details section for an order in the Sylius shop frontend, specifically customized for the PayPal plugin. It displays each payment's method, amount, and status, with special handling to show a warning message when the payment amount differs from the order total during processing (a PayPal-specific scenario). The template conditionally excludes payment state labels for orders still in the 'cart' state and formats monetary values using Sylius's money macro.

