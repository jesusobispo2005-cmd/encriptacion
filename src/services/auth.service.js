import { userModel } from '../models/user.model.js';

export async function registerService(userData) {
  const result = await userModel(userData);
  return result;
}