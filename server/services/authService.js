const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

const loginUser = (username, password) => {
  
  const user = users.find(user => user.username === username);
  
  if (!user) {
    throw new Error('Invalid username or password');
  }

  if (user.password !== password) {
    throw new Error('Invalid username or password');
  }

  const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { token };
};

module.exports = { loginUser };
