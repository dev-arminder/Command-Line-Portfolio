#!/usr/bin/env node
const log = console.log;

const chalk = require("chalk");
const chalkDim = chalk.italic;
const boldRed = chalk.bold.red;
const bgBlue = chalk.bgBlue;
const chalkGrey = chalk.grey;
const githubBgColor = chalk.bgHex("#6cc644");
const githubColor = chalk.hex("#6cc644");
const linkedInBgColor = chalk.bgHex("#00a0dc");
const linkedInColor = chalk.hex("#00a0dc");

const init = require("./utils/init");

const socialMedia = {
  github: "https://github.com/dev-arminder",
  linkedIn: "https://www.linkedin.com/in/arminder-singh-2b341a1a0/"
};

(() => {
  init();

  log(`
${bgBlue(" About ")} ${boldRed("Arminder Singh")} ${chalkGrey(
    "a.k.a dev-arminder"
  )}`);
  log(`
${chalkDim(
  "Humanity First Frontend Engineer with Proven Experience with Dovelp, a UK-based startup that assists businesses and individuals in creating and maintaining the best online home for their businesses. Capable of learning from senior developers while working with and assisting junior developers."
)}
`);

  log(`${bgBlue(" Let's Be Friend ")}`);

  log(`
  ${githubBgColor(" Github ")}${githubColor(` ${socialMedia.github} `)}
`);
  log(
    `${linkedInBgColor(" LinkedIn ")}${linkedInColor(
      ` ${socialMedia.linkedIn} `
    )}
  `
  );
})();
