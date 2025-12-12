# SearchFilter.php

**Path**: `src\Api\Filters\SearchFilter.php`

## Summary
The `SearchFilter` class is an API Platform filter that extends search functionality to support both Doctrine ORM and native SQL queries for filtering API resources. It implements the `SearchFilterInterface` and combines standard search filtering capabilities with native database query support, allowing API consumers to search and filter entities using various strategies (exact match, partial match, etc.) across different property types including associations and embedded fields.

## Classes
- `SearchFilter`

## Function Details

### `getIriConverter`


### `getPropertyAccessor`


### `filterProperty`

- **Parameters**: `string $property, mixed $value, QueryBuilder $queryBuilder, QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, ?Operation $operation = null, array $context = []`

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`

### `addWhereByStrategy`

- **Parameters**: `string $strategy, QueryBuilder $queryBuilder, QueryNameGeneratorInterface $queryNameGenerator, string $alias, string $field, mixed $values, bool $caseSensitive`
- **Description**: @var ClassMetadata $metadata */
$metadata = $this-&gt;getNestedMetadata($resourceClass, $associations);

if ($metadata-&gt;hasField($field)) {
if ('id' === $field) {
$values = array_map([$this, 'getIdFromValue'], $values);
}

if (!$this-&gt;hasValidValues($values, $this-&gt;getDoctrineFieldType($property, $resourceClass))) {
$this-&gt;logger-&gt;notice('Invalid filter ignored', [
'exception' =&gt; new InvalidArgumentException(\sprintf('Values for field "%s" are not valid according to the doctrine type.', $field)),
]);

return;
}

$this-&gt;addNativeWhereByStrategy(
$strategy,
$nativeQuery,
$queryNameGenerator,
$alias,
$metadata-&gt;getColumnName($field),
$values,
$caseSensitive
);

return;
}

// metadata doesn't have the field, nor an association on the field
if (!$metadata-&gt;hasAssociation($field)) {
return;
}

// association, let's fetch the entity (or reference to it) if we can so we can make sure we get its orm id
$associationResourceClass = $metadata-&gt;getAssociationTargetClass($field);
$associationMetadata = $this-&gt;getClassMetadata($associationResourceClass);
$associationFieldIdentifier = $associationMetadata-&gt;getIdentifierFieldNames()[0];
$doctrineTypeField = $this-&gt;getDoctrineFieldType($associationFieldIdentifier, $associationResourceClass);

$values = array_map(function ($value) use ($associationFieldIdentifier, $doctrineTypeField) {
if (is_numeric($value)) {
return $value;
}
try {
$item = $this-&gt;getIriConverter()-&gt;getResourceFromIri($value, ['fetch_data' =&gt; false]);

return $this-&gt;propertyAccessor-&gt;getValue($item, $associationFieldIdentifier);
} catch (InvalidArgumentException) {
/*
Can we do better? This is not the ApiResource the call was made on,
so we don't get any kind of api metadata for it without (a lot of?) work elsewhere...
Let's just pretend it's always the ORM id for now.
/
if (!$this-&gt;hasValidValues([$value], $doctrineTypeField)) {
$this-&gt;logger-&gt;notice('Invalid filter ignored', [
'exception' =&gt; new InvalidArgumentException(\sprintf('Values for field "%s" are not valid according to the doctrine type.', $associationFieldIdentifier)),
]);

return null;
}

return $value;
}
}, $values);

$expected = \count($values);
$values = array_filter($values, static fn ($value) =&gt; null !== $value);
if ($expected &gt; \count($values)) {
/*
Shouldn't this actually fail harder?
/
$this-&gt;logger-&gt;notice('Invalid filter ignored', [
'exception' =&gt; new InvalidArgumentException(\sprintf('Values for field "%s" are not valid according to the doctrine type.', $field)),
]);

return;
}

$associationAlias = $alias;
$associationField = $field;
if ($metadata-&gt;isCollectionValuedAssociation($associationField) || $metadata-&gt;isAssociationInverseSide($field)) {
}

$this-&gt;addNativeWhereByStrategy(
$strategy,
$nativeQuery,
$queryNameGenerator,
$associationAlias,
$associationField,
$values,
$caseSensitive
);
}

protected function addNativeWhereByStrategy(string $strategy, NativeQuery $nativeQuery, QueryNameGeneratorInterface $queryNameGenerator, string $alias, string $field, mixed $values, bool $caseSensitive): void
{
if (!\is_array($values)) {
$values = [$values];
}

$wrapCase = $this-&gt;createWrapCase($caseSensitive);
$valueParameter = ':' . $queryNameGenerator-&gt;generateParameterName($field);
$aliasedField = \sprintf('%s.%s', $alias, $field);

if (!$strategy || self::STRATEGY_EXACT === $strategy) {
if (1 === \count($values)) {
$nativeQuery-&gt;andWhere([
'EQ',
$aliasedField,
$valueParameter,
$values[0],
]);

return;
}

$nativeQuery-&gt;andWhere([
'IN',
$aliasedField,
$valueParameter,
$values,
]);

return;
}
if (self::STRATEGY_PARTIAL === $strategy) {
$criteria = [];
foreach ($values as $value) {
$criteria[] = [
'LIKE',
$aliasedField,
$valueParameter,
'%' . $value . '%',
];
}

if (\count($criteria) &gt; 0) {
$nativeQuery-&gt;andWhere(1 === \count($criteria) ? $criteria[0] : ['OR', $criteria]);
}

return;
}

throw new InvalidArgumentException(\sprintf('strategy %s is not yet supported.', $strategy));
}

/**
Adds where clause according to the strategy.

@throws InvalidArgumentException If strategy does not exist
/

### `createWrapCase`

- **Parameters**: `bool $caseSensitive`
- **Description**: Creates a function that will wrap a Doctrine expression according to the
specified case sensitivity.

For example, "o.name" will get wrapped into "LOWER(o.name)" when $caseSensitive
is false.
/

### `getType`

- **Parameters**: `string $doctrineType`

