const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/users', (req, res) => {

    const users = [
        { id: 1, ime: "Niko", prezime: "Miljanić" },
        { id: 2, ime: "Ema", prezime: "Sinković" },
        { id: 3, ime: "Lucija", prezime: "Špada" }
    ];

    res.json(users)
})

app.listen(PORT, error => {
    if (error) {
        console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
    } else {
        console.log(`Server je pokrenut na http://localhost:${PORT}`);
    }
});

