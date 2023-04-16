import yargs from "yargs";

import { addContact } from "./contacts.js";

yargs.command({
  command: "create",
  aliases: ["c", "ct"],
  describe: "[create new contact]",
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

yargs.parse();
