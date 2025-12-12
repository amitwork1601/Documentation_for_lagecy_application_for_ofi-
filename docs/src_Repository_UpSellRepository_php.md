# UpSellRepository.php

**Path**: `src\Repository\UpSellRepository.php`

## Summary
This repository handles database queries for the `UpSell` entity in an e-commerce system. Its main purpose is to retrieve currently active upsell offers based on classification and typology criteria, filtering by enabled status and date ranges (ensuring the current date falls within the associated variant's start/end dates). The repository extends Sylius's EntityRepository, indicating this is part of a Sylius-based e-commerce application managing product upselling campaigns.

## Classes
- `UpSellRepository`

## Function Details

### `getCurrentUpSell`

- **Parameters**: `?string $classification, ?string $typology`
- **Description**: @return float|int|mixed|string|null

@throws \Doctrine\ORM\NonUniqueResultException
/

