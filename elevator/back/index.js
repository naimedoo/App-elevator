const express = require('express');
const app = express();
const PORT= 3002;

app. listen(PORT, () => {
    console.log("the server is listneing on port :", PORT)
})