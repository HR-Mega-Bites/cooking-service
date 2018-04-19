const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost/instructions';

const client = new pg.Client(connectionString);

client.connect();

const getRecipe = (id) => {
  client.query(`SELECT info from recipes where id = ${id}`, (err, res) => {
    if(err) {
      console.error(err);
    } else {
      console.log(res.rows[0].info);
    }
  });
  // console.log(result);
}
// getRecipe(2);
module.exports.client = client;
module.exports.getRecipe = getRecipe;
