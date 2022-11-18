import { appendFileSync } from 'node:fs'

import { createObjectCsvWriter } from 'csv-writer'

const csvWriter = createObjectCsvWriter({
  path: "./contact.csv",
  append: true,
  header: [
    { id: "name", title: "NAME" },
    { id: "number", title: "NUMBER" },
    { id: "email", title: "EMAIL" },
  ],
});


export class Person {
  constructor(name = '', number = '', email = '') {
    this.email = email
    this.name = name
    this.number = number
  }

  saveToCSV() {
    const content = `${this.name},${this.number},${this.email} \n`

    try {
      appendFileSync('contact.csv', content)
      console.log(`${this.name} Saved!`)
    } catch (error) {
      console.log(error)
    }
  }

  writeToCSV() {
    try {
      const { name, number, email } = this;
      csvWriter.writeRecords([{ name, number, email }]);
      console.log(`${name} Saved!`);
    } catch (err) {
      console.error(err);
    }
  }
}
