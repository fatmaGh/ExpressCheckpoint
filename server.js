let express = require('express')
let app = express()
let port = process.env.PORT || 7000
let path = require('path')

const Logger = (req,res,next) => 
{
        let date = new Date()
        let day = date.getDay()
        let hour = date.getHours()
        console.log(day) 
        console.log(hour) 
        if (hour < 9 || hour > 16 || day > 5 || day < 1) {
                res.render('error')
        }
                next();
}

app.use(Logger)

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => 
{
        res.render('index', {title: 'Home'}) 
})

app.get('/contact', (req, res) => 
{
        res.render('contact', {title: 'Contact Us'}) 
})

app.get('/services', (req, res) => 
{
        res.render('services', {title: 'Our Services'}) 
})

app.listen(port, (err)=>
{
    err ? console.log(err) : console.log(`Server Running on port ${port}`)
})