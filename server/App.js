const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bcrypt = require("bcrypt");

//MORE INFO
//https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
//https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/

const {
  createUser,
  getPasswordHashForUser,
} = require("./controllers/controllers");

const app = express();
const port = 8081;

app.listen(port, () => console.log(`Express server listening on port ${port}.`))

// SALTING AND HASHING STUFF
const saltRounds = 10; // THIS IS A NUMBER.  DEFAULTS TO 10.
const { hash, compare } = bcrypt; // THESE CAN TAKE A CALLBACK OR RETURN A PROMISE - CHECK THEIR DOCS! https://www.npmjs.com/package/bcrypt#API

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

let inventoryArr = [
  {
    "id": 1,
    "UserID": "Blade",
    "Item Name": "apples",
    "Description": "issa fruit",
    "Quantity": 10,
  },
  {
    "id": 2,
    "UserID": "Lazer",
    "Item Name": "candles",
    "Description": "scented candles",
    "Quantity": 20,
  },
  {
    "id": 3,
    "UserID": "Taser",
    "Item Name": "chicken",
    "Description": "meat product",
    "Quantity": 5,
  },
]



// ROUTES

//this route is to grab all the inventory
app.get('/http://localhost:3000/inventory', (req, res) => {
  res.send(inventoryArr)
});

//



app.post("/create", (req, res) => {
  // make a new user account based on credentials coming in
  let { body } = req;
  let { username, pass } = body;

  // hash the password
  hash(pass, saltRounds)
    .then((hashedPass) => {
      // then insert the record into the DB and return a success message
      console.log(`What the password actually is:`, pass);
      console.log(`What gets stored in the DB:`, hashedPass);
      createUser(username, hashedPass)
        .then((data) => res.status(201).json("USER CREATED"))
        .catch((err) => res.status(500).json(err));
    })
    .catch((err) => res.status(500).json(err));
});

app.post("/http://localhost:3000/login", (req, res) => {
  // verify if a user has entered the right password for their existing account
  let { body } = req;
  let { username, pass } = body;

  getPasswordHashForUser(username)
    .then((hashedPass) => {
      // check the entered pass against the hashed one using bcrypt
      console.log(`What the user entered on login:`, pass);
      console.log(`What the db has stored for that user:`, hashedPass);
      // look up the hashed password for that user
      compare(pass, hashedPass)
        // return a succeed or fail message, depending on the password being right
        .then((isMatch) => {
          if (isMatch) res.status(202).json("PASSWORDS MATCH");
          else res.status(401).json("NO MATCH");
        })
        .catch((err) => res.status(500).json(err));
    })
    .catch((err) => res.status(500).json("Unrecognized Username"));
});
// EXPORT
module.exports = app;
