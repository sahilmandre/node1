const express = require('express')
var bodyParser = require('body-parser')

const fs = require('fs');


const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', function (req, res) {

    let username = req.body.username;
    fs.writeFile('username.txt', username, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.send('Username: ${username}');
        return res.end();
    });
});

app.get('/users', (req, res) => {
//   res.render('users')
    if (data=== null) {
        console.log('no data')
        res.send("no data")
    }
    
    try {  
        var data = fs.readFileSync('username.txt', 'utf8');
        console.log(data.toString());
        // username.push(chunk);
        res.send(data);
    
    
    } catch(e) {
        console.log('Error:', e.stack);
    };
    
   
    
})

app.listen(port, () => console.log(`Example app listening on port port!`))
