const {User} = require('../models');
const bcrypt = require('bcryptjs');


const register = async (req, res) => {
    try {
      const salt = bcrypt.genSaltSync(10);
      req.body.password = bcrypt.hashSync(req.body.password, salt);
      const {name, email, password, phone, address} = req.body;
        User.create({
            name,
            email,
            password,
            phone,
            address
          });
          return res.status(201).json({
            status: 'Success',
            message: 'Successful Register',
          });
    }
    catch(err){
        return res.status(500).json({
            status: 'Failed',
            message: 'Failed register',
          });
    }
   
}

module.exports = {register}

