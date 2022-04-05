const express = require('express');

const app = express();

app.arguments(express.json());


app.listen(3333);