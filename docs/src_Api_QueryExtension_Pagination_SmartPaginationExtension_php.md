# SmartPaginationExtension.php

**Path**: `src\Api\QueryExtension\Pagination\SmartPaginationExtension.php`

## Summary
The `SmartPaginationExtension` class implements pagination functionality for API Platform's Doctrine ORM query collections. It extends the default pagination behavior by configuring and applying pagination parameters (page number, items per page, enabled/disabled state) to QueryBuilder-based API queries, while also supporting native SQL queries through the `ResultCollectionExtensionInterface`. This extension integrates with API Platform's query extension system to automatically paginate collection responses using a custom `SmartPaginator` implementation.

## Classes
- `SmartPaginationExtension`

## Function Details

### `supportsResult`

- **Parameters**: `string $resourceClass, ?Operation $operation = null, array $context = []`

### `getPagination`

- **Parameters**: `QueryBuilder $queryBuilder, ?Operation $operation, array $context`
- **Description**: @throws \ApiPlatform\Metadata\Exception\ResourceClassNotFoundException
/
public function getResult(
NativeQuery $nativeQuery,
?string $resourceClass = null,
?Operation $operation = null,
array $context = [],
): ?SmartPaginator {
if (null === $pagination = $this-&gt;getPaginationFromNativeQuery($nativeQuery, $resourceClass, $operation, $context)) {
return null;
}

[$offset, $limit] = $pagination;

return new SmartPaginator(
$nativeQuery,
$offset,
$limit,
$context['populateQuery']
);
}

/**
@throws \ApiPlatform\Metadata\Exception\ResourceClassNotFoundException
/
private function getPaginationFromNativeQuery(
NativeQuery $nativeQuery,
string $resourceClass,
?Operation $operation = null,
array $context = [],
): ?array {
$request = null;

if (null === $request) {
if (!$this-&gt;pagination-&gt;isEnabled($operation, $context)) {
return null;
}

if (($context['graphql_operation_name'] ?? false) &amp;&amp; !$this-&gt;pagination-&gt;isGraphQlEnabled($operation, $context)) {
return null;
}

$context = $this-&gt;addCountToContextFromNativeQuery($nativeQuery, $context);

return \array_slice($this-&gt;pagination-&gt;getPagination($operation, $context), 1);
}

if (null === $operation) {
$operation = $this-&gt;resourceMetadataFactory-&gt;create($resourceClass)-&gt;getOperation();
}

if (!$this-&gt;isPaginationEnabled($request, $operation)) {
return null;
}

$itemsPerPage = $operation-&gt;withPaginationItemsPerPage($this-&gt;itemsPerPage);
if ($request-&gt;attributes-&gt;getBoolean('_graphql', false)) {
$collectionArgs = $request-&gt;attributes-&gt;get('_graphql_collections_args', []);
$itemsPerPage = $collectionArgs[$resourceClass]['first'] ?? $itemsPerPage;
}

if ($operation-&gt;withPaginationClientItemsPerPage($this-&gt;clientItemsPerPage)) {
$maxItemsPerPage = $operation-&gt;getPaginationMaximumItemsPerPage() ?? $this-&gt;maximumItemPerPage;
$itemsPerPage = (int) $this-&gt;getPaginationParameter($request, $this-&gt;itemsPerPageParameterName, $itemsPerPage);
$itemsPerPage = (null !== $maxItemsPerPage &amp;&amp; $itemsPerPage &gt;= $maxItemsPerPage ? $maxItemsPerPage : $itemsPerPage);
}

if (0 &gt; $itemsPerPage) {
throw new InvalidArgumentException('Item per page parameter should not be less than 0');
}

$page = (int) $this-&gt;getPaginationParameter($request, $this-&gt;pageParameterName, 1);

if (1 &gt; $page) {
throw new InvalidArgumentException('Page should not be less than 1');
}

if (0 === $itemsPerPage &amp;&amp; 1 &lt; $page) {
throw new InvalidArgumentException('Page should not be greater than 1 if itemsPerPage is equal to 0');
}

$firstResult = ($page - 1) * $itemsPerPage;
if ($request-&gt;attributes-&gt;getBoolean('_graphql', false)) {
$collectionArgs = $request-&gt;attributes-&gt;get('_graphql_collections_args', []);
if (isset($collectionArgs[$resourceClass]['after'])) {
$after = base64_decode($collectionArgs[$resourceClass]['after'], true);
$firstResult = (int) $after;
$firstResult = false === $after ? $firstResult : ++$firstResult;
}
}

return [$firstResult, $itemsPerPage];
}

private function isPaginationEnabled(Request $request, Operation $operation): ?bool
{
$enabled = $operation-&gt;getPaginationEnabled();
$clientEnabled = $operation-&gt;getPaginationClientEnabled();

if ($clientEnabled) {
$enabled = filter_var($this-&gt;getPaginationParameter($request, $this-&gt;enabledParameterName, $enabled), FILTER_VALIDATE_BOOLEAN);
}

return $enabled;
}

private function getPaginationParameter(Request $request, string $parameterName, mixed $default = null): mixed
{
if (null !== $paginationAttribute = $request-&gt;attributes-&gt;get('_api_pagination')) {
return \array_key_exists($parameterName, $paginationAttribute) ? $paginationAttribute[$parameterName] : $default;
}

return $request-&gt;query-&gt;all()[$parameterName] ?? $default;
}

private function addCountToContextFromNativeQuery(NativeQuery $nativeQuery, array $context): array
{
if (!($context['graphql_operation_name'] ?? false)) {
return $context;
}

if (isset($context['filters']['last']) &amp;&amp; !isset($context['filters']['before'])) {
$context['count'] = (clone $nativeQuery)-&gt;count()-&gt;getSingleScalarResult();
}

return $context;
}

/**
@throws InvalidArgumentException
/

### `addCountToContext`

- **Parameters**: `QueryBuilder $queryBuilder, array $context`

