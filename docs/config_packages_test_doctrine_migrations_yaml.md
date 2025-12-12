# doctrine_migrations.yaml

**Path**: `config\packages\test\doctrine_migrations.yaml`

## Summary
This configuration file overrides the default Doctrine Migrations settings specifically for the test environment in a Symfony application. It redirects database migration files to a separate `tests/migrations` directory instead of the production migrations path, allowing the test suite to use isolated database schema changes that won't affect the production migration history.

