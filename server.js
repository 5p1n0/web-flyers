const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', require('./routes'));

app.listen(port, () => {
	console.log(`Server running at https://localhost:${port}`);
});
