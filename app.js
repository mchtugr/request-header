const express = require('express');

const whoami = require('./routes/api/whoami')

const app = express();

app.get('/', (req, res) => {
    res.send('hi')
});

app.use('/api/whoami', whoami);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port: ${port}`) );