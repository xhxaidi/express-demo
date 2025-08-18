const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./a.txt", "utf8");
const second = readFileSync("./b.txt", "utf8");

writeFileSync("./result-sync.txt", `${first}\n${second}`, "utf8");
