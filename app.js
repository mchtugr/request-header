const express = require('express');
const bodyParser = require('body-parser');

const whoami = require('./routes/api/whoami')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.use('/api/whoami', whoami);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port: ${port}`) );