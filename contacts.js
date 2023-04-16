import fs from "fs";
import chalk from "chalk";

export const addContact = (fullname, phone, email) => {
  const contacts = loadContacts();

  const duplicateContact = contacts.find(
    (contact) => contact.fullname === fullname
  );

  if (duplicateContact) {
    console.log(chalk.red("Error: This contact already exist!"));
    return;
  }

  contacts.push({ id: contacts.length, fullname, phone, email });

  saveContacts(contacts);
};

export const listContacts = () => {
  const contacts = loadContacts();
  if (contacts.length > 0) {
    console.log(chalk.yellowBright("Your contacts: \n"));
    console.table(contacts);
  } else {
    console.log(chalk.red("You don't have any contact!"));
  }
};

const loadContacts = () => {
  try {
    return JSON.parse(fs.readFileSync("contacts.json"));
  } catch (ex) {
    console.log(ex);
    return [];
  }
};

const saveContacts = (contacts) => {
  fs.writeFile("contacts.json", JSON.stringify(contacts), (err) => {
    if (err) console.log(chalk.red(err));
    console.log(chalk.green("Contact Saved."));
  });
};
