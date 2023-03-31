const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;

app.get('/', (req, res) => {
    res.send('Hello there')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});