# fidry_alice_data_fixtures.yaml

**Path**: `config\packages\test_cached\fidry_alice_data_fixtures.yaml`

## Summary
# Summary

This is a test environment configuration file for the Fidry Alice Data Fixtures bundle. It disables database purging (`no_purge` mode) during test execution, meaning existing data will not be automatically cleared when loading fixtures, which is useful for cached test scenarios where the database state should persist across multiple test runs.

