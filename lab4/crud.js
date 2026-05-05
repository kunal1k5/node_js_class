
const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

const file = 'Data.json';

// Read users from file
function getUsers() {
    if (!fs.existsSync(file)) return [];
    return JSON.parse(fs.readFileSync(file, 'utf-8'));
}

// Write users to file
function saveUsers(users) {
    fs.writeFileSync(file, JSON.stringify(users, null, 2));
}

// Get all users
app.get('/users', (req, res) => {
    const users = getUsers();
    res.json(users);
});

// Get user by id
app.get('/users/:id', (req, res) => {
    const users = getUsers();
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.sendStatus(404);
    res.json(user);
});

// Add new user
app.post('/users', (req, res) => {
    const users = getUsers();
    const user = req.body;
    user.id = users.length ? users[users.length-1].id + 1 : 1;
    users.push(user);
    saveUsers(users);
    res.status(201).json(user);
});

// Update user (replace)
app.put('/users/:id', (req, res) => {
    const users = getUsers();
    const idx = users.findIndex(u => u.id == req.params.id);
    if (idx === -1) return res.sendStatus(404);
    users[idx] = { ...req.body, id: users[idx].id };
    saveUsers(users);
    res.json(users[idx]);
});

// Delete user
app.delete('/users/:id', (req, res) => {
    let users = getUsers();
    const idx = users.findIndex(u => u.id == req.params.id);
    if (idx === -1) return res.sendStatus(404);
    const deleted = users.splice(idx, 1)[0];
    saveUsers(users);
    res.json(deleted);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});