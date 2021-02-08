const port = 8000;
const express = require("express");
const server = express();
const hbs = require("express-handlebars");

server.use(express.static(__dirname + "/static"));

server.engine(
    'hbs',
    hbs({
        extname:'hbs',
        defaultLayout:'layout',
        layoutsDir:__dirname+'/views/layouts',
        partialsDir:__dirname+'/views/partials'
    })
);
server.set('View engine', 'hbs');

server.get('/', (req, res) => {
    res.status(200).render('index.hbs', {name : "Amy"})
})

server.listen(port, () => {
    console.log("The server is running on Port "+port)
    console.log("http://localhost:"+port)
});