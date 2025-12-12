# ListCampaignAction.php

**Path**: `src\TalonOne\Controller\ListCampaignAction.php`

## Summary
This Symfony controller handles HTTP requests to retrieve a paginated and filtered list of campaigns from the TalonOne promotion management system. It extracts query parameters (tag, page size, offset, status, name) from the request, delegates the business logic to the `ListCampaign` use case with the application ID, and returns the campaign list response while handling any API exceptions by converting them to translated HTTP 500 errors.

## Classes
- `ListCampaignAction`

## Function Details

### `__construct`

- **Parameters**: `private readonly ListCampaign $listCampaign, private readonly TranslatorInterface $translator`

### `__invoke`

- **Parameters**: `Request $request`
- **Description**: @throws TalonOneApiException
/

