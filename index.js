const express = require("express");
const app = express();
const port = 8000;

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
