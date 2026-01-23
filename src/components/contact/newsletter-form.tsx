"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send, Loader2, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  newsletterSchema,
  type NewsletterFormData,
} from "@/lib/validations/contact";
import { subscribeNewsletter } from "@/app/actions/contact";
import { cn } from "@/lib/utils";

interface NewsletterFormProps {
  className?: string;
  variant?: "default" | "compact";
}

export function NewsletterForm({
  className,
  variant = "default",
}: NewsletterFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);

    try {
      const result = await subscribeNewsletter(data);

      if (result.success) {
        setIsSuccess(true);
        toast.success(result.message);
        reset();
        // Reset success state after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={cn("flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20", className)}>
        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
        <p className="text-sm text-green-400">
          Thanks for subscribing! Check your email for confirmation.
        </p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-subtle" />
            <Input
              type="email"
              placeholder="Enter your email"
              className="pl-10"
              {...register("email")}
              error={!!errors.email}
            />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </Button>
        </div>
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <div className="space-y-3">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-subtle" />
          <Input
            type="email"
            placeholder="Enter your email address"
            className="pl-10 h-12"
            {...register("email")}
            error={!!errors.email}
          />
        </div>
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
        <Button type="submit" className="w-full h-12" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Subscribing...
            </>
          ) : (
            <>
              Subscribe to Newsletter
              <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
      <p className="text-xs text-foreground-subtle mt-3 text-center">
        No spam, ever. Unsubscribe anytime.
      </p>
    </form>
  );
}
