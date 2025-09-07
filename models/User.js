import mongoose from "mongoose";

const roles = ["admin", "user"];
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user', required: true, enum: roles }
});

const User = mongoose.model("User", userSchema);

export default User;