# Http exercises

## Curl

curl is a simple command line based HTTP client that you can use to make HTTP-requests.

Start git bash inside visual studio code and make some requests.

The -I parameter will only show headers.

Example:

```
curl www.google.se
curl -I www.google.se
curl -I academy.brunstrom.me
```

## Curl icanhazdadjoke.com

icanhazdadjoke.com is a HTTP API that returns dad jokes.

Depending on what headers you're sending the response will differ.

If you tell the server that you're **Accept** `text/plain` you will get a text response.
If you tell the server that you're **Accept** `application/json` you will get a json-response.
If you tell the server that you're **Accept** `text/html` you will get a html-response.

Try to get some different responses with the accept header.

To add a header, have a -H "headerinformation" to the curl program.

Example:

```http
curl -H "Accept: text/plain" https://icanhazdadjoke.com/
```

## Http-client in NodeJS

Use the http-module in NodeJS to do some reuqests to to icanhazdadjoke.com like in the earlier task. Specify that you want the response in `text/plain`

Use the [documentation for http.request](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_http_request_options_callback) to find out what parameters you should be using.

You'll will need to add a eventlistener to the response object (res) in the callback. This is done with

```javascript
res.on("data", function (data) {});
```

Print the data to stdout with the method process.stdout.write

> Hint: If you get stuck have a look at https://nodejs.org/en/knowledge/HTTP/clients/how-to-create-a-HTTP-request/

## Http-server in NodeJS

### 1.

Use the http-module to create a simple HTTP-server. Make the server always respond with the text "Hello world".

### 2.

Change the function that respond with "Hello world" so that if the url starts with /hello it respond with "Hello world". All other requests should respond with "Not found" and the status code 404.

You'll find the URL in the url-property on the request object thats is sent to the callback. The url is relative to the server-address.

If you call http://localhost:3000/hello the req.url will be '/hello'

You should always return something, i.e call `res.end(...)` so the server at least respond with someting, otherwise the browser will timeout after something like 10 minutes.

### 3.

The function in the previous task answer the same unrelated what HTTP-method that is used. Refactor the function so that it will respond the same way when using a GET-request. If it's not a GET method, make sure the server respond with a "Method not allowed" response and the status code 405.

The browser will always send a GET-request, to test other method you can use [Postman](https://www.postman.com/downloads/), curl or [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
