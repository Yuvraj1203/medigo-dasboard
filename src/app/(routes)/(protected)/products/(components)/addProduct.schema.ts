import z from "zod";

export const addProductSchema = z.object({
  name: z.string().min(1, { message: "Product name is required" }),
  generic_name: z.string(),
  brand: z.string(),
  category_id: z.string(),
  requires_prescription: z.boolean(),
  description: z.string(),
  manufacturer: z.string(),
  medicine_type: z.string(),
  image_url: z.array(z.string()),
  is_active: z.boolean(),
});

export type AddProductSchemaType = z.infer<typeof addProductSchema>;
