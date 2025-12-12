# ChangeShippingPriceConfigurationCommand.php

**Path**: `src\Console\Command\Tools\ChangeShippingPriceConfigurationCommand.php`

## Summary
This Symfony console command updates shipping price configurations for shipping methods that use the 'range_price' calculator. Specifically, it modifies pricing rules by changing the minimum range threshold from 6000 to 6400 for applicable rate ranges and sets a new validity date of '2025-05-13' for the updated configuration, persisting changes to the database via Doctrine ORM.

## Classes
- `ChangeShippingPriceConfigurationCommand`

## Function Details

### `execute`

- **Parameters**: `InputInterface $input, OutputInterface $output`

