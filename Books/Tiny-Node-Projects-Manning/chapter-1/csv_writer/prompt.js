import prompt from 'prompt'
import { Person } from './model/Person.js'

prompt.start()
prompt.message = ''


const startApp = async () => {
    const person = new Person();
    const responses = await prompt.get([
        {
            name: "name",
            description: "Contact Name",
        },
        {
            name: "number",
            description: "Contact Number",
        },
        {
            name: "email",
            description: "Contact Email",
        },
    ]);
    Object.assign(person, responses);
    person.writeToCSV();
    const { again } = await prompt.get([
        {
            name: "again",
            description: "Continue? [y to continue]",
        },
    ]);
    if (again === "y") await startApp();
};

startApp()