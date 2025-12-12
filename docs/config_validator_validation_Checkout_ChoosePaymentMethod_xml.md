# ChoosePaymentMethod.xml

**Path**: `config\validator\validation\Checkout\ChoosePaymentMethod.xml`

## Summary
This XML configuration file defines validation constraints for the checkout payment method selection process in a Sylius-based e-commerce application. It applies a custom `ChosenPaymentMethodEligibility` validator to the `ChoosePaymentMethod` command to ensure that customers can only select payment methods that are valid and available for their specific order context.

