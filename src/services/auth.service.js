import  userModel  from '../models/user.model.js';

export async function registerService(userData) {
  const user = await userModel();
  return user.find({});
}