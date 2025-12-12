# GetCampaign.php

**Path**: `src\TalonOne\Domain\UseCase\GetCampaign.php`

## Summary
This class implements a use case for retrieving a specific campaign from the TalonOne promotion/loyalty platform's Management API. It constructs a request using the builder pattern with application and campaign IDs, executes it through the management client, and handles both API errors and technical exceptions by wrapping them in domain-specific exception types before returning the Campaign DTO.

## Classes
- `GetCampaign`

## Function Details

### `execute`

- **Parameters**: `int $applicationId, int $campaignId`

