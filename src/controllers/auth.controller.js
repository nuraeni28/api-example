const {User} = require('../models');
const bcrypt = require('bcryptjs');
const { sign } = require('jsonwebtoken');


const register = async (req, res) => {
    try {
      const salt = bcrypt.genSaltSync(10);
      req.body.password = bcrypt.hashSync(req.body.password, salt);
      req.body.token = sign({ result: body.email }, 'secret');
      const {name, email, password, phone, address} = req.body;
        User.create({
            name,
            email,
            password,
            phone,
            address,
            token
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

