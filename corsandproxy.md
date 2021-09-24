# Cors and proxy exercises

## Create a new expressjs project

Create a new expressjs project, you can call it github-users.

```console
npm init -y
npm install express axios cors --save
```

---

## Get places from academy.brunstrom.me

The endpoint http://academy.brunstrom.me/places.json returns data as JSON, create a endpoint/route in your project eg `app.get("/places")` that Proxies the response from places.json and returns it with `res.send()`. Make sure it have the correct headers for the kind of data it respond with. If the endpoint respond with anything other then 200 you need to handle that.

Use axios to fetch the data. You have the [documentation for axios here](https://github.com/axios/axios)

The endpoint http://academy.brunstrom.me/slowplaces.json is really slow, so what you want to do is fetch the data and cache it.

Your endpoint should be something like `app.get("/places2/")`.

Create a data type fit to save the response from slowplaces.json and cache it. When another request to your endpoint/route is done, it should be ⚡-fast.

---

## Nobel prizes

The endpoint http://academy.brunstrom.me/prizes returns nobel prize winners. Create a endpoint/route in your project that fetches the data and send it as a response. Eg `app.get("/prizes", (req, res))`.

Make sure to cache the prizes since the file is quite big.

Next step is to add a search param for the `/prizes` endpoint, so if a user requests your api with `/prizes/[year]` your should respond with only data from that year.

Next step is to add other ways to "filter" the data.

---

## Get users from github

We can fetch information about users from github in JSON-format. The endpoint is https://api.github.com/users/[user]

Create a endpoint/route in your api to get user information. eg `app.get("/git/:user", (req, res))` and respond with the data about that user.

Create a good data type (object) to store fetch data about each user that gets requested so we don't have to call the github-api if we allready fetched that user.

_Bonus: Explore what other endpoints you could call for a user and add endpoints to your project._

---

## REST API - Create a "phonebook" with all your friends

Create some endpoints in your project to handle all your friends.

Each friend should have the following information:
Key | Value Type
--- | ---
name | string
address | string
zipCode | number
city | string
phonenumber | number
email | string
birthday | Date
personalNote | string
userId | number

The following endpints should be available

```javascript
app.get("/friends"); //Get all friends
app.get("/friend/:userId"); //Get a friend by id
app.post("/friend"); //Add a friend, body should be json
app.put("/friend/:userId"); //Update a friend with userId, body should be json
app.delete("/friend/:userId"); //Delete a friend by id
```

> hint: Have a look at how to post/put json-data to expressjs. `app.use(express.json())` and `req.body`

Use for instance Postman to test your routes.

_Bonus: Add a persistent data store for you friends, so even if the server is restared your list of friends is still there._

_Bonus 2: Use [multer-middleware](http://expressjs.com/en/resources/middleware/multer.html) to be able to upload an image for each of your friends. When requesting information about a friend with `app.get("friend/:userId") the response should contain a link to the image as well._

---

## Create a web page that fetches data

Since your project now has a lot of endpoints we can explore, why not make a web page that let us browse different end points and fetch data from it.

Use bootstrap or create a web page from scratch that have a user interface that let's the visitor use all the endpoints you've created.

---

## Ok, now what?

Explore express middlewares and check out how you could add handlebars template engine and create a website besides your api. Let me know if you get here and I'll give you some more advice on the architectual setup.
