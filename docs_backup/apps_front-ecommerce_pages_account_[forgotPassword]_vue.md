# [forgotPassword].vue

**Path**: `apps\front-ecommerce\pages\account\[forgotPassword].vue`

## Summary
This is a forgot password page component for an e-commerce application that allows users to reset their password using a token from the URL. The page accepts a reset token as a route parameter, displays a password reset form using `ForgotPasswordDataForm`, and upon successful submission through the customer store, redirects the user to the login page. It includes middleware to ensure only anonymous (non-authenticated) users can access it and integrates CMS page context for tracking and content management.

