const express = require('express');
const authRouter = require('./routers/auth.js');
const errorHandler = require('./middleware/error-handler.js');
const app = express();

app.use('/', express.static('dist'));
app.use('/dashboard', express.static('dist'));
// app.get('/', function(req, res) {
//   res.send('Hello world');
// })
app.use('/api', authRouter);
app.use(errorHandler);



const port = 5000;
var server = app.listen(port, () => {
  console.log(`Server is up and running on port ${port}...`);
})

// In terminal:
// $ node src/server.js or $ npm run start,
// and another approach to run up automatically is
// $ npm run watch
// Use one of them to run up your server.
