const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost/instructions';

const client = new pg.Client(connectionString);

client.connect();

const getRecipe = (id, value) => {
  client.query(`SELECT info from recipes where id = ${id}`, (err, res) => {
    if(err) {
      console.error(err);
    } else {
      var result = res.rows[0].info;
      value.end(JSON.stringify(result));
    }
  });
  // console.log(result);
}
// getRecipe(2);
module.exports.client = client;
module.exports.getRecipe = getRecipe;
