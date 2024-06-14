const http = require('http');  // import the http module to create a server
const fs = require('fs');      // import the fs module to read the files from file system
const path = require('path');   // module for the handling file path independent from the os

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {    // created the http server
    res.statusCode = 200;                            // Set the status code to 200 (OK).
    res.setHeader('Content-Type', 'text/html');

    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {   // Read the 'index.html' file.
        if (err) {                                         // If there is an error reading the file,
            res.statusCode = 500;                    // set the status code to 500 (Internal Server Error),
            res.end('Error loading page');
            return;
        }
        res.end(data);   // If no error, send the contents of 'index.html' as the response
    });
});

server.listen(port, hostname, () => {                        // Start the server and listen on the specified port and hostname.
    console.log(`Server running at http://${hostname}:${port}/`);
});




