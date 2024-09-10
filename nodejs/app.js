const express = require('express')
const { Pool } = require('pg')

const app = express();

const pool = new Pool({
    user: 'andresn',
    host: 'postgres',
    database: 'postgres',
    password: 'teste123',
    port: 5432
});

app.get('/', async(req, res) => {

    const result = await pool.query('SELECT name FROM people');
    const names = result.rows.map(row => row.name);

    res.send(`
        <h1>Full Cycle Rocks!</h1>
        <h1>Nomes cadastrados:</h1>
        <ul>
            ${names.map(name => `<li>${name}</li>`).join('')}
        </ul>
        `);
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})