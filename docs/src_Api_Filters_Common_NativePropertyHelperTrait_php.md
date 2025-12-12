# NativePropertyHelperTrait.php

**Path**: `src\Api\Filters\Common\NativePropertyHelperTrait.php`

## Summary
This trait provides helper methods for handling native SQL queries with nested property relationships in API Platform filters. It extends the standard PropertyHelperTrait to support joining related entities in native queries by traversing association mappings, generating appropriate SQL JOIN clauses based on Doctrine ORM metadata for both owning and inverse sides of relationships. This enables filtering and querying on nested/related properties when using native SQL queries instead of Doctrine's DQL.

## Function Details

### `addNativeJoinsForNestedProperty`

- **Parameters**: `string $property, string $rootAlias, NativeQuery $nativeQuery, QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass`
- **Description**: @throws MappingException
/

