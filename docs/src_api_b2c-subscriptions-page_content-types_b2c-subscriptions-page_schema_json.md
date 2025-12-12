# schema.json

**Path**: `src\api\b2c-subscriptions-page\content-types\b2c-subscriptions-page\schema.json`

## Summary
This is a Strapi CMS schema configuration file that defines the content structure for a B2C "My Subscriptions" page (French: "Mes Abonnements"). It specifies a single-type content model with a dynamic zone architecture that supports over 40 different component types, including subscription-specific components (subscriptions-listing, subscription summary, cross-sell) and various content blocks (carousels, FAQs, hero sections, reviews). The schema includes special handling for when users have no active subscriptions through dedicated `no_subscriptions_header` and `no_content` fields, enabling a complete subscription management user experience.

