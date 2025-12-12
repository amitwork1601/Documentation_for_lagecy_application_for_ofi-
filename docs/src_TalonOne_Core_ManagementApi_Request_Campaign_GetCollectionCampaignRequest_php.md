# GetCollectionCampaignRequest.php

**Path**: `src\TalonOne\Core\ManagementApi\Request\Campaign\GetCollectionCampaignRequest.php`

## Summary
This class represents a GET request to retrieve a collection of campaigns for a specific application from the TalonOne Management API. It implements the management request interface to fetch campaign data from the `/v1/applications/{applicationId}/campaigns` endpoint, with support for query parameters, payload configuration, and response caching (60 second TTL) with the output mapped to a `CampaignCollection` DTO.

## Classes
- `GetCollectionCampaignRequest`

## Function Details

### `getMethod`


### `getHeaders`


### `getPayload`


### `setPayload`

- **Parameters**: `array $payload`

### `setQueryParams`

- **Parameters**: `array $queryParams`

### `getOutputType`


### `getCacheKey`


### `getUri`


### `getQueryParams`


### `getCacheTtl`


