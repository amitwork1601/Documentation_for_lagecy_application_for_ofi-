# UpSellService.php

**Path**: `src\Service\UpSelling\UpSellService.php`

## Summary
The `UpSellService` class manages up-selling functionality for e-commerce orders by determining and applying additional product recommendations based on order composition. It analyzes order items to identify the main product classification (excluding free promotional items and existing up-sells), then retrieves appropriate up-sell configurations for either cart or subscription order types. The service integrates with the promotion system and handles product variant recommendations specific to different sales channels and locales.

## Classes
- `UpSellService`

## Function Details

### `getUpSellForSubscriptionOrder`

- **Parameters**: `OrderInterface $order`

### `getUpSellForOrder`

- **Parameters**: `OrderInterface $order, string $orderTypology = UpSell::TYPE_CART`

### `isAFreeProductFromPromotions`

- **Parameters**: `OrderInterface $order, OrderItem $orderItem`
- **Description**: @var OrderItem $orderItem */
if ($this-&gt;isAFreeProductFromPromotions($order, $orderItem) || $orderItem-&gt;isUpSell()) {
continue;
}

/** @var Product $product */
$product = $orderItem-&gt;getProduct();
$classification = $product-&gt;getClassification(locale: $locale);

if (null === $mainClassification) {
$mainClassification = $classification;
}

if ($classification !== $mainClassification) {
$isMixed = true;
break;
}

if (empty($classification)) {
$mainClassification = 'default';
}
}

if ($isMixed) {
$mainClassification = 'mixed';
}

return $this-&gt;getUpsell($locale, $channel, $mainClassification, $orderTypology);
}

public function getClassificationByCode(?string $code): string
{
$classifications = $this-&gt;getClassifications();

foreach ($classifications as $classification =&gt; $key) {
if ($key === $code) {
return $classification;
}
}

return '-';
}

public function getClassifications(): array
{
// TODO : replace Akeneo call
// $classificationChoicesFromDatabase = $this-&gt;attributeRepository-&gt;findByCodes(['classification_produit']);
$classificationChoicesFromDatabase = [];
$classificationChoices = [$this-&gt;translator-&gt;trans('app.ui.mixed') =&gt; 'mixed'];

foreach ($classificationChoicesFromDatabase as $classificationChoice) {
/** @var ProductAttribute $classificationChoice */
$config = $classificationChoice-&gt;getConfiguration();

$choices = $config['choices'];

foreach ($choices as $key =&gt; $choice) {
$classificationChoices[$choice['fr_FR']] = $key;
}
}

return $classificationChoices;
}

public function getUpSellVariant(UpSell $upSell): ?ProductVariant
{
$variant = null;

if (UpSell::TYPE_CART === $upSell-&gt;getTypology()) {
/** @var UpSellVariant $upSellVariant */
$upSellVariant = $upSell-&gt;getVariants()-&gt;first();

if (!$upSellVariant) {
return null;
}

$variant = $upSellVariant-&gt;getVariant();
}

return $variant;
}

/**
Determines if the order product is a free product from a promotion applied to the order.
/

### `getUpsellVariantDiscount`

- **Parameters**: `$upSellVariant, $channel`

### `addUpSellVariant`

- **Parameters**: `string $locale, Channel $channel, UpSell $upSell`

