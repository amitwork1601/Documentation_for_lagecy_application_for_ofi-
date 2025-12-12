# ApplyPriceChangeCommand.php

**Path**: `src\Console\Command\ApplyPriceChangeCommand.php`

## Summary
This Symfony console command applies scheduled price changes to draft subscription orders. It processes pending price changes that are effective within 7 days or less, updating order items with new prices for product variants across enabled channels, then recalculates affected orders using the order processor. The command exists to ensure subscription orders reflect upcoming price modifications before they are finalized.

## Classes
- `ApplyPriceChangeCommand`

## Function Details

### `configure`


### `execute`

- **Parameters**: `InputInterface $input, OutputInterface $output`

### `updateUpcomingDraftOrder`

- **Parameters**: `int $batchSize, array $variantsAssociation, bool $dryRun`
- **Description**: Applique les changements de prix sur les commandes brouillons à venir (7j ou moins).
/

### `updateProductVariantCatalog`

- **Parameters**: `array $variantsAssociation, bool $dryRun`
- **Description**: @var SubscriptionOrder $draftOrder */
$subscriptionHasBeenUpdated = false;

/** @var OrderItem $item */
foreach ($draftOrder-&gt;getItems() as $item) {
// Récupération de la config à appliquer pour le produit
if (\array_key_exists($item-&gt;getVariant()-&gt;getId(), $priceConfig)) {
$newPrice = $priceConfig[$item-&gt;getVariant()-&gt;getId()]['price'];

if ($item-&gt;getUnitPrice() !== $newPrice) {
$subscriptionHasBeenUpdated = true;
$item-&gt;setImmutable(true);
$item-&gt;setUnitPrice($newPrice);
}
}
}

// Process order
if (!$dryRun &amp;&amp; $subscriptionHasBeenUpdated) {
$this-&gt;orderProcessor-&gt;process($draftOrder);
}

if (!$dryRun &amp;&amp; $subscriptionHasBeenUpdated) {
$this-&gt;em-&gt;flush();
}

$this-&gt;io-&gt;writeln(\sprintf(' &lt;bg=green;fg=white;options=bold&gt; %ss &lt;/&gt;',
round(microtime(true) - $startHandling, 3)));

if (!$dryRun &amp;&amp; ($currentBatchSize % $batchSize) === 0) {
$this-&gt;em-&gt;clear();
}
}

$this-&gt;io-&gt;success(\sprintf('Application du changement de prix "%s" avec succès ! %s abonnement mis à jour.',
$priceChange-&gt;getLabel(), $currentBatchSize));
}
}

/**
Applique les changements de prix pour les produits du catalogue.
/

