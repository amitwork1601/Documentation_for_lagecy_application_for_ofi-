# controller.xml

**Path**: `plugins\PayPalPlugin\src\Resources\config\services\controller.xml`

## Summary
This Symfony service configuration file defines dependency injection settings for PayPal webhook controllers and payment-related actions in a Sylius e-commerce PayPal plugin. It configures services for handling PayPal webhook events such as order refunds, checkout approvals, payment capture completions/denials, and order cancellations, wiring each controller with its required dependencies like payment providers, state machines, entity managers, and loggers. The configuration ensures these controllers can process PayPal callbacks and synchronize payment states between PayPal and the Sylius platform.

