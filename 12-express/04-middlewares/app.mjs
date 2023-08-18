import express from 'express'
import morgan from 'morgan'

const app = express()

//logs info about request
app.use(morgan('tiny'))

//converts JSON to JS object in POST, PUT, PATCH requests
app.use(express.json())

//converts form data to JS object in POST, PUT, PATCH requests
app.use(express.urlencoded({ extended: true }))

app.use((req, res) => {
    console.log(req.body)
    return res.send('This is express server')
})

app.listen(5000, () => console.log(`Server is listening on port 5000`))
