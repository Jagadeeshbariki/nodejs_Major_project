const express = require("express");
const app = express();
const port = 4500;


app.listen(port, (err)=>{
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    else{
        console.log(`The server is running on ${port}`);
    }
});