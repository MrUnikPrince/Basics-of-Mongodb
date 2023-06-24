const express = require('express');  // npm install express
const app = express();
const port = 8000;  // port 
const expressLayout = require('express-ejs-layouts');  // npm install express-ejs-layouts


app.use(expressLayout);
app.use(express.static('./assets'));

// extract style and script form sub pages into the layout
app.set('layout extractStyle', true);
app.set('layout extractScript', true);

// use express router
app.use('/', require('./routes'));

// setup the view engine
app.set('view engine', 'ejs');
app.set('views', './view')

// running the server in a browser
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server ${err}`);
    }
    console.log(`Server is running on port ${port}`);
})