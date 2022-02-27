const bodyParser = require('body-parser')
const people = require('./peopleRoute')
const classes = require('../routes/classesRouter')
const level = require('../routes/levelRouter')


module.exports = app => {
    app.use(bodyParser.json())

    app.use(people)

    app.use(classes)

    app.use(level)

}