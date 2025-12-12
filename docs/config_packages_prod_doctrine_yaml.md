# doctrine.yaml

**Path**: `config\packages\prod\doctrine.yaml`

## Summary
This Symfony production environment configuration file optimizes Doctrine ORM performance by configuring caching strategies for database operations. It sets up three types of cache drivers (metadata, query, and result caching) that use PSR-6 compatible cache pools to reduce database queries and improve application performance. The configuration separates system-level caching (for ORM metadata and queries) from result caching, allowing different cache adapters to be used for each concern in the production environment.

