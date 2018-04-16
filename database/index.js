const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost/instructions';

const client = new pg.Client(connectionString);

client.connect();

module.exports = client;
