const {User} = require('../models');

const register = async (req, res) => {
    try {
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

