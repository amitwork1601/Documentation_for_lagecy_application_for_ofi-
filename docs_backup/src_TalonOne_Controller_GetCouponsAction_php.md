# GetCouponsAction.php

**Path**: `src\TalonOne\Controller\GetCouponsAction.php`

## Summary
This Symfony controller action retrieves and enriches coupon data for a specific customer by fetching their coupons from TalonOne (a promotion management system) and augmenting each coupon with its associated campaign name and description. It validates the customer ID, fetches the customer's coupons via the TalonOne API, retrieves all campaigns, and maps campaign metadata back to the coupons before returning the enriched collection.

## Classes
- `GetCouponsAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

### `getCampaignsData`


