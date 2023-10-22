const { Pool } = require('pg');

const pool = new Pool({
    host: 'fetch_code_db_user:Oj6DW08bLBjjnOBXTBamc7VXaSUA23cr@dpg-ckqbb7g5vl2c73ei35k0-a/fetch_code_db',
    user: 'fetch_code_db_user',
    password: 'Oj6DW08bLBjjnOBXTBamc7VXaSUA23cr',
    database: 'fetch_code_db',
    port: '5432',
    max: 50,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
    ssl: {
        rejectUnauthorized: false
    }
}); 

module.exports = pool;