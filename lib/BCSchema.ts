"use client";

import * as z from "zod";

export const BCSchema = z.object({
  sizes: z.array(
    z.string({
      required_error: "Please select a size",
    })
  ),
  paper: z.array(
    z.string({
      required_error: "Please select a paper",
    })
  ),
  colors: z.array(
    z.string({
      required_error: "Please select a color",
    })
  ),
  orientation: z.array(
    z.string({
      required_error: "Please select an orientation",
    })
  ),
  quality: z.array(
    z.number({
      required_error: "Please select a quality",
    })
  ),
  rounded: z.array(
    z.string({
      required_error: "Please select a corner style",
    })
  ),
});
