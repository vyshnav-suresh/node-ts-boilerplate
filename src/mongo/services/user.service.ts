import { IUser, User } from "../model/userModel";

export const createUser = async (data: Partial<IUser>) => {
  const user = new User(data);
  return await user.save();
};

export const getAllUsers = async () => {
  return await User.find();
};

export const getUserById = async (id: string) => {
  return await User.findById(id);
};

export const updateUser = async (id: string, data: Partial<IUser>) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

export const deleteUser = async (id: string) => {
  return await User.findByIdAndDelete(id);
};
