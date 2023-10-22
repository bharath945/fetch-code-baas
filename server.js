const express = require('express');
const app = express();
const aurora = require('./lib/dbResources.js');


app.get('/job-updates', async (req, res) =>{
    try {
        let queryOutput = await aurora.query('select * from jobs where active order by date desc');
        return res.status(200).send(queryOutput.rows);
    } catch(err) {
        console.log(err);
        return res.status(500).send(err);
    }
})

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})