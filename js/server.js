let express = require('express')
let server = express()

server.get('/all', (req,res) => {
    let json = require('./list.json')
    console.log(json)
    let origins = 'http://localhost:3000/all'
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   /* res.render('index.html', {
        data: json
    })*/

    res.json(json)
})



server.listen(3000)