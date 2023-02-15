let http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end("Hello Tegar");
}).listen(8000);

console.log('Server running at http://localhost:8000/');

// let dataMahasiswa = ['tegar','penemuan','anis','ujang','febi'];
// console.log(dataMahasiswa);
// dataMahasiswa.push('Sulaiman');
// console.log(dataMahasiswa);
// dataMahasiswa.pop();
// console.log(dataMahasiswa);
// dataMahasiswa[1] = "Tegar Penemuan";
// console.log(dataMahasiswa);
