const express = require("express")
const app = express()
const PORT = 5000


//health-check
app.get("/health-check",(req,res)=>{
    res.send("everything is ok!")   
} );

app.listen(PORT, () => {
    console.log("Server is running at", PORT);
});









