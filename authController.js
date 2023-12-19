const Role = require('./models/Role.js');
const User = require('./models/User.js');
const bcrypt = require('bcrypt');

class authController {
  async registration(req, res) {
    console.log(req.body);
    try {
      const { username, password } = req.body;
      //database name existence check
      const candidat = await User.findOne({ username });
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
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: 'login error' });
    }
  }
  async getUser(req, res) {
    try {
      res.json('hello postamn');
    } catch (error) {}
  }
}

module.exports = new authController()
