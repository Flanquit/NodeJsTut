const http = require('http');

//Create Server Object
http.createServer((req, res) => {
    //Write respose 
    res.write('Hello Alpha ');
    res.end();
})
.listen(5000, () => console.log('Server running ..'));