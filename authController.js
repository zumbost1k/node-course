const { validationResult } = require('express-validator');
const Role = require('./models/Role.js');
const User = require('./models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret } = require('./config.js');

const generateAccesToken = (id, roles) => {
  //this is information which will be store in token
  const payload = { id, roles };
  // 2 secret key for decrypt jwt 3 lifetime of token
  return jwt.sign(payload, secret, { expiresIn: '24h' });
};

class authController {
  async registration(req, res) {
    try {
      //get all appeared errors
      const errors = validationResult(req);
      //if errors not empty return error
      if (!errors.isEmpty()) {
        res.status(400).json({ message: 'Registration error' });
      }
      const { username, password } = req.body;
      //database name existence check
      const candidat = await User.findOne({ username });
      console.log('this is an username', username);
      //if this name already exist, send an error
      if (candidat) {
        res.status(400).json({ message: 'that name is already taken.' });
      }
      //hashing password
      const hashPassword = bcrypt.hashSync(password, 7);
      //get Role from roles DB
      const userRole = await Role.findOne({ value: 'USER' });
      //creating a new user by schema
      const user = new User({
        username,
        password: hashPassword,
        roles: [userRole.value],
      });
      //save created user in DB
      await user.save();
      return res.json({ message: 'user has been created' });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: 'Registration error' });
    }
  }
  async login(req, res) {
    try {
      const { username, password } = req.body;
      //database name existence check
      const user = await User.findOne({ username });
      if (!user) {
        res.status(400).json({ message: 'user with this login doesnt exist' });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        res.status(400).json({ message: 'password doesnt match' });
      }
      const token = generateAccesToken(user._id, user.roles);
      return res.json({ token });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: 'login error' });
    }
  }
  async getUser(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {}
  }
}

module.exports = new authController();
