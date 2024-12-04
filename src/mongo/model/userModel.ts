import mongoose, { Schema, Document } from "mongoose";

/**
 * Interface to model the User schema
 */
export interface IUser extends Document {
  name: string;
  email: string;
  password?: string; // Optional field
  role: string; // e.g., "admin", "user"
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Mongoose Schema for User
 */
const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Add encryption for security
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

/**
 * Mongoose Model for User
 */
export const User = mongoose.model<IUser>("User", UserSchema);
