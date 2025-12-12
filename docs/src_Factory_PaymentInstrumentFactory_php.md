# PaymentInstrumentFactory.php

**Path**: `src\Factory\PaymentInstrumentFactory.php`

## Summary
The `PaymentInstrumentFactory` is a decorator factory responsible for creating and managing `PaymentInstrument` entities, which represent stored payment methods (like credit cards) for customers in an e-commerce system. It generates unique codes for new payment instruments, associates them with customers, and can extract/create payment instruments from completed payments by interfacing with various payment gateway implementations. This factory serves as the bridge between the application's payment processing layer and the stored payment method management system, enabling features like saved cards and recurring payments.

## Classes
- `PaymentInstrumentFactory`

## Function Details

### `createNew`


### `createNewWithCustomer`

- **Parameters**: `CustomerInterface $customer`
- **Description**: @var PaymentInstrument $paymentInstrument */
$paymentInstrument = $this-&gt;decorated-&gt;createNew();
$paymentInstrument-&gt;setCode($this-&gt;generator-&gt;generateUriSafeString(10));

return $paymentInstrument;
}

/**
@param Customer&amp;CustomerInterface $customer
/

### `createNewFromPayment`

- **Parameters**: `PaymentInterface $payment`

