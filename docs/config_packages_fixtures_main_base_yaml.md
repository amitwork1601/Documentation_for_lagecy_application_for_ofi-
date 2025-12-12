# base.yaml

**Path**: `config\packages\fixtures\main\base.yaml`

## Summary
This is a Sylius fixtures configuration file that defines the baseline test/demo data setup for a European e-commerce application. It configures foundational elements including multiple locales (French, Italian), EUR currency, and geographical zones for France, Belgium, Luxembourg, Italy, Switzerland, and Monaco, along with additional fixtures for gateway configs, promotions, and upsells. The fixtures are prioritized to ensure proper loading order, with locale and currency data (priority 11) loaded before geographical data (priority 10), and the suite includes ORM purger and logger listeners for database management during fixture loading.

