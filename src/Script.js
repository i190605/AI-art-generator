const fs = require('fs');

// Read the JSON file
fs.readFile('Ai Art Generation.postman_collection (1).json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const jsonData = JSON.parse(data);
    console.log(jsonData);
});
