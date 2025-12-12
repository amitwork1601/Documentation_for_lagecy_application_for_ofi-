# ActivityFactory.php

**Path**: `src\Factory\ActivityFactory.php`

## Summary
The `ActivityFactory` class creates `Activity` entities that log user actions within the application for audit trail purposes. It captures comprehensive context about each activity including the action type, details, user information (with support for user impersonation detection), IP address, and security firewall context from the current HTTP request. This factory serves as a centralized way to generate standardized activity records with full blame/audit information before persisting them to track who did what and when in the system.

## Classes
- `ActivityFactory`

## Function Details

### `create`

- **Parameters**: `ActivityAction $action, array $details`

### `getUsername`

- **Parameters**: `UserInterface $user`

### `getTokenUser`


### `getImpersonatorUser`


