/**
 * Utilities for data processing.
 */

class DataProcessor {
    process(data) {
        return data;
    }
}

function helperFunction() {
    console.log("helping");
}

const arrowFunc = () => {
    return true;
}

// Strapi route definition example
module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/data',
            handler: 'Data.find',
        }
    ]
}
