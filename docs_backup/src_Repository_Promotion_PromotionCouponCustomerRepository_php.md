# PromotionCouponCustomerRepository.php

**Path**: `src\Repository\Promotion\PromotionCouponCustomerRepository.php`

## Summary
This repository manages the relationship between customers and promotion coupons, tracking which coupons have been used by which customers. It provides specialized query methods to retrieve customer-coupon associations either by a specific coupon instance (`findByCustomerAndCoupon`) or by the broader promotion campaign (`findByCustomerAndPromotion`), enabling the system to enforce coupon usage rules and track redemption history per customer.

## Classes
- `PromotionCouponCustomerRepository`

## Function Details

### `findByCustomerAndCoupon`

- **Parameters**: `Customer $customer, PromotionCoupon $coupon`
- **Description**: @method PromotionCouponCustomer|null find($id, $lockMode = null, $lockVersion = null)
@method PromotionCouponCustomer|null findOneBy(array $criteria, array $orderBy = null)
@method PromotionCouponCustomer[]    findAll()
@method PromotionCouponCustomer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
/
class PromotionCouponCustomerRepository extends EntityRepository
{
/**
@return PromotionCouponCustomer[] Returns an array of PromotionCouponCustomer objects
/

### `findByCustomerAndPromotion`

- **Parameters**: `Customer $customer, Promotion $promotion`
- **Description**: @return PromotionCouponCustomer[] Returns an array of PromotionCouponCustomer objects
/

