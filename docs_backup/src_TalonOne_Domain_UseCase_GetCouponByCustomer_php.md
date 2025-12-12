# GetCouponByCustomer.php

**Path**: `src\TalonOne\Domain\UseCase\GetCouponByCustomer.php`

## Summary
This use case class retrieves all coupons associated with a specific customer from the TalonOne promotion management system. It builds an advanced search request using the customer's information and application ID, executes it through the TalonOne Management API, and transforms the response into an array of domain `Coupon` objects while handling various API errors and technical exceptions.

## Classes
- `GetCouponByCustomer`

## Function Details

### `execute`

- **Parameters**: `string $applicationId, Customer $customer`

