const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    users: async (parent, args) => {
      return User.find();
    },
  },
  Mutation: {},
};

module.exports = resolvers;
