# b2c-llm.js

**Path**: `src\api\b2c-llm\routes\b2c-llm.js`

## Summary
This code defines a Strapi router for managing B2C (Business-to-Consumer) LLM (Large Language Model) API endpoints. It extends the default Strapi CRUD router by removing the "findOne" endpoint and adding a custom unauthenticated "getLLM" route that retrieves LLM data with a specific policy guard. The router enables external applications to access LLM configurations or responses through a controlled API endpoint without requiring authentication.

## Function Details

### `customRouter`

- **Parameters**: `innerRouter, extraRoutes = []`

