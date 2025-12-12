# CampaignCollectionProvider.php

**Path**: `src\TalonOne\DataProvider\CampaignCollectionProvider.php`

## Summary
This class is an API Platform state provider that retrieves collections of Talon One marketing campaigns for a specific application. It extracts query parameters (tag, pageSize, offset, status, name) from HTTP requests and is designed to pass them to a `ListCampaign` use case to fetch filtered campaign data, though the actual implementation is currently commented out/incomplete.

## Classes
- `CampaignCollectionProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

