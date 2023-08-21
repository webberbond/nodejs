import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

//cors policy
app.use(cors())

//logs info about request
app.use(morgan('tiny'))

//converts JSON to JS object in POST, PUT, PATCH requests
app.use(express.json())

//converts form data to JS object in POST, PUT, PATCH requests
app.use(express.urlencoded({ extended: true }))

app.use((req, res) => {
    const personData = {
        name: 'Sergey',
        isInstructor: false,
    }
    console.log(req.body)
    return res.json(personData)
})

app.listen(5000, () => console.log(`Server is listening on port 5000`))
