import User from "../model/userModel.js"

// posting to database
export const create = async (req, res) => {
  try {
    const userData = new User(req.body);
    const { email } = userData;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exist." })
    }
    const savedUser = await userData.save();
    res.status(200).json(savedUser)
  }
  catch (error) {
    res.status(500).json({ error: "Internal Server Error!!" })
  }
}

// get all data from DB
export const fetch = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).json({ message: "User NOT FOUND" })
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error." })
  }
}

// for updating data
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findOne({ _id: id });
    if (!userExist) {
      return res.status(404).json({ message: "User Not Found" })
    }
    const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true })
    res.status(201).json(updateUser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error." })
  }
}