# GetCampaignRequest.php

**Path**: `src\TalonOne\Core\ManagementApi\Request\Campaign\GetCampaignRequest.php`

## Summary
This class represents an API request to retrieve a specific campaign from the TalonOne promotion management system. It constructs a GET request to the `/v1/applications/{applicationId}/campaigns/{campaignId}` endpoint and expects the response to be deserialized into a Campaign DTO object, enabling programmatic access to campaign configuration and details within a specific application context.

## Classes
- `GetCampaignRequest`

## Function Details

### `__construct`

- **Parameters**: `private int $applicationId, private int $campaignId`

### `getUri`


### `getMethod`


### `getOutputType`


