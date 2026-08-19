"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { courses } from "@/lib/data/courses";
import { siteConfig } from "@/lib/data/site";

interface FormState {
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  course: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormState): FormErrors {
    const next: FormErrors = {};
    if (values.name.trim().length < 2) {
      next.name = "Please enter your full name.";
    }
    if (!/^[6-9]\d{9}$/.test(values.phone.trim())) {
      next.phone = "Enter a valid 10-digit Indian mobile number.";
    }
    if (values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email.trim())) {
      next.email = "Enter a valid email address, or leave it blank.";
    }
    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    const lines = [
      `Hi Future Optima, I'd like to enquire about a course.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      form.course ? `Course of interest: ${form.course}` : null,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border-soft bg-navy-50 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-amber-500" />
        <h3 className="font-heading text-lg font-bold text-navy-900">
          Thanks, {form.name.split(" ")[0]}!
        </h3>
        <p className="text-sm text-muted-foreground">
          We&apos;ve opened WhatsApp with your enquiry pre-filled &mdash; just hit send, and our
          counselors will reply shortly. You can also call us directly at{" "}
          {siteConfig.primaryPhone}.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-900">
          Full Name
        </label>
        <Input
          id="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your full name"
          aria-invalid={!!errors.name}
        />
        {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-900">
            Phone Number
          </label>
          <Input
            id="phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="98765 43210"
            aria-invalid={!!errors.phone}
          />
          {errors.phone ? <p className="mt-1 text-xs text-destructive">{errors.phone}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-900">
            Email (optional)
          </label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
          />
          {errors.email ? <p className="mt-1 text-xs text-destructive">{errors.email}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="course" className="mb-1.5 block text-sm font-medium text-navy-900">
          Course of Interest (optional)
        </label>
        <select
          id="course"
          value={form.course}
          onChange={(e) => setForm({ ...form, course: e.target.value })}
          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-navy-900 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Not sure — help me choose</option>
          {courses.map((course) => (
            <option key={course.slug} value={course.shortName}>
              {course.shortName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-900">
          Message (optional)
        </label>
        <Textarea
          id="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Any specific questions about batch timing, fees, or the course?"
          rows={4}
        />
      </div>

      <Button type="submit" size="lg" className="w-full bg-amber-500 text-navy-950 hover:bg-amber-400">
        Send via WhatsApp <Send className="ml-1 h-4 w-4" />
      </Button>
    </form>
  );
}
