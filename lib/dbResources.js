const { Pool } = require('pg');

const pool = new Pool({
    host: 'spark-flyer-6841.8nk.cockroachlabs.cloud',
    user: 'fetch',
    password: 'lH9IrOnkEdc8UAqe1YAzwg',
    database: 'fetch_code_db',
    port: '26257',
    max: 50,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
    ssl: {
        rejectUnauthorized: false
    }
}); 

module.exports = pool;