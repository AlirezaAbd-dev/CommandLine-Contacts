import yargs from "yargs";
import chalk from "chalk";

import { addContact, listContacts, removeContact } from "./contacts.js";

yargs.scriptName(`${chalk.yellow("Contact Manager")}`);
yargs.usage(`$0 ${chalk.red("<command>")} ${chalk.green("[args]")}`);
yargs.version("1.1.0");

yargs.command({
  command: "create",
  aliases: ["c", "ct"],
  describe: `${chalk.green("[create new contact]")}`,
  builder: {
    fullname: {
      alias: "f",
      describe: "Person fullname",
      demandOption: true,
      type: "string",
    },
    phone: {
      alias: "p",
      describe: "Person phone number",
      demandOption: true,
      type: "number",
    },
    email: {
      alias: "e",
      describe: "Person email address",
      demandOption: true,
      type: "string",
    },
  },
  handler({ fullname, email, phone }) {
    addContact(fullname, phone, email);
  },
});

yargs.command({
  command: "list",
  aliases: ["l"],
  describe: `${chalk.green("[listing all contacts]")}`,
  handler() {
    listContacts();
  },
});

yargs.command({
  command: "delete",
  aliases: ["d", "dl"],
  describe: `${chalk.green("[deleting chosen contact]")}`,
  builder: {
    id: {
      describe: "contact's identifier",
      demandOption: true,
      type: "number",
    },
  },
  handler({ id }) {
    removeContact(id);
  },
});

yargs.parse();
