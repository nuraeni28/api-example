/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
const { sign } = require('jsonwebtoken');
const { User } = require('../models');
const { phoneNumberFormatter } = require('../helper/formatter');
const {
  getSession, isExists, sendMessage,
} = require('../../waService');
const response = require('../../response');

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
