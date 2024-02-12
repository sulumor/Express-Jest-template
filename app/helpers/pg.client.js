import pg from "pg";

const client = new pg.Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
});

export default client;
