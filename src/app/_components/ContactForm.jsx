"use client";

import { useState } from "react";
import PORTFOLIO from "@/app/_data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Contact form, faithful to the handoff: it confirms locally and does not
 * send anything. The mailto link below the button is the route that actually
 * reaches an inbox.
 */
export default function ContactForm() {
  const [status, setStatus] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setStatus("Thanks — noted. This form is not wired to a mailbox yet, so please use the email link below.");
    event.currentTarget.reset();
  };

  return (
    <Card className="gap-0 border-line-strong py-0">
      <CardContent className="px-0">
        <form onSubmit={onSubmit} className="grid content-start gap-4 p-[26px]">
          <p className="m-0 text-[15px] leading-[1.7] text-ink-body">
            Full-stack roles or project work. I reply within two business days.
          </p>

          <div className="grid gap-[7px]">
            <label htmlFor="cf-name" className="label">
              Name
            </label>
            <Input
              id="cf-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Jane Okafor"
              className="h-12 rounded-xl bg-white/[0.03] px-4 text-[15px]"
            />
          </div>

          <div className="grid gap-[7px]">
            <label htmlFor="cf-email" className="label">
              Email
            </label>
            <Input
              id="cf-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="jane@company.com"
              className="h-12 rounded-xl bg-white/[0.03] px-4 text-[15px]"
            />
          </div>

          <div className="grid gap-[7px]">
            <label htmlFor="cf-msg" className="label">
              What are you building?
            </label>
            <Textarea
              id="cf-msg"
              name="message"
              rows={4}
              required
              placeholder="A short paragraph is plenty."
              className="rounded-xl bg-white/[0.03] px-4 py-3 text-[15px] leading-relaxed"
            />
          </div>

          <Button type="submit" size="lg" className="h-12 justify-self-start px-6 text-[15px]">
            Send message
          </Button>

          <p aria-live="polite" role="status" className="m-0 min-h-5 text-sm text-cyan">
            {status}
          </p>

          <Separator className="bg-line" />

          <p className="m-0 text-[12.5px] text-ink-faint">
            Or email me directly at{" "}
            <a href={`mailto:${PORTFOLIO.socials.email}`}>{PORTFOLIO.socials.emailLabel}</a>.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
