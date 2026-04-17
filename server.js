const express = require('express');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const app = express();
const PORT = 3000;
const DATA_FILE = process.env.DATA_FILE || path.join(__dirname, 'ramais.json');

app.use(express.json());
app.use(express.static(__dirname));

app.get('/api/setores', (req, res) => {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    res.json(JSON.parse(data));
});

app.put('/api/setores', (req, res) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(req.body, null, 2), 'utf8');
    res.json({ ok: true });
});

const UPDATE_TOKEN = process.env.UPDATE_TOKEN || 'aztec2024';

app.post('/api/update', (req, res) => {
    if (req.headers['x-token'] !== UPDATE_TOKEN) {
        return res.status(401).json({ error: 'Não autorizado' });
    }
    try {
        const log = execSync('git pull', { cwd: __dirname }).toString();
        res.json({ ok: true, log });
        setTimeout(() => process.exit(0), 500); // container restart: unless-stopped reinicia
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.listen(PORT, () => {
    console.log(`Ramais rodando em http://localhost:${PORT}`);
});
