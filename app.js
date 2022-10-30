let express = require('express');
let app = express();

const port = process.env.PORT || 5000;


app.get("/", async (req,res)=>{
    res.json({
        'slackUsername' : 'Idee',
        "backend" : true,
        'age' : 21,
        'bio': "Hi, It's nice to meet you"
    })
})


app.listen(port, () => {
    console.log(`Server is running on port ${5000}`);
})