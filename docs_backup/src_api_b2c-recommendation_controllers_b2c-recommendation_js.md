# b2c-recommendation.js

**Path**: `src\api\b2c-recommendation\controllers\b2c-recommendation.js`

## Summary
This is a Strapi controller for a B2C pet food recommendation system that determines appropriate product recommendations based on pet characteristics (weight, type). The controller fetches localized configuration data, interfaces with backend APIs across different country domains (France, Belgium, Italy, Germany), and uses weight-based parameters to calculate recommendations for dogs (chiens) and cats (chats), likely outputting product suggestions or ration sizes for pet owners.

## Function Details

### `sort_by`

- **Parameters**: `field, reverse, primer`

