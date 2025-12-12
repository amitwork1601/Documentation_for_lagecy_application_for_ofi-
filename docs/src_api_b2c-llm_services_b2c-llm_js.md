# b2c-llm.js

**Path**: `src\api\b2c-llm\services\b2c-llm.js`

## Summary
This Strapi service extracts and aggregates LLM (Large Language Model) training data from various content types across the system. It scans all Strapi content types for those containing an `llm` attribute, retrieves their entries, and filters/formats the LLM-specific data into a unified collection, handling both single-type and collection-type content structures with repeatable and non-repeatable `llm` fields.

