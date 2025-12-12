# twig.yaml

**Path**: `config\packages\test_cached\twig.yaml`

## Summary
This configuration file enables strict variable handling in Twig templates specifically for the test environment with caching enabled. When `strict_variables` is set to true, Twig will throw exceptions when attempting to access undefined variables in templates, helping catch template errors during testing rather than silently failing in production.

