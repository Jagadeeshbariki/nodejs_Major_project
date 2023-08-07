const express = require("express");
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

// using of assets like css, js, images

app.use(express.static('./assets'));


// using layouts

app.use(expressLayouts);

// extracting the style and script links from sub page into the layout

app.set('layout extractSyles', true);
app.set('layout extractScript', true);

// using the routers

app.set('view engine', 'ejs');
app.set('views', './views');

// app.get('/', (req,res)=>{
//     res.end("it is working")
// })
app.use('/', require('./routes'));
app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running the server: ${err}`);
    }

    else{
        console.log(`The server is running on ${port}`);
    }
});
