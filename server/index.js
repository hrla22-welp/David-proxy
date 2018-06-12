const express = require('express');
const parser = require('body-parser');
const path = require('path');
const PORT = 4000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../static')));

app.listen(PORT, () => {
    console.log('Server is listening on port:', PORT);
})