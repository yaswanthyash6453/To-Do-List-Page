const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('frontend'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
