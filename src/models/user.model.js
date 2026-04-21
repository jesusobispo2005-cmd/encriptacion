import { dbConfig } from '../config/db.config.js';

export default async function userModel() {
  const mongoose = await dbConfig();
  if (!mongoose) return { error: 'DB connection failed' };

  const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  });

  userSchema.index({ email: 1 }, { unique: true });

  const model = mongoose.models.user || mongoose.model('user', userSchema, 'users');
  return model;
}