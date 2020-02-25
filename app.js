const express = require('express');
const app = express();


app.get("/api", (req, res) => {
    res.json({
        success: 1,
        message: "This API is working."
    });
});


app.listen(3000, ()=> {
    console.log("Server is running at port 3000");
})