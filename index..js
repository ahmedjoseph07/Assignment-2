// Importing Modules and assigning these to variables
const http = require('http');
const fs = require('fs');
const multer = require('multer');
const express = require('express');
const server = http.createServer(app);
const app = express();
const port = 5500;

// Request and Response handling using Node.js (express.js)
app.get('/',(req,res) =>{
    return res.send("This is Home Page");
});

app.get('/about',(req,res) =>{
    return res.send("This is About Page");
});

app.get('/contact',(req,res) =>{
    return res.send("This is Contact Page");
});

app.get('/file-write',(req,res) =>{
    fs.writeFile('demo.txt','hello world',(err) =>{
        if (err) throw err;
        res.send("File 'demo.txt' created and text 'hello world' written ");
    });
});


// Usage of Multer 

// Creating storage object
const storage = multer.diskStorage({
    destination:(req,res,cb ) =>{
        cb(null,'./uploads');
    },
    filename:(req,res,cb) =>{
        cb(null,file.originalname);
    }
});

const upload = multer({ storage: storage});

app.post('/upload', upload.single('file'),(req,res) =>{
    res.send('File created successfully');
})

//Listening to specific port and ending server
server.listen(port,()=>{
    console.log("Server is listening on port 5500");
    res.end();
});