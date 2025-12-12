# PayzenClient.php

**Path**: `src\Gateway\Api\Payzen\Client\PayzenClient.php`

## Summary
The `PayzenClient` class is a factory that creates and configures Lyra payment gateway client instances for Payzen payment processing. It encapsulates the initialization of the LyraClient by setting static authentication credentials (site ID, password) and API endpoint from injected configuration, then returning a ready-to-use client instance for making payment API calls.

## Classes
- `PayzenClient`

## Function Details

### `getClient`


