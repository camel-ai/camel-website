"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

interface NewsletterBannerProps {
  className?: string;
  onSubmit?: (email: string) => void;
}

export default function NewsletterCard({ className, onSubmit }: NewsletterBannerProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(email);
      } else {
        const res = await fetch("/api/newsletter/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        if (!res.ok) {
          const data = await res.json().catch(() => ({ error: "Subscribe failed" }));
          throw new Error(data.error || "Subscribe failed");
        }
      }

      setIsSubmitted(true);
      setEmail("");
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.");
      console.error("Newsletter signup error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        className={cn("bg-primary-1 mx-auto w-full max-w-4xl rounded-2xl p-8 lg:p-12", className)}
      >
        <div className="text-center">
          <div className="mb-4">
            <div className="bg-green-secondary/40 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
              <svg
                className="text-green-primary h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-foreground mb-2 text-2xl font-bold">Thank you for subscribing!</h3>
          <Button variant="ghost" onClick={() => setIsSubmitted(false)} className="mt-4">
            Subscribe another email
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center",
        className,
      )}
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col items-center justify-between">
        <div className="flex w-full flex-row items-center justify-between gap-3">
          <div className="flex w-full max-w-xl flex-row items-center justify-between gap-2">
            <Input
              type="email"
              placeholder="Enter your email to get updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                "font-display-title h-14 rounded-lg border-transparent text-base font-semibold",
                error && "border-destructive focus-visible:border-destructive",
              )}
              disabled={isSubmitting}
              aria-label="Email address"
            />
            <Button
              type="submit"
              variant="default"
              size="default"
              disabled={isSubmitting}
              className="font-display-title h-14 rounded-lg px-8 text-base font-semibold whitespace-nowrap"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="text-foreground mr-2 -ml-1 h-4 w-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Subscribing...
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </div>
        </div>

        {error && (
          <p className="text-destructive mt-2 text-center text-sm" role="alert">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
