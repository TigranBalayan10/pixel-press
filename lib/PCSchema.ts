"use client";

import * as z from "zod";

export const PCSchema = z.object({
  sizes: z.string({
    required_error: "Please select a size",
  }),
  paper: z.string({
    required_error: "Please select a paper",
  }),
  orientation: z.string({
    required_error: "Please select an orientation",
  }),
  quantity: z.string({
    required_error: "Please select a quality",
  }),
  imageFront: z
    .array(
      z.object({
        key: z.string(),
        url: z.string(),
        name: z.string(),
        size: z.number(),
      })
    )
    .nonempty({
      message: "Please upload a front image",
    }),
  imageBack: z
    .array(
      z.object({
        key: z.string(),
        url: z.string(),
        name: z.string(),
        size: z.number(),
      })
    )
    .optional(),
});
