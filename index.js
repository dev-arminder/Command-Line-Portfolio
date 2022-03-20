#!/usr/bin/env node
const packJSON = require("./package.json");
const welcome = require("cli-welcome");
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

init(welcome, packJSON);

log(`
${bgBlue(" About ")} ${boldRed("Arminder Singh")} ${chalkGrey(
  "a.k.a dev-arminder"
)}`);
log(`
${chalkDim(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
)}
`);

log(`${bgBlue(" Let's Be Friend ")}`);

log(`
  ${githubBgColor(" Github ")}${githubColor(` ${socialMedia.github} `)}
`);
log(
  `${linkedInBgColor(" LinkedIn ")}${linkedInColor(` ${socialMedia.linkedIn} `)}
  `
);
