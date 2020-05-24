const pg = require('pg');
const Pool = pg.Pool;
const config = {
  database: 'react_student_list',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

const pool = new Pool(config);

pool.on('connect', (client) => {
  console.log('pool.js/pg connected');
});

pool.on('error', (err, client) =>
{
  console.log("Unexpected error on idle pg client @pool.js ", err);
});

module.exports = pool;
