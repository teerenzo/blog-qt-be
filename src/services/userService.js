const { User } = require("../database/models");

export const register = async (data) => {
  try {
    const newUser = await User.create(data);
    if (!newUser) {
      throw new Error("Something went wrong");
    }
    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const login = async (data) => {
  try {
    const user = await User.findOne({ where: { email: data.email } });
    if (!user) {
      throw new Error("Wrong credentials");
    }
    return user;
  } catch (error) {
    throw error;
  }
};
