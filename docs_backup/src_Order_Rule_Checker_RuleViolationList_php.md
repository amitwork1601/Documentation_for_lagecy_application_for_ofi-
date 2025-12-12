# RuleViolationList.php

**Path**: `src\Order\Rule\Checker\RuleViolationList.php`

## Summary
The `RuleViolationList` class is a collection container that stores and manages rule violations for order validation. It provides functionality to add violations, iterate over them, count them, serialize them to JSON format (including violation details like message, rule name, condition type, and configuration), and reset the list, serving as a structured way to track and report order rule validation failures.

## Classes
- `RuleViolationList`

## Function Details

### `addViolation`

- **Parameters**: `RuleViolation $violation`

### `getIterator`


### `count`


### `jsonSerialize`


### `reset`


