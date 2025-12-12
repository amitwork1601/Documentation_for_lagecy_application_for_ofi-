# llm.js

**Path**: `src\api\b2c-llm\policies\llm.js`

## Summary
# Summary

This is a Strapi authorization policy middleware that validates API requests to the b2c-llm endpoint by checking for a valid authentication token. It retrieves the expected token from the Akeneo import plugin configuration and compares it against the token provided in the request header, rejecting unauthorized requests that have a missing or mismatched token. This policy serves as a security gate to ensure only authenticated clients with the correct API secret can access LLM-related functionality.

