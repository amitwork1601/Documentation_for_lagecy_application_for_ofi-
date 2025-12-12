# ExportCsvPromotionCouponsAction.php

**Path**: `src\Api\Controller\PromotionCoupon\ExportCsvPromotionCouponsAction.php`

## Summary
This controller action exports active promotion coupons to a CSV file for a given promotion. It retrieves a promotion by its code from the request, fetches all active coupons associated with that promotion, and streams them as a CSV download containing coupon details like code, usage limits, expiration dates, and reusability settings. The purpose is to provide administrators with a way to export and analyze coupon data for promotional campaigns.

## Classes
- `ExportCsvPromotionCouponsAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

