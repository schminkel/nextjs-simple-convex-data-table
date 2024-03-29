import { v } from "convex/values";

import { Doc, Id } from "./_generated/dataModel";
import { query } from "./_generated/server";
import { mutation } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx): Promise<Doc<"data">[]> => {
    return await ctx.db.query("data").collect();
  },
});

export const updateTextById = mutation({
  args: {
    id: v.id("data"),
    text: v.string(),
  },
  handler: async (ctx, { id, text }) => {
    await ctx.db.patch(id as Id<"data">, { text: text as string });
  },
});
