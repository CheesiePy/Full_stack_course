//Here are a few examples of using the fetch() function in JavaScript to make HTTP requests:

//Example 1: Make a GET request to an API

// fetch('https://github.com/CheesiePy/Full_stack_course/blob/main/Class_Lessons/lesson_30/data_base_l1.json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

//This will make a GET request to the specified API endpoint, and log the response data to the console. The response.json() method parses the response as JSON. The catch() method will be called if there is an error making the request or parsing the response.

//Example 2: Make a POST request with a message body

const data = { name: 'John', email: 'john@example.com' };

fetch('https://github.com/CheesiePy/Full_stack_course/blob/main/Class_Lessons/lesson_30/data_base_l1.json', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// //This will make a POST request to the specified API endpoint with the specified data in the message body. The Content-Type header specifies that the data is in JSON format. The JSON.stringify() function is used to convert the JavaScript object into a string that can be sent in the request.

// //Example 3: Make a GET request with query parameters

// const query = '?q=javascript';

// fetch(`https://api.example.com/endpoint${query}`)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

//This will make a GET request to the specified API endpoint with the specified query parameters. The query parameters are appended to the end of the URL and are used to provide additional information to the server. In this example, the query parameter q=javascript specifies that the server should return results related to JavaScript.