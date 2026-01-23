"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  quickContactSchema,
  type QuickContactFormData,
} from "@/lib/validations/contact";
import { submitQuickContact } from "@/app/actions/contact";

interface QuickContactFormProps {
  className?: string;
}

export function QuickContactForm({ className }: QuickContactFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuickContactFormData>({
    resolver: zodResolver(quickContactSchema),
  });

  const onSubmit = async (data: QuickContactFormData) => {
    setIsSubmitting(true);

    try {
      const result = await submitQuickContact(data);

      if (result.success) {
        toast.success(result.message);
        reset();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <div className="space-y-4">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="quick-name">Name</Label>
          <Input
            id="quick-name"
            placeholder="Your name"
            {...register("name")}
            error={!!errors.name}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="quick-email">Email</Label>
          <Input
            id="quick-email"
            type="email"
            placeholder="your@email.com"
            {...register("email")}
            error={!!errors.email}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="quick-message">Message</Label>
          <Textarea
            id="quick-message"
            placeholder="How can we help you?"
            className="min-h-[100px]"
            {...register("message")}
            error={!!errors.message}
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
