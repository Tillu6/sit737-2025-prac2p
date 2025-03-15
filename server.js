const express = require('express');
const app = express();
const port = 3000;

// To serve static files from 'public' directory
app.use(express.static('public'));

//To listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
