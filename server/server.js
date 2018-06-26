let express = require('express');

let app = express();
const PORT = 5000;

//respond with assets
app.use(express.static('server/public'));

// allow for incoming request
app.listen(PORT, function() {
    console.log('App is running on', PORT);
});