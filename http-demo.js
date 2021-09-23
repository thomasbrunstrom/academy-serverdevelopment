const http = require("http");
const fs = require("fs").promises;
let images = null;

const handleHello = (req, res) => {
  const names = req.myUrl.searchParams.getAll("name");
  if (names.length) {
    res.write(`Hello ${names.join(", ")}`);
    console.log(`Hello ${names.join(", ")}`);
  } else {
    res.write("Hello world");
  }
  res.end();
};

const handlePics = async (req, res) => {
  if (!images) {
    images = await fs.readdir("./images");
  }

  const names = req.myUrl.pathname.split("/");
  res.setHeader("Content-Type", "application/json");

  if (names && names.length > 1) {
    const needle = names[2].toLowerCase();
    const newArr = images.filter((e) => e.toLowerCase().includes(needle));
    res.write(JSON.stringify(newArr));
  } else {
    res.write(JSON.stringify(images));
  }
  res.end();
};

http
  .createServer((req, res) => {
    req.myUrl = new URL(req.url, `http://${req.headers.host}`);
    if (req.myUrl.pathname === "/hello") {
      handleHello(req, res);
    } else if (req.myUrl.pathname.startsWith("/pics")) {
      handlePics(req, res);
    } else {
      res.statusCode = 401;
      res.write("Unknow file");
      res.end();
    }
  })
  .listen(4000, () => {
    console.log("Lyssnar på port 4000");
  });
