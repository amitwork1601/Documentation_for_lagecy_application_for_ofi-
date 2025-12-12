# onboarding.xml

**Path**: `plugins\PayPalPlugin\src\Resources\config\services\onboarding.xml`

## Summary
This Symfony service configuration file defines dependency injection services for PayPal merchant onboarding functionality. It configures two main services: an `OnboardingInitiator` that handles the initial setup of PayPal onboarding (using routing, security, and a facilitator URL), and a `BasicOnboardingProcessor` that processes the onboarding workflow including HTTP communication and webhook registration for PayPal sellers.

