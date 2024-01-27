import { Timestamp } from "bson";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		profilePicture: {
			type: String,
			default:
				"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw06L9hLqVlVreNs9O-DYUeZ&ust=1706089977038000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNj29sqe84MDFQAAAAAdAAAAABAD",
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
