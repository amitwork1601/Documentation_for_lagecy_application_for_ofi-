# schema.json

**Path**: `src\api\email-layout\content-types\email-layout\schema.json`

## Summary
This is a Strapi CMS schema definition for an "Email Layout" collection type that stores reusable email templates. It defines a data model with three main attributes: a required name field, localized rich-text content for the email body, and a one-to-one relationship to an email sender configuration. The schema enables internationalization (i18n) for the content field while keeping the name field non-localized, allowing the same layout template to be used across different languages.

