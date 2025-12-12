# cron-tasks.js

**Path**: `config\cron-tasks.js`

## Summary
This Strapi configuration file defines scheduled cron jobs for synchronizing various data sources and services. The tasks automate daily imports and syncs including Akeneo product data (reviews, blog articles, shops), B2C feed attributes, Algolia search indexes for samples and localization, running at specific times throughout the day (e.g., 5am, 6am, 7am, and multiple times for Algolia updates at 8am, 12pm, 6pm, 10pm).

