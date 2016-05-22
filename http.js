const express = require('express'); 
const path = require('path');

const app = express();
const port = 9090;

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, './view/index.html'));
});

const server = app.listen(port, function(){
	const host = server.address().address;
    const port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
