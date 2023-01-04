const { User } = require('../models');


const getAllUser = async (req, res) => {
  try {
    const user = await User.findAll();
    return res.status(200).json({
      status: 'Success',
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
};



module.exports = {
  getAllUser,
};
