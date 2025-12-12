# ClassNameNormalizer.php

**Path**: `src\Api\GraphQL\Normalizer\ClassNameNormalizer.php`

## Summary
This class extends API Platform's GraphQL ItemNormalizer to provide custom normalization behavior for GraphQL API responses, specifically handling the serialization of entity objects (like Address and Order) into GraphQL-compatible formats. It manages resource class resolution, property metadata extraction, and caching mechanisms to efficiently convert domain entities into their GraphQL representations while maintaining proper identifiers and resource class information through special keys like `#itemResourceClass` and `#itemIdentifiers`.

## Classes
- `ClassNameNormalizer`
- `name`
- `name`
- `name`

## Function Details

### `normalizeCollectionOfRelations`

- **Parameters**: `ApiProperty $propertyMetadata, iterable $attributeValue, string $resourceClass, ?string $format, array $context`
- **Description**: From vendor/api-platform/graphql/Serializer/ItemNormalizer.php */
final class ClassNameNormalizer extends ItemNormalizer
{
use CacheKeyTrait;

public const FORMAT = 'graphql';
public const ITEM_RESOURCE_CLASS_KEY = '#itemResourceClass';
public const ITEM_IDENTIFIERS_KEY = '#itemIdentifiers';

private array $safeCacheKeysCache = [];

public function __construct(PropertyNameCollectionFactoryInterface $propertyNameCollectionFactory, PropertyMetadataFactoryInterface $propertyMetadataFactory, IriConverterInterface $iriConverter, private readonly IdentifiersExtractorInterface $identifiersExtractor, ResourceClassResolverInterface $resourceClassResolver, ?PropertyAccessorInterface $propertyAccessor = null, ?NameConverterInterface $nameConverter = null, ?ClassMetadataFactoryInterface $classMetadataFactory = null, ?LoggerInterface $logger = null, ?ResourceMetadataCollectionFactoryInterface $resourceMetadataCollectionFactory = null, ?ResourceAccessCheckerInterface $resourceAccessChecker = null)
{
parent::__construct($propertyNameCollectionFactory, $propertyMetadataFactory, $iriConverter, $resourceClassResolver, $propertyAccessor, $nameConverter, $classMetadataFactory, $logger ?: new NullLogger(), $resourceMetadataCollectionFactory, $resourceAccessChecker);
}

public function supportsNormalization($data, $format = null, array $context = []): bool
{
if (!\is_object($data) || is_iterable($data)) {
return false;
}

$class = $this-&gt;getObjectClass($data);

return ($data instanceof Order || $data instanceof Address) &amp;&amp; self::FORMAT === $format &amp;&amp; $this-&gt;resourceClassResolver-&gt;isResourceClass($class);
}

public function normalize(mixed $object, ?string $format = null, array $context = []): float|int|bool|\ArrayObject|array|string|null
{
$resourceClass = $this-&gt;getObjectClass($object);

if ($this-&gt;getOutputClass($context)) {
$context['graphql_identifiers'] = [
self::ITEM_RESOURCE_CLASS_KEY =&gt; $context['operation']-&gt;getClass(),
self::ITEM_IDENTIFIERS_KEY =&gt; $this-&gt;identifiersExtractor-&gt;getIdentifiersFromItem($object, $context['operation'] ?? null),
];

return parent::normalize($object, $format, $context);
}

if ($this-&gt;isCacheKeySafe($context)) {
$context['cache_key'] = $this-&gt;getCacheKey($format, $context);
}

unset($context['operation_name'], $context['operation']); // Remove operation and operation_name only when cache key has been created
$data = parent::normalize($object, $format, $context);
if (!\is_array($data)) {
throw new UnexpectedValueException('Expected data to be an array.');
}

if (isset($context['graphql_identifiers'])) {
$data += $context['graphql_identifiers'];
} elseif (!($context['no_resolver_data'] ?? false)) {
$data[self::ITEM_RESOURCE_CLASS_KEY] = $resourceClass;
$data[self::ITEM_IDENTIFIERS_KEY] = $this-&gt;identifiersExtractor-&gt;getIdentifiersFromItem($object, $context['operation'] ?? null);
}

// add by Upd ---
$className = \get_class($object);
$className = explode('\\', $className);
$data['className'] = $className[\count($className) - 1];
// end ---

return $data;
}

/**
{@inheritdoc}
/

### `supportsDenormalization`

- **Parameters**: `mixed $data, string $type, ?string $format = null, array $context = []`
- **Description**: {@inheritdoc}
/

### `getAllowedAttributes`

- **Parameters**: `string|object $classOrObject, array $context, bool $attributesAsString = false`
- **Description**: {@inheritdoc}
/

### `setAttributeValue`

- **Parameters**: `$object, $attribute, $value, $format = null, array $context = []`
- **Description**: {@inheritdoc}
/

### `isCacheKeySafe`

- **Parameters**: `array $context`
- **Description**: Check if any property contains a security grants, which makes the cache key not safe,
as allowed_properties can differ for 2 instances of the same object.
/

### `getObjectClass`

- **Parameters**: `object $object`
- **Description**: Get class name of the given object.
/

### `getRealClassName`

- **Parameters**: `string $className`
- **Description**: Get the real class name of a class name that could be a proxy.
/

