import { Schema, model, connect } from "mongoose";
import { User } from "./user.interface";

const userSchema = new Schema<User>({
  userId: { type: String },
  userName: { type: String },
  password: { type: String },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: { type: [String], required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  orders: {
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
});

export const UserModel = model<User>("User", userSchema);
