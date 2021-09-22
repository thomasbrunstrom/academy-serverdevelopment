// const fs = require("fs").promises;
// const { constants } = require("fs");
// const { existsSync } = require("fs");

// fs.readdir("./images/").then(async (data) => {
//   const unknownFiles = [];
//   data.forEach(async (e) => {
//     //const stats = await fs.stat("./testar");
//     try {
//       const exist = await fs.access("./images", constants.F_OK);
//       console.log(exist);
//     } catch (err) {
//       console.log("fel i filen");
//     }
//     // const tmpName = e.split(".")[0];
//     // const tmpName2 = tmpName.split("-");
//     // const folderName = tmpName2[1];
//     // const d = `${__dirname}/images/${e}`;
//     // const data = await fs.stat(d);
//     // if (data.isFile()) {
//     //   if (folderName) {
//     //     const toFolder = `./images/${folderName}`;
//     //     if (!existsSync(toFolder)) {
//     //       await fs.mkdir(toFolder);
//     //     }
//     //     //Kopiera filen
//     //     await fs.copyFile(`./images/${e}`, `${toFolder}/${e}`);
//     //   }
//     //   unknownFiles.push(e);
//     // }
//   });
//   //console.log(unknownFiles);
// });

const http = require("https");
http
  .request(
    "https://icanhazdadjoke.com",
    { host: "icanhazdadjoke.com", path: "/", headers: { accept: "text/plain" } },
    (res) => {
      let chunks = "";
      res.on("data", (data) => {
        chunks += data;
      });
      res.on("end", () => {
        console.log(chunks);
      });
    }
  )
  .end();
