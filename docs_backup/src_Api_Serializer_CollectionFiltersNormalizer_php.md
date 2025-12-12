# CollectionFiltersNormalizer.php

**Path**: `src\Api\Serializer\CollectionFiltersNormalizer.php`

## Summary
This normalizer enhances API Platform collection responses by enriching them with metadata about the filters that were applied to the collection. It acts as a decorator around the standard collection normalizer, intercepting the normalization process to inject information about available and active query parameters/filters (such as search, pagination, or sorting filters) into the serialized output, typically following the Hydra JSON-LD specification for API documentation.

## Classes
- `CollectionFiltersNormalizer`

## Function Details

### `supportsNormalization`

- **Parameters**: `mixed $data, ?string $format = null, array $context = []`
- **Description**: Enhances the result of collection by adding the filters applied on collection.

@author Samuel ROZE &lt;samuel.roze@gmail.com&gt;
/
final class CollectionFiltersNormalizer implements NormalizerInterface, NormalizerAwareInterface
{
use HydraPrefixTrait;
private ?ContainerInterface $filterLocator;

/**
@param ContainerInterface   $filterLocator  The new filter locator or the deprecated filter collection
@param array&lt;string, mixed&gt; $defaultContext
/
public function __construct(
private readonly NormalizerInterface $collectionNormalizer,
private readonly ResourceMetadataCollectionFactoryInterface $resourceMetadataCollectionFactory,
private readonly ResourceClassResolverInterface $resourceClassResolver,
?ContainerInterface $filterLocator = null,
private readonly array $defaultContext = [],
) {
$this-&gt;filterLocator = $filterLocator;
}

/**
{@inheritdoc}
/

### `getSupportedTypes`

- **Parameters**: `$format`

### `normalize`

- **Parameters**: `mixed $object, ?string $format = null, array $context = []`
- **Description**: {@inheritdoc}
/

### `setNormalizer`

- **Parameters**: `NormalizerInterface $normalizer`
- **Description**: {@inheritdoc}
/

### `getSearch`

- **Parameters**: `string $resourceClass, array $parts, array $filters, ?Parameters $parameters, string $hydraPrefix`
- **Description**: Returns the content of the Hydra search property.

@param FilterInterface[] $filters
/

### `getFilter`

- **Parameters**: `string $filterId`
- **Description**: Gets a filter with a backward compatibility.
/

