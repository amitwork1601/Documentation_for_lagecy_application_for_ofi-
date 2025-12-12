# PaymentProvider.php

**Path**: `plugins\PayPalPlugin\src\Provider\PaymentProvider.php`

## Summary
The `PaymentProvider` class is responsible for retrieving Sylius payment entities that are associated with PayPal orders. Its main functionality is the `getByPayPalOrderId()` method, which executes a native SQL query to find a payment record by searching for a specific PayPal order ID stored in the payment details JSON field, filtering specifically for payments using the PayPal gateway. This provider acts as a specialized data access layer to bridge Sylius payment records with their corresponding PayPal transaction identifiers.

## Classes
- `PaymentProvider`

## Function Details

### `__construct`

- **Parameters**: `EntityManager $entityManager, PaymentRepositoryInterface $paymentRepository`

### `getByPayPalOrderId`

- **Parameters**: `string $orderId`
- **Description**: @throws PaymentNotFoundException
@throws \Doctrine\ORM\NonUniqueResultException
/

