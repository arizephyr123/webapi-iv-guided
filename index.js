// needs to be earlies place in app as possible
require('dotenv').config();

const server = require('./api/server.js');

//reading an environment variable - not writing
// use port provided by environment (heroku) || 4009
const port = process.env.PORT || 4009;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
