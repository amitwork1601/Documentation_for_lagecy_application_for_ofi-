# firestore.js

**Path**: `src\plugins\firestore\server\services\firestore.js`

## Summary
This module provides a Firestore service for a Strapi plugin that manages Google Cloud Firestore database operations. It handles initialization of the Firestore client (with environment-specific configuration for credentials), and exposes methods to perform CRUD operations (save, update, delete, and retrieve collections) on Firestore documents. The service includes configuration checks to enable/disable Firestore functionality and proper error handling for all database operations.

