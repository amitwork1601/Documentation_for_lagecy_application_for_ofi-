# ExportCouponsCsvCommand.php

**Path**: `src\TalonOne\Command\OneShot\ExportCouponsCsvCommand.php`

## Summary
This Symfony console command exports coupon data from promotions to a CSV file for integration with the TalonOne coupon management system. It retrieves promotions marked for export from the database, processes each promotion's coupon details (including values, expiry dates, limits, and recipient information), and writes them to a CSV file in a standardized format with progress tracking for bulk operations.

## Classes
- `ExportCouponsCsvCommand`

## Function Details

### `configure`


### `execute`

- **Parameters**: `InputInterface $input, OutputInterface $output`

### `getExportFilePath`


### `createExportDirectory`


### `openExportFile`

- **Parameters**: `string $filePath`

### `addAnalytics`

- **Parameters**: `array $attributes, Promotion $promotion`

### `processPromotion`

- **Parameters**: `Promotion $promotion, $file, SymfonyStyle $io`

### `defineExpirationDate`

- **Parameters**: `Promotion $promotion, string $couponCode`
- **Description**: @throws \Exception
/

### `defineStartDate`

- **Parameters**: `Promotion $promotion, string $couponCode`

### `getCouponCode`

- **Parameters**: `Promotion $promotion`

### `formatDate`

- **Parameters**: `?\DateTimeInterface $date`

### `definedAttributes`

- **Parameters**: `Promotion $promotion, SymfonyStyle $io`

### `processAction`

- **Parameters**: `PromotionAction $action, array $attributes`

### `handlePaymentChargesDiscount`

- **Parameters**: `array $config, array $attributes`

### `handleUnitFixedDiscount`

- **Parameters**: `array $config, array $attributes`

### `handleUnitPercentageDiscount`

- **Parameters**: `array $config, array $attributes`

### `handleShippingDiscount`

- **Parameters**: `array $config, array $attributes`

### `handleOrderFixedDiscount`

- **Parameters**: `array $config, array $attributes`

### `handleOrderPercentageDiscount`

- **Parameters**: `array $config, array $attributes`

### `handleFreeProductDiscount`

- **Parameters**: `array $config, array $attributes`

