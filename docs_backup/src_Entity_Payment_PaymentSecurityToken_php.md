# PaymentSecurityToken.php

**Path**: `src\Entity\Payment\PaymentSecurityToken.php`

## Summary
The `PaymentSecurityToken` class is a Doctrine ORM entity that extends Sylius's base payment security token model to store payment gateway security tokens in the database. It serves as a persistence layer for Payum's tokenization system, which secures payment operations by generating one-time tokens that authorize specific payment actions (like capture, refund, or notify callbacks). This empty extension class allows the application to customize the base Sylius payment token implementation if needed while mapping it to the `sylius_payment_security_token` database table.

## Classes
- `PaymentSecurityToken`

