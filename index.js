const express = require('express')
var cookieParser = require('cookie-parser')
const app = express()


app.use(cookieParser())
app.use(express.json())


app.get('/login', (req,res)=> {
    console.log(req.query)
    if (req.query.name) {
        res.cookie('name', req.query.name)
        res.send(`User ${req.query.name} logged in`)
    }
    else {
        res.send("No login name provided")
    }
})

app.get('/hello', (req,res)=> {
    if (req.cookies.name) {
        res.send("Welcome " + req.cookies.name + "!")
    }
    else {
        res.send("No user logged in")
    }
})

app.get('/clear', (req,res)=> {
    res.clearCookie('name');
    res.send("Cookie Cleared")
})

const port = 3000
app.listen(port, () => console.log(`Cookie app listening at http://localhost:${port}`))