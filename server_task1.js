import express  from 'express';
const app = express;
import fs from 'fs';
import http from 'http';
const PORT= process.env.PORT || 5000
const server = http.createServer((req,res)=>{
    res.writeHead(200,"ok",{'content-type':'text/html'})



if (req.url==='/'){
    fs.readFile('./views/home.html',(error,data)=>{
        if(error) throw error;
        res.end(data);
    });
}
else if (req.url==='/about'){
    fs.readFile('./views/about.html',(error,data)=>{
        if(error) throw error;
        res.end(data);
    });
}
else{
    fs.readFile('./views/contact.html',(error,data)=>{
        if(error) throw error;
        res.end(data);
    });
}
})
server.listen(PORT,()=>{
    console.log('server is running at localhost:5000')
})
