The fetch() function is a powerful JavaScript function that allows you to make HTTP requests from the browser. Here is a brief lesson on how to use it:

To use the fetch() function, you pass it a URL as an argument and it returns a promise that resolves with a Response object. For example:

```js
fetch('https://www.example.com').then(response => {
  console.log(response);
});
```

The Response object contains the body of the response, as well as various properties such as the status code and the headers.

You can use the response.json() method to parse the body of the response as JSON:
```js
fetch('https://www.example.com').then(response => {
  return response.json();
}).then(json => {
  console.log(json);
});
```

You can also use the response.text() method to get the body of the response as a string:

```js
fetch('https://www.example.com').then(response => {
  return response.text();
}).then(text => {
  console.log(text);
});
```

The fetch() function also allows you to specify the HTTP method and other options such as headers and body for the request. Here is an example of making a POST request with a JSON body:

```js
fetch('https://www.example.com', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John',
    age: 30
  })
}).then(response => {
  console.log(response);
});
```