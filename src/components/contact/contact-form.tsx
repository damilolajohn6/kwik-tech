"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  User,
  Mail,
  Phone,
  Building,
  Briefcase,
  DollarSign,
  Clock,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  Check,
  Loader2,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  contactFormSchema,
  step1Schema,
  step2Schema,
  step3Schema,
  type ContactFormData,
} from "@/lib/validations/contact";
import { submitContactForm } from "@/app/actions/contact";
import {
  CONTACT_REASONS,
  BUDGET_RANGES,
  PROJECT_TIMELINES,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, title: "Your Info", icon: User },
  { id: 2, title: "Project", icon: Briefcase },
  { id: 3, title: "Details", icon: MessageSquare },
];

const referralSources = [
  "Google Search",
  "Social Media",
  "Referral",
  "Blog/Article",
  "Previous Client",
  "Other",
];

export function ContactForm() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
      referralSource: "",
      agreeToTerms: false,
    },
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
    watch,
    reset,
  } = form;

  const watchedValues = watch();

  // Validate current step before proceeding
  const validateStep = async (step: number): Promise<boolean> => {
    let isValid = false;

    switch (step) {
      case 1:
        isValid = await trigger(["firstName", "lastName", "email", "phone", "company"]);
        break;
      case 2:
        isValid = await trigger(["service", "budget", "timeline"]);
        break;
      case 3:
        isValid = await trigger(["message", "agreeToTerms"]);
        break;
      default:
        isValid = true;
    }

    return isValid;
  };

  const nextStep = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(data);

      if (result.success) {
        setIsSuccess(true);
        toast.success(result.message);
        reset();
      } else {
        toast.error(result.message);
        if (result.errors) {
          // Handle validation errors from server
          Object.entries(result.errors).forEach(([field, messages]) => {
            form.setError(field as keyof ContactFormData, {
              message: messages[0],
            });
          });
        }
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state
  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-background rounded-3xl border border-border p-8 md:p-12 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">
          Message Sent Successfully!
        </h3>
        <p className="text-foreground-muted mb-8">
          Thank you for reaching out. We'll review your project details and get
          back to you within 24 hours.
        </p>
        <Button
          onClick={() => {
            setIsSuccess(false);
            setCurrentStep(1);
          }}
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-background rounded-3xl border border-border overflow-hidden">
      {/* Progress Header */}
      <div className="p-6 border-b border-border bg-background-secondary/50">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;

            return (
              <React.Fragment key={step.id}>
                {/* Step */}
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                      isActive && "bg-brand-500 text-white",
                      isCompleted && "bg-green-500 text-white",
                      !isActive && !isCompleted && "bg-background-tertiary text-foreground-muted"
                    )}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  <div className="hidden sm:block">
                    <p
                      className={cn(
                        "text-sm font-medium",
                        isActive ? "text-foreground" : "text-foreground-muted"
                      )}
                    >
                      Step {step.id}
                    </p>
                    <p className="text-xs text-foreground-subtle">{step.title}</p>
                  </div>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "flex-1 h-0.5 mx-4",
                      currentStep > step.id ? "bg-green-500" : "bg-border"
                    )}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  Personal Information
                </h3>
                <p className="text-sm text-foreground-muted">
                  Tell us a bit about yourself so we can get in touch.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* First Name */}
                <div className="space-y-2">
                  <Label htmlFor="firstName">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-subtle" />
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="pl-10"
                      {...register("firstName")}
                      error={!!errors.firstName}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-sm text-red-500">{errors.firstName.message}</p>
                  )}
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <Label htmlFor="lastName">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-subtle" />
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="pl-10"
                      {...register("lastName")}
                      error={!!errors.lastName}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-sm text-red-500">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-subtle" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    className="pl-10"
                    {...register("email")}
                    error={!!errors.email}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-subtle" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234 800 123 4567"
                      className="pl-10"
                      {...register("phone")}
                      error={!!errors.phone}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-subtle" />
                    <Input
                      id="company"
                      placeholder="Your Company"
                      className="pl-10"
                      {...register("company")}
                      error={!!errors.company}
                    />
                  </div>
                  {errors.company && (
                    <p className="text-sm text-red-500">{errors.company.message}</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Project Information */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  Project Information
                </h3>
                <p className="text-sm text-foreground-muted">
                  Help us understand your project needs.
                </p>
              </div>

              {/* Service */}
              <div className="space-y-2">
                <Label>
                  What service are you interested in? <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={watchedValues.service}
                  onValueChange={(value) => setValue("service", value, { shouldValidate: true })}
                >
                  <SelectTrigger error={!!errors.service}>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-foreground-subtle" />
                      <SelectValue placeholder="Select a service" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {CONTACT_REASONS.map((reason) => (
                      <SelectItem key={reason.id} value={reason.id}>
                        {reason.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-sm text-red-500">{errors.service.message}</p>
                )}
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <Label>
                  What's your budget range? <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={watchedValues.budget}
                  onValueChange={(value) => setValue("budget", value, { shouldValidate: true })}
                >
                  <SelectTrigger error={!!errors.budget}>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-foreground-subtle" />
                      <SelectValue placeholder="Select budget range" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {BUDGET_RANGES.map((range) => (
                      <SelectItem key={range.id} value={range.id}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.budget && (
                  <p className="text-sm text-red-500">{errors.budget.message}</p>
                )}
              </div>

              {/* Timeline */}
              <div className="space-y-2">
                <Label>
                  When do you need this completed? <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={watchedValues.timeline}
                  onValueChange={(value) => setValue("timeline", value, { shouldValidate: true })}
                >
                  <SelectTrigger error={!!errors.timeline}>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-foreground-subtle" />
                      <SelectValue placeholder="Select timeline" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {PROJECT_TIMELINES.map((timeline) => (
                      <SelectItem key={timeline.id} value={timeline.id}>
                        {timeline.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.timeline && (
                  <p className="text-sm text-red-500">{errors.timeline.message}</p>
                )}
              </div>
            </motion.div>
          )}

          {/* Step 3: Project Details */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  Project Details
                </h3>
                <p className="text-sm text-foreground-muted">
                  Tell us more about your project and how we can help.
                </p>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">
                  Project Description <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  className="min-h-[150px]"
                  {...register("message")}
                  error={!!errors.message}
                />
                <div className="flex justify-between text-xs">
                  {errors.message ? (
                    <p className="text-red-500">{errors.message.message}</p>
                  ) : (
                    <p className="text-foreground-subtle">Minimum 20 characters</p>
                  )}
                  <p className="text-foreground-subtle">
                    {watchedValues.message?.length || 0}/2000
                  </p>
                </div>
              </div>

              {/* Referral Source */}
              <div className="space-y-2">
                <Label>How did you hear about us?</Label>
                <Select
                  value={watchedValues.referralSource}
                  onValueChange={(value) => setValue("referralSource", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    {referralSources.map((source) => (
                      <SelectItem key={source} value={source}>
                        {source}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Terms Agreement */}
              <div className="space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("agreeToTerms")}
                    className="mt-1 w-4 h-4 rounded border-border bg-background-secondary text-brand-500 focus:ring-brand-500 focus:ring-offset-background"
                  />
                  <span className="text-sm text-foreground-muted">
                    I agree to the{" "}
                    <a href="/terms" className="text-brand-500 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-brand-500 hover:underline">
                      Privacy Policy
                    </a>
                    . <span className="text-red-500">*</span>
                  </span>
                </label>
                {errors.agreeToTerms && (
                  <p className="text-sm text-red-500">{errors.agreeToTerms.message}</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          {currentStep > 1 ? (
            <Button type="button" variant="outline" onClick={prevStep}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
          ) : (
            <div />
          )}

          {currentStep < 3 ? (
            <Button type="button" onClick={nextStep}>
              Next Step
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
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
          )}
        </div>
      </form>
    </div>
  );
}
