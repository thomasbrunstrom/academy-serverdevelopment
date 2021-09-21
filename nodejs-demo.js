const fs = require("fs").promises;
const { existsSync } = require("fs");

fs.readdir("./images/").then(async (data) => {
  const unknownFiles = [];
  data.forEach(async (e) => {
    const tmpName = e.split(".")[0];
    const tmpName2 = tmpName.split("-");
    const folderName = tmpName2[1];
    if (folderName) {
      const toFolder = `./images/${folderName}`;
      if (!existsSync(toFolder)) {
        await fs.mkdir(toFolder);
      }
      //Kopiera filen
      await fs.copyFile(`./images/${e}`, `${toFolder}/${e}`);
    }
    if (!folderName) {
      unknownFiles.push(e);
    }
  });
  console.log(unknownFiles);
});
