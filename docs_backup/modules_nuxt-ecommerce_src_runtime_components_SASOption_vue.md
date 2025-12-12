# SASOption.vue

**Path**: `modules\nuxt-ecommerce\src\runtime\components\SASOption.vue`

## Summary
This Vue component renders a clickable option card for a self-service account dashboard, displaying an icon and label that link to various account management features. It accepts a Strapi-based button configuration (`IStrapiButtonDashboard`) containing link destination, icon reference, and label text, with support for different icon font families (icons, faqs, form, usps). The component uses a `SmartLink` wrapper to create navigable dashboard options with dynamically resolved icon classes based on the icon path and selected font type.

