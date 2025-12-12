# paymentGateways.html.twig

**Path**: `plugins\PayPalPlugin\src\Resources\views\bundles\SyliusAdminBundle\PaymentMethod\Gateways\paymentGateways.html.twig`

## Summary
This Twig template renders a list of available payment gateway options in the Sylius admin panel, displaying each gateway as a clickable link that navigates to the payment method creation page for that specific gateway. It adds special handling for the PayPal gateway by including a `data-confirm-pay-pal-consent` attribute, which likely triggers a consent confirmation dialog before proceeding with PayPal payment method setup.

