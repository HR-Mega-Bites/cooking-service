const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/instructions';

const client = new pg.Client(connectionString);

client.connect();
const query = client.query(
  'CREATE TABLE recipes(id SERIAL PRIMARY KEY, info JSON NOT NULL)'
);
query.on('end', () => {client.end(); });

model.exports = client;
