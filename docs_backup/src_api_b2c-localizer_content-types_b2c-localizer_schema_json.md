# schema.json

**Path**: `src\api\b2c-localizer\content-types\b2c-localizer\schema.json`

## Summary
This is a Strapi CMS schema definition for a B2C localization management system that orchestrates content import, translation, and search indexing workflows. It defines a single-type content structure with configurable components for importing data from external sources (like Akeneo PIM), managing translations through various APIs, and syncing with Algolia search. The schema includes operational controls like locking mechanisms, feature flags (enable/disable Algolia, Akeneo import), and action triggers (reRun, clean, translate) to manage localization pipeline execution.

