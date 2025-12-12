# fidry_alice_data_fixtures.yaml

**Path**: `config\packages\test\fidry_alice_data_fixtures.yaml`

## Summary
This configuration file sets the default purge mode for the Fidry Alice Data Fixtures bundle in the test environment. It specifies `no_purge` as the default behavior, which prevents automatic database cleanup between fixture loads during testing, allowing tests to control data persistence explicitly rather than having the fixtures bundle automatically clear data before loading new fixtures.

