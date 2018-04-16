const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/instructions';

const client = new pg.Client(connectionString);

client.connect();


model.exports = client;
