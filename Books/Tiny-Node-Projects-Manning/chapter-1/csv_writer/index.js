import { createInterface } from 'node:readline'
import { Person } from './model/Person.js'

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
})

const readLineAsync = message => {
  return new Promise(resolve => {
    readline.question(message, answer => {
      resolve(answer)
    });
  });
}

const startApp = async () => {
  const person = new Person()
  person.name = await readLineAsync('Contact Name: ')
  person.number = await readLineAsync('Contact Number: ')
  person.email = await readLineAsync('Contact Email: ')
  person.saveToCSV()
  const response = await readLineAsync('Continue? [y to continue]: ')
  if (String(response).toLocaleLowerCase() === 'y') await startApp()
  else readline.close()
}

startApp()