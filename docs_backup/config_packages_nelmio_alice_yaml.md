# nelmio_alice.yaml

**Path**: `config\packages\nelmio_alice.yaml`

## Summary
This configuration file sets up Nelmio Alice (a fixtures generation library) for Symfony's dev and test environments by blacklisting specific PHP functions that could produce non-deterministic or potentially unsafe results during fixture generation. The blacklist prevents functions like `current`, `shuffle`, `date`, `time`, `file`, and hashing functions from being used in fixture definitions to ensure reproducible and secure test data creation.

