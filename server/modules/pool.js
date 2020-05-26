const pg = require('pg');
const url = require('url');
let config = {};
const pool = require('../modules/pool.js');

//use this with the "Heroku code" when a pool is needed:
//var pool = require('../modules/pool.js');

/*
const Pool = pg.Pool;
const config = {
  database: 'react_student_list',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};
*/

if (process.env.DATABASE_URL) {
  // Heroku gives a url, not a connection object
  // https://github.com/brianc/node-pg-pool
  let params = url.parse(process.env.DATABASE_URL);
  let auth = params.auth.split(':');

  config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true, // heroku requires ssl to be true
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  };

} else {
  // only change the things on the right side of the ||
  config = {
    user: process.env.PG_USER || null, //env var: PGUSER
    password: process.env.DATABASE_SECRET || null, //env var: PGPASSWORD
    host: process.env.DATABASE_SERVER || 'localhost', // Server hosting the postgres database
    port: process.env.DATABASE_PORT || 5432, //env var: PGPORT
    database: process.env.DATABASE_NAME || 'react-student-list', //env var: PGDATABASE or the name of your database (e.g. database: process.env.DATABASE_NAME || 'koala_holla',)
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  };
}

/*
pool.on('connect', (client) => {
  console.log('pool.js/pg connected');
});

pool.on('error', (err, client) =>
{
  console.log("Unexpected error on idle pg client @pool.js ", err);
});

module.exports = pool;
*/

module.exports = new pg.Pool(config);
