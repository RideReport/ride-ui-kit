#!/usr/bin/env node

const util = require("util");
const exec = util.promisify(require("child_process").exec);
const copy = require("recursive-copy");

async function main() {
  const tsc = exec("./node_modules/typescript/bin/tsc");
  const copyCss = copy("src", "dist", { filter: ["**/*.scss"] });
  await tsc;
  await copyCss;
}

main().catch((err) => {
  console.error(err);
});
