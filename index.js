// const http =require('http');
// const fs=require("fs");
 const { error } = require('console');
// const url=require("url");
const express=require("express");
const app=express();

app.get('/',(req,res)=>{
    return res.send('Hello From  Home Page');

})
app.get('/about',(req,res)=>{
    return res.send(`Hello ${req.query.name}`)
    // return res.send('Hello From  About Page'+' hey '+req.query.name+" You are "+req.query.age);
})


function myHandler(req,res){
const myServer=http.createServer((req,res)=>{
    if(req.url==="/favicon.ico")return res.end();
    const log=`${Date.now()}:${req.method}${req.url}New Req Received\n`;
    const myUrl=url.parse(req.url,true);
    console.log(myUrl);

    fs.appendFile('log.txt',log,(err,data)=>{
        switch(myUrl.pathname){
            case"/":
            if(req.method==='GET')res.end('Home Page')
            break;

            case "/about":
            const username=myUrl.query.myname
            res.end(`Hi, ${username}`);
            break;
            case"/search":
            const search=myUrl.query.search_query;
            res.end("Here are your result for "+search)
            case'/signup':
            if(req.method==='GET')res.end('This is Signup Form');
            else if(req.method==='Post'){
                res.end("Success");
            }
            default :
            res.end("404 Not Found");
        }
        
    });
   

});
}
app.listen(8000,()=>console.log('Server Started on port 8000!'))
// const myServer =http.createServer(app);
// myServer.listen(8000, () => console.log('Server Started on port 8000!'));


