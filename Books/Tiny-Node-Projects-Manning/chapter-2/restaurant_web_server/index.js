import express from 'express'
import menuItems from "./data/menuItems.js"
import workingHours from "./data/workingHours.js"

const port = 3000
const app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { name: "What's Fare is Fair" })
})
app.get('/menu', (req, res) => {
    res.render('menu', { menuItems })
})
app.get('/hours', (req, res) => {
    const days = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
    ]
    res.render('hours', { workingHours, days })
})

app.listen(port, () => {
    console.log(`Web server listening at http://localhost:${port}`)
})
