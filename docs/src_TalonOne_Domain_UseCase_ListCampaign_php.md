# ListCampaign.php

**Path**: `src\TalonOne\Domain\UseCase\ListCampaign.php`

## Summary
This class implements a use case for retrieving a paginated, filtered list of campaigns from the TalonOne promotion management system. It builds and executes API requests to fetch campaigns for a specific application, supporting filters by tag, status, and name, along with pagination parameters (pageSize, offset). The class serves as a domain layer orchestrator that coordinates between the request builder, management API client, and exception handling to provide campaign collection data to the application.

## Classes
- `ListCampaign`

## Function Details

### `execute`

- **Parameters**: `int $applicationId, ?string $tag, ?string $pageSize, ?string $offset, ?string $status, ?string $name`

