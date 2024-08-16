const express = require('express');
const bodyParser = require('body-parser');

const callRoutes = require('./routes/callRoutes');
const ivrRoutes = require('./routes/ivrRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(callRoutes);
app.use(ivrRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
