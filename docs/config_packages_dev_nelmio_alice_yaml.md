# nelmio_alice.yaml

**Path**: `config\packages\dev\nelmio_alice.yaml`

## Summary
This configuration file sets up NelmioAliceBundle for the development environment, which is a Symfony library used for generating fixture data for testing. It specifically blacklists the 'current' function from being used in fixture templates, likely to prevent conflicts or unintended behavior with PHP's built-in `current()` array function during fixture generation.

