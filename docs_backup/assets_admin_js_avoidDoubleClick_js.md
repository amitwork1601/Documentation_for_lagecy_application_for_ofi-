# avoidDoubleClick.js

**Path**: `assets\admin\js\avoidDoubleClick.js`

## Summary
This code prevents duplicate form submissions and AJAX requests in an admin interface by disabling buttons during execution. It disables the event target when AJAX requests start and re-enables them when complete, and specifically handles form submissions with the `.submit-secure-one-click` class by disabling the submit button after validation passes and before form submission to prevent double-clicks.

