const bodyParser = require('body-parser')
const people = require('./peopleRoute')
const classes = require('../routes/classesRouter')

module.exports = app => {
    app.use(bodyParser.json())

    app.use(people)

    app.use(classes)

}