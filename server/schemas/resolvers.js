const { AuthenticationError } = require("apollo-server-express");
const { User, Hobby } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    // hobbies: async () => {
    //   return Hobby.find();
    // },
    // hobby: async (parent, { hobbyId }) => {
    //   return Hobby.findOne({ _id: hobbyId });
    // },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("hobbies");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    // TODO: Add photo
    createUser: async (
      parent,
      { firstName, lastName, email, password, city, age, description }
    ) => {
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password,
        city,
        age,
        //  gender,
        description,
      });

      const token = await signToken(newUser);

      return { newUser, token };


    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    
    createHobby: async (parent, { hobbyName, hobbyAbout }) => {
      return Hobby.create({ hobbyName, hobbyAbout });
    },
    // TODO: addHobby, addFriend mutations for adding hobbies and friends to user key arrays
    addHobby: async (parent, { userId, hobbyId }, context) => {
      try {
        console.log(userId, "test 1");
        if (userId) {
          console.log(userId, "test 2");
          return User.findOneAndUpdate(
            { _id: userId },
            { $push: { hobbies: hobbyId } },
            { new: true }
          ).populate("hobbies");
          // console.log(hobbyId, userId);
          // return updatedUser;
        }
      } catch (error) {
        throw error;
      }

      // TODO: add authentication here
    },
    addFriend: async (parent, { userId, friendId }, context) => {
      try {
        if (userId) {
          return User.findOneAndUpdate(
            { _id: userId },
            { $push: { friends: friendId } },
            { new: true }
          ).populate("friends");
        }
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = resolvers;
