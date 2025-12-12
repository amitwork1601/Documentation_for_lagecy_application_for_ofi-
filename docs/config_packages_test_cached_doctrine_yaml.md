# doctrine.yaml

**Path**: `config\packages\test_cached\doctrine.yaml`

## Summary
This Doctrine configuration file sets up caching for Doctrine ORM in a test environment, specifically configuring metadata, query, and result cache drivers to use Symfony's cache component instead of default caching mechanisms. It defines custom cache providers that wrap Symfony cache pools (doctrine.result_cache_pool and doctrine.system_cache_pool) and wires them to Doctrine's caching layers, enabling faster database query performance and reduced database load during testing by caching query results and ORM metadata.

