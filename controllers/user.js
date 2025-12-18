// const User = require('../models/user');
import User from '../models/user.js';

// export const getUsers = async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// };
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    next(err); // ✅
  }
};


// export const createUser = async (req, res) => {
//   const user = new User(req.body);
//   const saved = await user.save();
//   res.status(201).json(saved);
// };
export const createUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

// UPDATE a user
// export const updateUser = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       id,
//       req.body,
//       { new: true } // returns updated document
//     );
//     if (!updatedUser) {
//       return res.status(404).send('User not found');
//     }
//     res.json(updatedUser);
//   } catch (err) {
//     res.status(500).send('Server error');
//   }
// };
export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedUser) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }

    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
};


// DELETE a user
// export const deleteUser = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedUser = await User.findByIdAndDelete(id);
//     if (!deletedUser) {
//       return res.status(404).send('User not found');
//     }
//     res.send(`User with id ${id} deleted`);
//   } catch (err) {
//     res.status(500).send('Server error');
//   }
// };
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }

    res.json({ message: `User ${id} deleted` });
  } catch (err) {
    next(err);
  }
};
