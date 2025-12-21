const express = require('express');
const port = process.env.PORT || 3000
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Listen on port 3000, IP defaults to 127.0.0.1
app.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
