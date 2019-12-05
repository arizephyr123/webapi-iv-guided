const server = require('./api/server.js');

server.listen(4009, () => {
  console.log('\n*** Server Running on http://localhost:4009 ***\n');
});
