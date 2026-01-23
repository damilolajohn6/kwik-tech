"use server";

import { z } from "zod";
import {
  contactFormSchema,
  quickContactSchema,
  newsletterSchema,
} from "@/lib/validations/contact";

// Types for server action responses
type ActionResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

// Main contact form submission
export async function submitContactForm(
  formData: z.infer<typeof contactFormSchema>,
): Promise<ActionResponse> {
  try {
    // Validate the data
    const validatedData = contactFormSchema.parse(formData);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Send confirmation email to user

    console.log("Contact form submission:", validatedData);

    // Simulate sending email (replace with actual email service like Resend, SendGrid, etc.)
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New Contact Form Submission from ${validatedData.firstName} ${validatedData.lastName}`,
    //   html: generateEmailTemplate(validatedData),
    // });

    return {
      success: true,
      message:
        "Thank you for your message! We'll get back to you within 24 hours.",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string[]> = {};
      error.issues.forEach((err: z.ZodIssue) => {
        const path = err.path.join(".");
        if (!errors[path]) {
          errors[path] = [];
        }
        errors[path].push(err.message);
      });

      return {
        success: false,
        message: "Please check the form for errors.",
        errors,
      };
    }

    console.error("Contact form error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}

// Quick contact form submission
export async function submitQuickContact(
  formData: z.infer<typeof quickContactSchema>,
): Promise<ActionResponse> {
  try {
    const validatedData = quickContactSchema.parse(formData);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Quick contact submission:", validatedData);

    return {
      success: true,
      message: "Message sent! We'll respond shortly.",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check the form for errors.",
      };
    }

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

// Newsletter subscription
export async function subscribeNewsletter(
  formData: z.infer<typeof newsletterSchema>,
): Promise<ActionResponse> {
  try {
    const validatedData = newsletterSchema.parse(formData);

    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log("Newsletter subscription:", validatedData);

    // Here you would integrate with email service like Mailchimp, ConvertKit, etc.
    // await addToMailingList(validatedData.email);

    return {
      success: true,
      message: "You're subscribed! Check your email for confirmation.",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      };
    }

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
