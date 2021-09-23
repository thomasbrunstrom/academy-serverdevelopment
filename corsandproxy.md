# Cors and proxy exercises

## Create a new expressjs project

Create a new expressjs project, you can call it github-users.

```console
npm init -y
npm install express axios cors --save
```

## Get places from academy.brunstrom.me

### 1 Fetch

The endpoint http://academy.brunstom.me/places.json returns data as JSON, create a endpoint/route in your project eg `app.get("/places")` that Proxies the response from places.json and returns it with `res.send()`. Make sure it have the correct headers for the kind of data it respond with. If the endpoint respond with anything other then 200 you need to handle that.

Use axios to fetch the data. You have the [documentation for axios here](https://github.com/axios/axios)

The endpoint http://academy.brunstrom.me/slowplaces.json is really slow, so what you want to do is fetch the data and cache it.

Your endpoint should be something like `app.get("/places2/")`.

Create a data type fit to save the response from slowplaces.json and cache it. When another request to your endpoint/route is done, it should be ⚡-fast.

## Nobel prizes

The endpoint http://academy.brunstrom.me/prizes returns nobel prize winners. Create a endpoint/route in your project that fetches the data and send it as a response. Eg `app.get("/prizes", (req, res))`.

Make sure to cache the prizes since the file is quite big.

Next step is to add a search param for the `/prizes` endpoint, so if a user requests your api with `/prizes/[year]` your should respond with only data from that year.

## Get users from github

We can fetch information about users from github in JSON-format. The endpoint is https://api.github.com/users/[user]

Create a endpoint/route in your api to get user information. eg `app.get("/git/:user", (req, res))` and respond with the data about that user.

Create a good data type (object) to store fetch data about each user that gets requested so we don't have to call the github-api if we allready fetched that user.

Explore what other endpoints you could call for a user and add endpoints to your project.

## Ok, now what?

Explore express middlewares and check out how you could add handlebars template engine and create a website besides your api. Let me know if you get here and I'll give you some more advice on the architectual setup.
