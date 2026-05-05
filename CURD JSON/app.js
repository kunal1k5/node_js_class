const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 3000;

app.use(express.json());

const file = 'data.json';

// Read data 
const readData = () => {
    return JSON.parse(fs.readFileSync(file));
}

// Write the data
const writeData = (data) => {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

//API
// CREATE Method - post use

app.post("/users", (req, res) => {
    const users = readData();
    
    const {name, email, age , city} = req.body;

    if(!name || !email){
        return res.status(400).send("Name and email are required")

    }
    //Check Duplicate Data

    const dataExist = users.find(key => key.email === email);

    if(dataExist){
        return res.status(400).send("Email is already exists");
    }

    const newUser = {
        id : users.length ? users[users.length - 1].id + 1 : 1,
        name,
        email,
        age,
        city
    };

    users.push(newUser);
    writeData(users);
    res.status(201).json(newUser);

})
    // read all the data

    app.get("/users", (req, res) => {
        const users = readData();
       // const user = users.find(key => key.id === req.params.id);

       let result = users;

       res.json(result);
   // });

});

//Display single data 

app.get("/users/:id", (req, res) => {
    const users = readData();
    const ids = users.find(key => key.id === req.params.id);
    if(!ids){
        return res.status(404).send("User not found");
    }
    res.json(ids);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});