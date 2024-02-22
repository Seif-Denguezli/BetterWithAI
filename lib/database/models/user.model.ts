import { Schema, model, models } from "mongoose";

export interface IUser extends Document {}

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const User = models?.User || model("User", UserSchema);

export default User;
