const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

// to add css we need these 2 lines..
const publicDir = require('path').join(__dirname, '/public');


const viewpath = path.join(__dirname, '../templates/views');
const partials = path.join(__dirname, '../templates/partials')

app.set('view Engines', 'hbs');
app.set('views', viewpath);
hbs.registerPartials(partials);

app.use(express.static(publicDir));

app.get('/weather', (req, res) => {
    res.send("hi my name is mehnaaz");
})
app.get("*", (req, res) => {
    res.send("Page not found sorry!!");
})



app.listen(3000, function() {
    console.log("server running on port 3000");
})