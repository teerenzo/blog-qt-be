import { register, login } from "../services/userService.js";
import generateToken from "../utils/generateToken.js";
import { comparePassword, hashPassword } from "../utils/hashpassword.js";

export const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const newUser = await register({
      firstName,
      lastName,
      email,
      password: hashPassword(password),
    });
    delete newUser.dataValues.password;
    delete newUser.dataValues.createdAt;
    delete newUser.dataValues.updatedAt;
    res.status(201).json({
      message: "User registered successfully",
      data: {
        token: generateToken(newUser.id),
        user: newUser,
      },
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// login

export const loginUser = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const user = await login({ email });

    if (user) {
      const isMatch = comparePassword(password, user.password);
      if (isMatch) {
        delete user.dataValues.password;

        res.status(200).json({
          token: generateToken(user.id),
          user,
        });
      } else {
        res.status(401).json({
          message: "wrong credentials",
        });
      }
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
