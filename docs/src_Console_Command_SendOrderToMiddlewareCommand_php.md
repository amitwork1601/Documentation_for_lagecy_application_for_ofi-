# SendOrderToMiddlewareCommand.php

**Path**: `src\Console\Command\SendOrderToMiddlewareCommand.php`

## Summary
This Symfony console command continuously monitors and sends validated orders to a middleware system via Google PubSub. It runs for approximately one hour, periodically querying the order repository for orders that need to be transmitted, then uses the `NotifyValidOrderToMiddlewareService` to publish their token values to the messaging queue with a configurable delay between notifications.

## Classes
- `SendOrderToMiddlewareCommand`

## Function Details

### `configure`


### `execute`

- **Parameters**: `InputInterface $input, OutputInterface $output`

