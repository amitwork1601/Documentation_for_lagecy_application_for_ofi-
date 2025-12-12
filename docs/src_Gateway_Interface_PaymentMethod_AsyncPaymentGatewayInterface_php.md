# AsyncPaymentGatewayInterface.php

**Path**: `src\Gateway\Interface\PaymentMethod\AsyncPaymentGatewayInterface.php`

## Summary
This interface defines the contract for asynchronous payment gateway implementations in an e-commerce system. It requires implementing classes to provide a `processPayment` method that accepts an Order entity, optional payment data, and the current URL, then returns a ProcessPaymentResponse object—likely containing redirect URLs or tokens needed for external payment processing flows where the customer completes payment on a third-party site.

## Function Details

### `processPayment`

- **Parameters**: `Order $order, array $paymentData = [], string $currentUrl = ''`

