# psalm.xml

**Path**: `plugins\PayPalPlugin\psalm.xml`

## Summary
This is a Psalm static analysis configuration file for the PayPal plugin in a Sylius e-commerce application. It configures strict type-checking (error level 1) for the plugin's source code while specifically ignoring certain files and suppressing specific type-related issues (like MixedArgument, MixedArrayAccess) in PayPal order processing, payment refund, and webhook controllers where dynamic data structures from the PayPal API make strict typing impractical.

