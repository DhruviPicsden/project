//Imports
const express = require('express')
const path = require("path");
const bodyParser = require("body-parser")
const nodemailer = require('nodemailer')
const app = express()
const port = 8000

//body Praser 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()) 

//Static Files
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/images',express.static(__dirname + 'public/images'))
app.use('/fonts',express.static(__dirname + 'public/fonts'))

// api middleware
app.use(express.json())
app.use(express.urlencoded())

app.get('',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
})
app.get('/index',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
})


app.post('/index', async (req,res)=>{
    console.log(req.body);
    let transporter = await nodemailer.createTransport({
        service:'gmail', 
        auth : {
            user : 'renish.upgrade@gmail.com', 
            pass : 'hvltzfxgqnxrbbsj'
        },
    });
    
    let info = await transporter.sendMail({
        from : 'renish.upgrade@gmail.com',
        to : req.body.email,
        subject : 'Picsden',
        html : '<h1>Hello, I am from Picsden</h1>' 
    })
    
    console.log('message sent: %s',info.messageId);
    res.sendFile(__dirname + '/views/index.html')
})


app.get('/about',(req,res)=>{
    res.sendFile(__dirname + '/views/about.html')
})
app.get('/blog-detail',(req,res)=>{
    res.sendFile(__dirname + '/views/blog-detail.html')
})
app.get('/blog-list',(req,res)=>{
    res.sendFile(__dirname + '/views/blog-list.html')
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + '/views/contact.html')
})
app.get('/pricing',(req,res)=>{
    res.sendFile(__dirname + '/views/pricing.html')
})
app.get('/reviews',(req,res)=>{
    res.sendFile(__dirname + '/views/reviews.html')
})
app.get('/sign-in',(req,res)=>{
    res.sendFile(__dirname + '/views/sign-in.html')
})
app.get('/sign-up',(req,res)=>{
    res.sendFile(__dirname + '/views/sign-up.html')
})



//Listen Port
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    } else {
        console.log('Server is live on port no.',port);
    }
}) 