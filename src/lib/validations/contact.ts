import { z } from "zod";

export const contactFormSchema = z.object({
  // Step 1: Personal Info
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(val),
      "Please enter a valid phone number"
    ),
  company: z
    .string()
    .max(100, "Company name must be less than 100 characters")
    .optional(),

  // Step 2: Project Info
  service: z
    .string()
    .min(1, "Please select a service"),
  budget: z
    .string()
    .min(1, "Please select a budget range"),
  timeline: z
    .string()
    .min(1, "Please select a timeline"),

  // Step 3: Project Details
  message: z
    .string()
    .min(20, "Please provide more details (at least 20 characters)")
    .max(2000, "Message must be less than 2000 characters"),
  referralSource: z
    .string()
    .optional(),
  agreeToTerms: z
    .boolean()
    .refine((val) => val === true, "You must agree to the terms"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Schema for each step (for step validation)
export const step1Schema = contactFormSchema.pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  company: true,
});

export const step2Schema = contactFormSchema.pick({
  service: true,
  budget: true,
  timeline: true,
});

export const step3Schema = contactFormSchema.pick({
  message: true,
  referralSource: true,
  agreeToTerms: true,
});

// Newsletter form schema
export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;

// Quick contact form schema
export const quickContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type QuickContactFormData = z.infer<typeof quickContactSchema>;
