"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "@/lib/mongoose";

import { GetTopInteractedTagsParams } from "@/lib/actions/shared.types";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");

    // Find interactions for user and group by tags

    return [
      { _id: "1", name: "tag1" },
      { _id: "2", name: "tag2" },
    ];
  } catch (error) {
    console.log("Error in getTopInteractedTags", error);
    throw error;
  }
}
