# ProductExampleFactory.php

**Path**: `src\Fixture\Factory\ProductExampleFactory.php`

## Summary
This is a custom fixture factory class that extends Sylius's base ProductExampleFactory to generate sample product data for testing and development purposes. It handles the creation of complete product entities including their variants, pricing, images, attributes, taxons, and translations by orchestrating multiple factory services and repositories. The factory is specifically designed to populate an e-commerce application's database with realistic product fixtures following Sylius framework conventions.

## Classes
- `ProductExampleFactory`

## Function Details

### `configureOptions`

- **Parameters**: `OptionsResolver $resolver`
- **Description**: @var FactoryInterface */
private $productFactory;

/** @var FactoryInterface */
private $productVariantFactory;

/** @var FactoryInterface */
private $channelPricingFactory;

/** @var FactoryInterface */
private $productTaxonFactory;

/** @var ProductVariantGeneratorInterface */
private $variantGenerator;

/** @var FactoryInterface */
private $productAttributeValueFactory;

/** @var FactoryInterface */
private $productImageFactory;

/** @var ImageUploaderInterface */
private $imageUploader;

/** @var SlugGeneratorInterface */
private $slugGenerator;

/** @var RepositoryInterface */
private $taxonRepository;

/** @var RepositoryInterface */
private $productAttributeRepository;

/** @var RepositoryInterface */
private $productOptionRepository;

/** @var RepositoryInterface */
private $channelRepository;

/** @var RepositoryInterface */
private $localeRepository;

/** @var RepositoryInterface|null */
private $taxCategoryRepository;

/** @var FileLocatorInterface|null */
private $fileLocator;

/** @var \Faker\Generator */
private $faker;

/** @var OptionsResolver */
private $optionsResolver;

public function __construct(
FactoryInterface $productFactory,
FactoryInterface $productVariantFactory,
FactoryInterface $channelPricing,
ProductVariantGeneratorInterface $variantGenerator,
FactoryInterface $productAttributeValueFactory,
FactoryInterface $productImageFactory,
FactoryInterface $productTaxonFactory,
ImageUploaderInterface $imageUploader,
SlugGeneratorInterface $slugGenerator,
RepositoryInterface $taxonRepository,
RepositoryInterface $productAttributeRepository,
RepositoryInterface $productOptionRepository,
RepositoryInterface $channelRepository,
RepositoryInterface $localeRepository,
?RepositoryInterface $taxCategoryRepository = null,
?FileLocatorInterface $fileLocator = null,
) {
$this-&gt;productFactory = $productFactory;
$this-&gt;productVariantFactory = $productVariantFactory;
$this-&gt;channelPricingFactory = $channelPricing;
$this-&gt;variantGenerator = $variantGenerator;
$this-&gt;productAttributeValueFactory = $productAttributeValueFactory;
$this-&gt;productImageFactory = $productImageFactory;
$this-&gt;productTaxonFactory = $productTaxonFactory;
$this-&gt;imageUploader = $imageUploader;
$this-&gt;slugGenerator = $slugGenerator;
$this-&gt;taxonRepository = $taxonRepository;
$this-&gt;productAttributeRepository = $productAttributeRepository;
$this-&gt;productOptionRepository = $productOptionRepository;
$this-&gt;channelRepository = $channelRepository;
$this-&gt;localeRepository = $localeRepository;

$this-&gt;taxCategoryRepository = $taxCategoryRepository;
if (null === $this-&gt;taxCategoryRepository) {
@trigger_error(\sprintf('Not passing a $taxCategoryRepository to %s constructor is deprecated since Sylius 1.6 and will be removed in Sylius 2.0.', self::class), E_USER_DEPRECATED);
}

$this-&gt;fileLocator = $fileLocator;

$this-&gt;faker = \Faker\Factory::create();
$this-&gt;optionsResolver = new OptionsResolver();

$this-&gt;configureOptions($this-&gt;optionsResolver);
}

/**
Options de configuration.
/

### `create`

- **Parameters**: `array $options = []`
- **Description**: Création d'un produit.
/

### `createProduct`

- **Parameters**: `array $options = []`

### `getRandomValueForProductAttribute`

- **Parameters**: `ProductAttributeInterface $productAttribute`
- **Description**: @var ProductInterface $product */
$product = $this-&gt;productFactory-&gt;createNew();
$product-&gt;setVariantSelectionMethod($options['variant_selection_method']);
$product-&gt;setCode($options['code']);
$product-&gt;setEnabled($options['enabled']);
$product-&gt;setMainTaxon($options['main_taxon']);
$product-&gt;setCreatedAt($this-&gt;faker-&gt;dateTimeBetween('-1 week', 'now'));

$this-&gt;createTranslations($product, $options);
$this-&gt;createRelations($product, $options);
$this-&gt;createVariants($product, $options);
$this-&gt;createImages($product, $options);
$this-&gt;createProductTaxons($product, $options);

return $product;
}

private function updateChannelPricings(ProductVariantInterface $productVariant, int $price): void
{
foreach ($this-&gt;channelRepository-&gt;findAll() as $channel) {
/** @var ChannelPricingInterface $channelPricing */
$channelPricing = $this-&gt;channelPricingFactory-&gt;createNew();
$channelPricing-&gt;setChannelCode($channel-&gt;getCode());
$channelPricing-&gt;setPrice($price);

$productVariant-&gt;addChannelPricing($channelPricing);
}
}

private function createTranslations(ProductInterface $product, array $options): void
{
foreach ($this-&gt;getLocales() as $localeCode) {
$product-&gt;setCurrentLocale($localeCode);
$product-&gt;setFallbackLocale($localeCode);

$product-&gt;setName($options['name']);
$product-&gt;setSlug($options['slug']);
$product-&gt;setShortDescription($options['short_description']);
$product-&gt;setDescription($options['description']);
}
}

private function createRelations(ProductInterface $product, array $options): void
{
foreach ($options['channels'] as $channel) {
$product-&gt;addChannel($channel);
}

foreach ($options['product_options'] as $option) {
$product-&gt;addOption($option);
}

foreach ($options['product_attributes'] as $attribute) {
$product-&gt;addAttribute($attribute);
}
}

private function createVariants(ProductInterface $product, array $options): void
{
try {
$this-&gt;variantGenerator-&gt;generate($product);
} catch (\InvalidArgumentException $exception) {
/** @var ProductVariantInterface $productVariant */
$productVariant = $this-&gt;productVariantFactory-&gt;createNew();

$product-&gt;addVariant($productVariant);
}

$i = 0;
/** @var ProductVariantInterface $productVariant */
foreach ($product-&gt;getVariants() as $productVariant) {
$productVariant-&gt;setName($this-&gt;generateProductVariantName($productVariant));
$productVariant-&gt;setStock($options['stock']);
$productVariant-&gt;setCode(\sprintf('%s-variant-%d', $options['code'], $i));
$productVariant-&gt;setOnHand($this-&gt;faker-&gt;randomNumber(1));
$productVariant-&gt;setShippingRequired($options['shipping_required']);
if (isset($options['tax_category']) &amp;&amp; $options['tax_category'] instanceof TaxCategoryInterface) {
$productVariant-&gt;setTaxCategory($options['tax_category']);
}
$productVariant-&gt;setTracked($options['tracked']);

foreach ($this-&gt;channelRepository-&gt;findAll() as $channel) {
$this-&gt;createChannelPricings($productVariant, $channel-&gt;getCode());
}

++$i;
}
}

private function createChannelPricings(ProductVariantInterface $productVariant, string $channelCode): void
{
/** @var ChannelPricingInterface $channelPricing */
$channelPricing = $this-&gt;channelPricingFactory-&gt;createNew();
$channelPricing-&gt;setChannelCode($channelCode);
$channelPricing-&gt;setPrice($this-&gt;faker-&gt;numberBetween(100, 10000));

$productVariant-&gt;addChannelPricing($channelPricing);
}

private function createImages(ProductInterface $product, array $options): void
{
foreach ($options['images'] as $image) {
if (!\array_key_exists('path', $image)) {
@trigger_error(
'It is deprecated since Sylius 1.3 to pass indexed array as an image definition. ' .
'Please use associative array with "path" and "type" keys instead.',
E_USER_DEPRECATED
);

$imagePath = array_shift($image);
$imageType = array_pop($image);
} else {
$imagePath = $image['path'];
$imageType = $image['type'] ?? null;
}

$imagePath = null === $this-&gt;fileLocator ? $imagePath : $this-&gt;fileLocator-&gt;locate($imagePath);
$uploadedImage = new UploadedFile($imagePath, basename($imagePath));

/** @var ImageInterface $productImage */
$productImage = $this-&gt;productImageFactory-&gt;createNew();
$productImage-&gt;setFile($uploadedImage);
$productImage-&gt;setType($imageType);

$this-&gt;imageUploader-&gt;upload($productImage);

$product-&gt;addImage($productImage);
}
}

private function createProductTaxons(ProductInterface $product, array $options): void
{
foreach ($options['taxons'] as $taxon) {
/** @var ProductTaxonInterface $productTaxon */
$productTaxon = $this-&gt;productTaxonFactory-&gt;createNew();
$productTaxon-&gt;setProduct($product);
$productTaxon-&gt;setTaxon($taxon);

$product-&gt;addProductTaxon($productTaxon);
}
}

private function getLocales(): iterable
{
/** @var LocaleInterface[] $locales */
$locales = $this-&gt;localeRepository-&gt;findAll();
foreach ($locales as $locale) {
yield $locale-&gt;getCode();
}
}

private function setAttributeValues(array $productAttributes): array
{
$productAttributesValues = [];
foreach ($productAttributes as $code =&gt; $value) {
if ($value instanceof ProductAttributeValueInterface) {
$code = $value-&gt;getAttribute()-&gt;getCode();
$value = $value-&gt;getValue();
}

/** @var ProductAttributeInterface|null $productAttribute */
$productAttribute = $this-&gt;productAttributeRepository-&gt;findOneBy(['code' =&gt; $code]);

Assert::notNull($productAttribute, \sprintf('Can not find product attribute with code: "%s"', $code));

if (!$productAttribute-&gt;isTranslatable()) {
$productAttributesValues[] = $this-&gt;configureProductAttributeValue($productAttribute, null, $value);

continue;
}

foreach ($this-&gt;getLocales() as $localeCode) {
$productAttributesValues[] = $this-&gt;configureProductAttributeValue($productAttribute, $localeCode, $value);
}
}

return $productAttributesValues;
}

private function configureProductAttributeValue(ProductAttributeInterface $productAttribute, ?string $localeCode, $value): ProductAttributeValueInterface
{
/** @var ProductAttributeValueInterface $productAttributeValue */
$productAttributeValue = $this-&gt;productAttributeValueFactory-&gt;createNew();
$productAttributeValue-&gt;setAttribute($productAttribute);

if (null !== $value &amp;&amp; \in_array($productAttribute-&gt;getStorageType(), [ProductAttributeValueInterface::STORAGE_DATE, ProductAttributeValueInterface::STORAGE_DATETIME], true)) {
$value = new \DateTime($value);
}

$productAttributeValue-&gt;setValue($value ?? $this-&gt;getRandomValueForProductAttribute($productAttribute));
$productAttributeValue-&gt;setLocaleCode($localeCode);

return $productAttributeValue;
}

/**
@throws \BadMethodCallException
/

### `generateProductVariantName`

- **Parameters**: `ProductVariantInterface $variant`

