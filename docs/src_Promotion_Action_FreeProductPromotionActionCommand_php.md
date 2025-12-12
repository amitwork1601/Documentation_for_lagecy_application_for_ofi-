# FreeProductPromotionActionCommand.php

**Path**: `src\Promotion\Action\FreeProductPromotionActionCommand.php`

## Summary
This class implements a promotion action command that applies free product discounts to orders in an e-commerce system. It manages the lifecycle of free product promotions by removing outdated free items, creating or retrieving adjustment records for the discount, and applying them to orders while handling promotion analytics tracking. The command integrates with Sylius commerce framework to modify order items and their quantities when promotional rules trigger free product offerings.

## Classes
- `FreeProductPromotionActionCommand`

## Function Details

### `cleanOldFreeProduct`

- **Parameters**: `OrderInterface $order, array $configuration`

