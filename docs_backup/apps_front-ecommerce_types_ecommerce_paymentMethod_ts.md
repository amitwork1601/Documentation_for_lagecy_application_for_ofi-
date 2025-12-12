# paymentMethod.ts

**Path**: `apps\front-ecommerce\types\ecommerce\paymentMethod.ts`

## Summary
This TypeScript file defines type interfaces and type definitions for an e-commerce payment system integrated with Sylius (an e-commerce framework). It establishes the data structures for payment methods, payment instruments (stored payment details), payment offers, and specialized configurations for various payment providers including PayZen, Checkout.com (credit card, Google Pay, Apple Pay), and PayPal. The types support multi-language translations, payment state management, and provider-specific public configurations needed for client-side payment processing.

## Interfaces
- `IPaymentInstrument`
- `IUpdateInstrumentResponse`
- `IPaymentTranslations`
- `IPaymentMethod`
- `IPaymentOffer`
- `IPaymentOfferConfig`
- `IPaymentInstrumentOfferConfig`

## Type Aliases
- `TPaymentOfferPublicConfig`
- `TPayzenPaymentOfferPublicConfig`
- `TCheckoutCBPaymentOfferPublicConfig`
- `TPaypalPaymentOfferPublicConfig`
- `TCheckoutGooglePayPaymentOfferPublicConfig`
- `TCheckoutApplePayPaymentOfferPublicConfig`
- `TPaymentOfferComputed`

