import User from "../models/User";
//getallusers
export const getallusers = async (req, res) => {
  let users;

  try {
    users = await User.find();
  } catch (error) {
    return console.error(error);
  }
  if (!users) {
    return res.status(404).json({ message: "no user find" });
  }

  return res.status(200).json({ users });
};


//create user
export const createuser = async (req, res) => {
  const { name, age, gender, mobileNumber } = req.body;

  let userexist;
  try {
    userexist = await User.findOne({ mobileNumber });
  } catch (error) {
    return console.log(error);
  }

  if (userexist) {
    return res.status(400).json({ message: "user is already found" });
  }

  const user = new User({
    name,
    age,
    gender,
    mobileNumber,
  });

  try {
    user.save();
  } catch (error) {
    return console.log(error);
  }

  return res.status(201).json({ message: "user created successfully" });
};

//updateuser

export const updateuser = async (req, res) => {
  const { name, age, gender, mobileNumber } = req.body;
  const personid = req.params.id;
  let person;
  try {
    person = await User.findByIdAndUpdate(personid, {
      name,
      age,
      gender,
      mobileNumber,
    });
  } catch (error) {
    return console.log(error);
  }

  if (!person) {
    return res.status(500).json({ message: "not able to update the blog" });
  }

  return res.status(200).json({ person });
};

//deleteuser

export const deleteuser = async (req, res) => {
  const personid = req.params.id;
  let person;
  try {
    person = await User.findByIdAndDelete(personid);
  } catch (error) {
    return console.log(error);
  }

  if (!person) {
    return res.status(500).json({ message: "unable to delete person" });
  }
  return res.status(200).json({ message: "person deleted successfully" });
};
