# lifecycles.js

**Path**: `src\api\mobile-contact-form\content-types\mobile-contact-form\lifecycles.js`

## Summary
This code implements Strapi lifecycle hooks for the mobile contact form content type that automatically syncs published contact form data to Firestore. When a contact form entry is created or updated and has a `publishedAt` status, it formats mobile images, removes internal metadata fields (`createdBy`, `updatedBy`), and saves the sanitized document to a locale-specific Firestore collection using the pattern `content-{country}-{locale}`.

