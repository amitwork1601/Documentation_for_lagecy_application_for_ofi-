# ShipmentEnricherInterface.php

**Path**: `src\Shipping\Enricher\ShipmentEnricherInterface.php`

## Summary
This interface defines a contract for enriching shipment entities with additional data in a shipping management system. Implementations are expected to check if enrichment data is available for a given shipment and retrieve that data as an array, enabling a flexible enrichment strategy pattern where multiple enrichers can augment shipment information from various sources.

## Function Details

### `hasEnrichmentData`

- **Parameters**: `Shipment $shipment`

### `getEnrichmentData`

- **Parameters**: `Shipment $shipment`

