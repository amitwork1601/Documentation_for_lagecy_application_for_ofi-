# PickupPointUpdaterCommand.php

**Path**: `src\PickupPoint\Command\PickupPointUpdaterCommand.php`

## Summary
This Symfony console command updates pickup point data for shipping methods (Mondial Relay, GLS By Mondial Relay, and Colissimo) by fetching current pickup point information from external gateways and synchronizing it with the local database. It processes pickup points in batches of 100, handles photo updates via a command bus, and includes optional functionality to flag subscriptions when pickup points become disabled.

## Classes
- `PickupPointUpdaterCommand`

## Function Details

### `configure`


### `execute`

- **Parameters**: `InputInterface $input, OutputInterface $output`

### `importForShippingMethod`

- **Parameters**: `ShippingMethod $shippingMethod, int $batchSize`

### `log`

- **Parameters**: `$level, $message`

