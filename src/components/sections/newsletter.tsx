"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export function Newsletter() {
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Newsletter signup:", data);
    toast.success("Thanks for subscribing! Check your email for confirmation.");
    reset();
    setIsLoading(false);
  };

  return (
    <section className="py-16 bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7 text-brand-500" />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Stay Updated
          </h3>
          <p className="text-foreground-muted mb-8">
            Get the latest insights on technology, design, and digital
            transformation delivered to your inbox.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                error={!!errors.email}
                className="h-12"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1 text-left">
                  {errors.email.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              size="lg"
              loading={isLoading}
              className="h-12"
            >
              Subscribe
              <Send className="w-4 h-4" />
            </Button>
          </form>

          <p className="text-xs text-foreground-subtle mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
