# login.vue

**Path**: `apps\front-ecommerce\pages\account\login.vue`

## Summary
This is a Vue 3 login/registration page for an e-commerce application that handles customer authentication through multiple methods including traditional email/password login, email lookup, new account registration, and external OAuth providers (Google). The page manages the complete authentication flow including JWT token handling, customer store updates, tracking events for analytics, password reset functionality, and redirects authenticated users away from the login page via the 'is-anonymous' middleware.

## Function Details

### `createLoginForm`

- **Parameters**: `email: string`

### `createRegisterForm`

- **Parameters**: `initialData: Partial<TRegisterRequest>`

### `loadGoogleSigninButton`

- **Parameters**: `google: any`

### `resetPassword`

- **Parameters**: `email: string`

### `backToEmailLookUp`


### `decodeToken`

- **Parameters**: `token: string`

### `handleGoogleIdentityToken`

- **Parameters**: `token: string`

### `trackingOnPageView`


