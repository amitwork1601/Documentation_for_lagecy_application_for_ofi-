# CustomerBasedItemExtension.php

**Path**: `src\Api\QueryExtension\Shop\Order\CustomerBasedItemExtension.php`

## Summary
This API Platform Doctrine ORM query extension filters Order entity queries to ensure shop customers can only access their own orders. It applies customer-based filtering by modifying the query builder to add a WHERE clause that matches the order's customer with the currently authenticated shop user's customer record, preventing users from accessing other customers' orders through the API.

## Classes
- `CustomerBasedItemExtension`

## Function Details

### `getResult`

- **Parameters**: `QueryBuilder $queryBuilder, ?string $resourceClass = null, ?Operation $operation = null, array $context = []`
- **Description**: Specific Order methods item extension to avoid state = 'cart' in 'shop_complete' operation.
/
public function applyToItem(
QueryBuilder $queryBuilder,
QueryNameGeneratorInterface $queryNameGenerator,
string $resourceClass,
array $identifiers,
?Operation $operation = null,
array $context = [],
): void {
if (!$this-&gt;supportsResult($resourceClass, $operation)) {
return;
}

// parenthesis need to be added to the condition
if (Request::METHOD_GET === ($context[ContextKeys::HTTP_REQUEST_METHOD_TYPE] ?? null)) {
return;
}

$rootAlias = $queryBuilder-&gt;getRootAliases()[0];
$user = $this-&gt;userContext-&gt;getUser();

if ($user instanceof ShopUserInterface &amp;&amp; \in_array('ROLE_USER', $user-&gt;getRoles(), true)) {
$queryBuilder
-&gt;andWhere(\sprintf('%s.customer = :customer', $rootAlias))
-&gt;setParameter('customer', $user-&gt;getCustomer()-&gt;getId())
;
}
}

public function supportsResult(string $resourceClass, ?Operation $operation = null, array $context = []): bool
{
return is_a($resourceClass, OrderInterface::class, true)
&amp;&amp; 'sylius_api_shop_app_order_complete_patch' === $operation-&gt;getName();
}

/** @throws \Doctrine\ORM\NonUniqueResultException */

