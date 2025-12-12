# Shipup.php

**Path**: `src\Shipping\Enricher\Shipup.php`

## Summary
The `Shipup` class is a shipment enrichment service that integrates with the Shipup API to retrieve additional tracking and delivery data for shipments. It fetches order information from Shipup's external API using the shipment's order ID, validates the response, and provides enrichment data that can be used to enhance shipment tracking information within the application. The class implements the `ShipmentEnricherInterface` and handles API authentication, error logging, and determines whether enrichment data is available for a given shipment.

## Classes
- `Shipup`

## Function Details

### `hasEnrichmentData`

- **Parameters**: `Shipment $shipment`

### `getEnrichmentData`

- **Parameters**: `Shipment $shipment`

### `handleRequestException`

- **Parameters**: `RequestException $e`

