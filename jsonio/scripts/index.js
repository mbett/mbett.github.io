
// From https://medium.com/@osiolabs/read-write-json-files-with-node-js-92d03cc82824

const fs = require('fs');

// A reusable helper function to read and parse a JSON file.
// jsonReader that will read and parse a JSON file for us. It takes
// the path to the file and a callback to receive the parsed object 
// and any errors. It will catch any errors thrown by JSON.parse for us.
//
function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err);
        }
        try {
            const object = JSON.parse(fileData);
            return cb && cb(null, object);
        } catch(err) {
            return cb && cb(err);
        }
    })
}

function jsonWriter(filePath, cb) {
  fs.writeFile('./newCustomer.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
  })
}

//Sample execution of the helper function
jsonReader('./customer.json', (err, customer) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(customer.address); // => "Infinity Loop Drive"
})
