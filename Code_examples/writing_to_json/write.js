// this code snippet have a function that add a new user to a json data_base

const fs = require('fs');

function writeUserToDatabase(user) {
  // Get the existing data from the database file
  let data = JSON.parse(fs.readFileSync('database.json'));

  // Add the new user to the array of users
  data.users.push(user);

  // Write the updated data to the database file
  fs.writeFileSync('database.json', JSON.stringify(data));
}

// Example usage:
writeUserToDatabase({ name: 'John', age: 30 });
writeUserToDatabase({ name: 'may', age: 30 });
writeUserToDatabase({ name: 'Jone', age: 30 });





// this code asoumes the format of the json file .... !! 