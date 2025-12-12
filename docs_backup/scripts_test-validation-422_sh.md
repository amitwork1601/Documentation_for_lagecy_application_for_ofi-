# test-validation-422.sh

**Path**: `scripts\test-validation-422.sh`

## Summary
This bash script is an automated testing tool that validates API error handling by verifying that validation errors return HTTP status code 422 (Unprocessable Entity). It performs three specific test cases against an order address update endpoint: testing for missing shipping addresses, incomplete address data (missing required fields), and invalid email formats, confirming that each validation failure correctly returns a 422 status code instead of other error codes.

