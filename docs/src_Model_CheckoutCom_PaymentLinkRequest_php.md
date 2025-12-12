# PaymentLinkRequest.php

**Path**: `src\Model\CheckoutCom\PaymentLinkRequest.php`

## Summary
This class extends Checkout.com's base payment link request to create payment links specifically for Sylius e-commerce orders. It constructs a complete payment request by mapping Sylius order data (amount, customer details, shipping/billing addresses, line items) to Checkout.com's payment link API format, including 3D Secure authentication and risk management configuration.

## Classes
- `PaymentLinkRequest`

## Function Details

### `setCustomer`

- **Parameters**: `?CustomerInterface $customer`

### `setCurrency`

- **Parameters**: `?string $currencyCode`

### `setLocale`

- **Parameters**: `?string $localeCode`

### `setShipping`

- **Parameters**: `?SyliusAddress $shippingAddress`

### `setBilling`

- **Parameters**: `?SyliusAddress $billingAddress`

### `setProducts`

- **Parameters**: `Collection $orderItems`

### `setRisk`


### `setThreeDs`


