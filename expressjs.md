# Express js

## Create your first expressjs application

Open a new folder inside visual studio code and open the terminal.

Inside the terminal run `npm init` and answer the questions how you see fit (pressing only enter is ok)

Add express to your application with `npm install --save express nodemon`

Create a new file inside the folder named server.js.

Import expressjs as following

```javascript
const express = require("express");
const app = express();

app.all("/", (req, res) => {
  res.send("Hello world");
});
//Add routes

app.listen(3000, () => {
  console.log(`Server is now listening on port ${3000}`);
});
```

Configurate your package.json script section and add "serve" : "nodemon server.js"

Then you can start your server with `npm run serve` inside the terminal. Nodemon will watch for file-changes in your project so we don't have to restart the server after each file change.

## Add a route that returns a random number

Refactor your code from the first task and add a route `/number` that resonds with a random number.

So when calling http://localhost:3000/number you should get a number as a response.

Does it work? If not, why?

> hint! Since we have app.all earlier it thrumps our other route, express will look up the routes in the same order they're added.

## Add a route that returns a string

Add two new routes that respond to GET requests on the route `/test1` and `/test2`

Use `res.send()` to send "Academy" from one of the routes and `<html><body><h1>Academy</h1></body></html>` from the other one.

Test both of them from a browser, try to use `res.end()` instead of `res.send()`, what differense does it make?

## Add a route that returns a object

Add another endpoint that responds with an object when we're calling the endpoint `/book`.

Create a new object that represents a book. Define some properties on the object, for example title, author and year. Use `res.send()` to send the object as response.

How does it look in the browser? What headers does express send back?

Add another endpoint `/books` that returns a array with a couple of book-objects like earlier in the task. Send the response with `res.send()` and check the response in a browser again. Does it change anything from the `/book` response?

## Use query parameters

Without express we needed to fetch the querystring manually when we got a request. With express we will have access to the query parameters with the query object that is a property on the request object. So in short, query parameters is accessable with `req.query`

Add a new endpoint that listens to GET requests on the endpoint `/hello`. If the query parameter `name` is set, return the string "hello <name>".

Example:

http://localhost:3000/hello?name=Zaphod

In browser: Hello Zaphod

If there is no query parameter, respond with the text "Hello sunshine, hope you´re doing well!"

Try to add so we can add multiple names to the route, for example:

http://localhost:3000/hello?name=Zaphod&name=Trillian&name=Slartibartfast

What happends to the query parameter? can you make it so all the names will be greeted with the text "Hello Zaphod\nHello Trillian\nHello Slartibartfast"?

## Is it monday or friday?

Create a endpoint, for example: `/weekday` that if it is monday it will respond with "Oooh noooez, it`s monday" and if it's friday respond with "Oh yeah, it´s friday baby".

Add a url-parameter example `/weekday/:weekday` that responds with different text depending on what day the user adds to the path/endpoint.

Example:

http://localhost:3000/weekday/friday responds with "Oh yeah, it´s friday baby"

http://localhost:3000/weekday/monday responds with "Ooooh noooez, it´s monday".

## Get the images

Create a folder inside your expressjs project that is named images.

Copy the images from earlier exercises with images of cities into the static folder.

Tell expressjs to serve static files from the images folder with the help of express.static. You can find documentation on the following link: https://expressjs.com/en/starter/static-files.html

## Get the users

Since you have a json-file ready with persons from a earlier exercise, copy that file into the same directory as the express project.

Create a GET endpoint `/users/` that returns the content of the file as a json response.

Make sure that you don't have to read the file from disk every time a request to `/users` is made. There are serveral ways to solve this, think about a solution and ask the theacher if you get stuck or want to reflect on your solution.

## Get the users again

Add another endpoint `/users/:name` that takes an argument :name that you use to filter the users data. Respond with a JSON-array that only contains the names that matches the :name parameter.

## Add to the users

Create a new POST endpoint `/users` that can recieve a new user. So if a user of your API calls `/users` with the POST method and the BODY contains a name and email you'll add it to your users data.

Example:

```console
POST /users HTTP/1.1
Host: localhost:3000
User-Agent: curl/7.55.1
Accept: */*

name=Ford Prefect&email=ford@prefect.com
```

### Bonus: Add with JSON

Add the possibility that if the user defines the Content-Type: application/json the endpoint reads the JSON body instead of using post data.

> Hint: look at the express.json() middleware.

```javascript
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.post("/", (req, res) => {
  console.log(req.body);
});
```
