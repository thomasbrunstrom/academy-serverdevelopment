const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const fs = require("fs").promises;

app.use(cors());

let log = [];
let cache = {};
const fileName = "cache.json";

/**
 * Function to save cache to a file
 * Could be a problem if we get alot of traffic to our api.
 */
const saveCache = async () => {
  await fs.writeFile(fileName, JSON.stringify(cache));
};

/**
 * When server starts, read cached from json
 */
(async () => {
  let tcache = await fs.readFile(fileName, "utf8");
  cache = JSON.parse(tcache);
})();

/**
 * Simple middleware to log out the current timestamp
 */
app.use((req, res, next) => {
  console.log(new Date().toLocaleTimeString());
  next();
});

/**
 * Multipurpose endpoint that checks both querystring and
 * params for "from", "to" and "amount"
 */
app.get("/convert/:from/:to/:amount", async (req, res) => {
  //Spread both req.params and req.query to qp object.
  const qp = { ...req.params, ...req.query };
  if (qp?.from && qp?.to && qp?.amount) {
    try {
      //Create a string to be used as a key for our cache
      const cachePath = `${qp.from}:${qp.to}`;
      let data = cache[cachePath];
      if (!data) {
        //We don't have the data cached, fetch from external api.
        const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${qp.from}/${qp.to}.json`;
        const aReq = await axios.get(url);
        data = aReq.data;
        cache[cachePath] = data;
        saveCache();
      }

      const converted = data[qp.to] * parseFloat(qp.amount);
      const result = {
        converted: converted,
        fromCurrency: qp.from,
        toCurrency: qp.to,
        exchangeRate: data[qp.to],
        amount: qp.amount,
      };
      res.json(result);
      log.unshift({ ...result, redo: `http://localhost:3000${req.url}` });
      log = log.splice(0, 5);
    } catch (error) {
      console.log(error);
      res.sendStatus(500).send("Not ok");
    }
  } else {
    console.log("Fel fel fel");
    res.sendStatus(500).send("Not ok");
  }
});

app.get("/log", (req, res) => {
  res.send(log);
});

app.listen(3000, () => {
  console.log("Server running");
});
