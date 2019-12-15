const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');


app.use(express.static(path.join(__dirname + '/build')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require('./routes/api-routes')(app);


// * `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.
app.get('*', function (req, res) {
    // res.send(path.join(__dirname + '/build/index.html')); <- will not work, MUST BE SEND FILE
    res.sendFile(path.join(__dirname + '/build/index.html'));
});


mongoose.connect("mongodb://localhost/googlebooks", { useFindAndModify: false });

const PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
    console.log('server started on port', PORT);
});

