const { loginUser } = require('../services/authService');

const loginController = async (req, res) => {
    try {
      const { username, password } = req.body;
      
      const { token } = await loginUser(username, password);
      res.json({ token });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };
  

module.exports = { loginController };
