const http = require('http');
const fs = require('fs');
const axios = require('axios');

http.createServer( async (request, response) => {
    
    


    const dataaxios = await axios.get('http://randomuser.me/api/?results=5000');
    const { data: results } = dataaxios;
    
    const arrayData = results.results;
    
    const dataToFile = JSON.stringify(arrayData);
    console.log(typeof(dataToFile));
    const datasplit = dataToFile.split(",")+'\n';
    
    fs.appendFile('file.txt', datasplit, (err) => {
        if(err) throw err;
        console.log('Data has been added!');
    });
    response.end("Hello world!");
    const stream = fs.createWriteStream('file1.txt', 'utf-8');
    
    const streamRead = fs.createReadStream('file.txt', 'utf-8');
    streamRead.pipe(stream);
    
}).listen(11000);