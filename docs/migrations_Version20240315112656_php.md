# Version20240315112656.php

**Path**: `migrations\Version20240315112656.php`

## Summary
This is a Doctrine database migration for Sylius e-commerce platform that converts legacy serialized array data (DC2TYPE:array) stored in LONGTEXT columns to JSON format. The migration identifies specific tables and columns, changes their data types from LONGTEXT to JSON, and converts the existing serialized PHP array data into JSON encoding while maintaining backward compatibility through down/postDown methods that can reverse the process.

## Classes
- `Version20240315112656`

## Function Details

### `getDescription`


### `up`

- **Parameters**: `Schema $schema`

### `down`

- **Parameters**: `Schema $schema`

### `postDown`

- **Parameters**: `Schema $schema`

### `changeTypesFromLongtextToJsonAndEncodeSerializedData`

- **Parameters**: `string $table, string $dataColumn`

### `changeTypesFromJsonToLongtext`

- **Parameters**: `string $table, string $dataColumn`

### `serializeEncodedData`

- **Parameters**: `string $table, string $dataColumn`

### `tablesAndColumnsToBeUpdated`

- **Description**: @return iterable&lt;array{string, string}&gt;
/

