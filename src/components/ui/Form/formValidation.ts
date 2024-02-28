import { z } from 'zod';

export type TLoginFormValidationType = z.infer<typeof LoginFormZodSchema>;
export type TDonateFormValidationType = z.infer<typeof DonateFormZodSchema>;

export type TRegisterFormValidationType = z.infer<typeof RegisterFormZodSchema>;
export type TCreateClotheFormValidationType = z.infer<
  typeof CreateClothFormZodSchema
>;
export type TAddTestimonialFormValidationType = z.infer<
  typeof AddTestimonialFormZodSchema
>;

export const LoginFormZodSchema = z.object({
  email: z.string().email('Email is required'),
  password: z.string().min(8, { message: 'Password is required' }),
});

export const RegisterFormZodSchema = z.object({
  name: z.string().min(3, { message: 'name is required' }),
  email: z.string().email('Email is required'),
  password: z.string().min(8, { message: 'Password is required' }),
});

export const CreateClothFormZodSchema = z.object({
  image: z.string().url({ message: 'Invalid image URL' }),
  category: z.string().min(1, { message: 'Category is required' }),
  title: z.string().min(1, { message: 'Title is required' }),
  size: z.string().min(1, { message: 'Size is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
});
export const DonateFormZodSchema = z.object({
  amount: z.string().min(2, { message: 'Amount is required' }),
});
export const AddTestimonialFormZodSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  designation: z.string().min(2, { message: 'Designation is required' }),
  image: z.string().min(2, { message: 'Image is required' }),
  message: z.string().min(2, { message: 'Massage is required' }),
  ratting: z
    .string()
    .min(1, { message: 'Ratting must be 1-5 ' })
    .max(5),
});
