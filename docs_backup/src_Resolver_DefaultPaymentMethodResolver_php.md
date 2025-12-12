# DefaultPaymentMethodResolver.php

**Path**: `src\Resolver\DefaultPaymentMethodResolver.php`

## Summary
This class implements a default payment method resolver for Sylius e-commerce that determines which payment method should be automatically selected for a payment. It retrieves all supported payment methods for a given payment, sorts them by their position property in ascending order, and returns the first one (lowest position value) as the default, throwing an exception if no payment methods are available.

## Classes
- `DefaultPaymentMethodResolver`

## Function Details

### `getDefaultPaymentMethod`

- **Parameters**: `PaymentInterface $payment`
- **Description**: @throws UnresolvedDefaultPaymentMethodException
/

