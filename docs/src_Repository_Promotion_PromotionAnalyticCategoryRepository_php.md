# PromotionAnalyticCategoryRepository.php

**Path**: `src\Repository\Promotion\PromotionAnalyticCategoryRepository.php`

## Summary
This repository manages database queries for `PromotionAnalyticCategory` entities, which appear to categorize promotions for analytics purposes. The main custom functionality is the `findOptions()` method, which retrieves active categories sorted alphabetically, with "SERVICE CLIENT" (customer service) categories prioritized at the top of the list, likely for use in dropdown menus or selection interfaces.

## Classes
- `PromotionAnalyticCategoryRepository`

## Function Details

### `findOptions`

- **Description**: @method PromotionAnalyticCategory|null find($id, $lockMode = null, $lockVersion = null)
@method PromotionAnalyticCategory|null findOneBy(array $criteria, array $orderBy = null)
@method PromotionAnalyticCategory[]    findAll()
@method PromotionAnalyticCategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
/
class PromotionAnalyticCategoryRepository extends EntityRepository
{
/**
@return QueryBuilder Returns the query to get categories options
/

