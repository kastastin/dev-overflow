"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";

export async function getUserById(params: any) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log("Error in getUserById", error);
    throw error;
  }
}