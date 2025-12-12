# deploy-staging.sh

**Path**: `scripts\deploy-staging.sh`

## Summary
This bash script automates the deployment process to a staging environment by creating/updating a staging branch from a source branch. It fetches the latest changes, forcibly recreates the staging branch from a specified source branch (defaulting to 'main'), pushes it to the remote repository, and then returns to the original working branch. The script is designed to ensure the staging branch is always a clean copy of the source branch for deployment purposes.

