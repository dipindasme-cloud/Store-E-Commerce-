"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="section animate-fade-in" aria-labelledby="contact-heading">
      <Container className="container-custom">
        <div className="space-y-12 md:space-y-16 lg:space-y-20">

          {/* HERO */}
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-overline font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contact Us
            </p>
            <h1 
              id="contact-heading"
              className="mt-4 text-display-lg font-bold tracking-tight text-foreground"
            >
              We’re Here To Help
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-body-md text-muted-foreground leading-relaxed">
              Have questions about products, orders, shipping, returns, or
              anything else? Reach out to our team and we'll get back to you as
              soon as possible.
            </p>
          </header>

          {/* CONTACT INFO CARDS */}
          <div 
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 lg:gap-6" 
            aria-label="Direct contact details"
          >
            <div className="rounded-md border border-border bg-background p-6 lg:p-8 transition-colors hover:border-foreground/20">
              <h3 className="text-body-lg font-semibold text-foreground">Customer Support</h3>
              <p className="mt-3 text-body-sm text-muted-foreground">
                <a href="mailto:support@shoestore.com" className="focus-ring-custom rounded-sm hover:underline">
                  support@shoestore.com
                </a>
              </p>
            </div>

            <div className="rounded-md border border-border bg-background p-6 lg:p-8 transition-colors hover:border-foreground/20">
              <h3 className="text-body-lg font-semibold text-foreground">Phone Number</h3>
              <p className="mt-3 text-body-sm text-muted-foreground">
                <a href="tel:+15551234567" className="focus-ring-custom rounded-sm hover:underline">
                  +1 (555) 123-4567
                </a>
              </p>
            </div>

            <div className="rounded-md border border-border bg-background p-6 lg:p-8 transition-colors hover:border-foreground/20">
              <h3 className="text-body-lg font-semibold text-foreground">Business Hours</h3>
              <p className="mt-3 text-body-sm leading-relaxed text-muted-foreground">
                Monday - Friday <br />
                <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
              </p>
            </div>

            <div className="rounded-md border border-border bg-background p-6 lg:p-8 transition-colors hover:border-foreground/20">
              <h3 className="text-body-lg font-semibold text-foreground">Headquarters</h3>
              <p className="mt-3 text-body-sm text-muted-foreground">
                New York, USA
              </p>
            </div>
          </div>

          {/* MAIN FORM + SIDEBAR CONTENT */}
          <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:gap-12 items-start">

            {/* FORM */}
            <div className="rounded-md border border-border bg-background p-6 md:p-8 lg:p-10">
              <h2 className="text-h2 font-bold tracking-tight text-foreground">Send Us A Message</h2>
              <p className="mt-2 text-body-sm text-muted-foreground">
                Complete the form below and our team will respond shortly.
              </p>

              {submitted && (
                <div 
                  className="mt-6 rounded-sm bg-emerald-50 border border-emerald-200 p-4 text-body-sm text-emerald-800 animate-slide-up"
                  role="alert"
                >
                  Success! Your message was sent. Our team will follow up shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-5 md:space-y-6">
                <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-body-sm font-medium text-foreground">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                      aria-required="true"
                      className="h-12 w-full rounded-sm border border-border bg-background px-4 text-body-md text-foreground transition-colors focus-ring-custom placeholder:text-muted-foreground/50 hover:border-foreground/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-body-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                      aria-required="true"
                      className="h-12 w-full rounded-sm border border-border bg-background px-4 text-body-md text-foreground transition-colors focus-ring-custom placeholder:text-muted-foreground/50 hover:border-foreground/30"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-body-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    aria-required="true"
                    className="h-12 w-full rounded-sm border border-border bg-background px-4 text-body-md text-foreground transition-colors focus-ring-custom placeholder:text-muted-foreground/50 hover:border-foreground/30"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-body-sm font-medium text-foreground">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help?"
                    required
                    aria-required="true"
                    className="h-12 w-full rounded-sm border border-border bg-background px-4 text-body-md text-foreground transition-colors focus-ring-custom placeholder:text-muted-foreground/50 hover:border-foreground/30"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-body-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message..."
                    required
                    aria-required="true"
                    className="w-full rounded-sm border border-border bg-background p-4 text-body-md text-foreground transition-colors focus-ring-custom placeholder:text-muted-foreground/50 hover:border-foreground/30 resize-y min-h-[140px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 w-full sm:w-auto rounded-sm bg-primary px-8 text-body-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50 focus-ring-custom inline-flex items-center justify-center pointer-events-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* SUPPORT SIDEBAR */}
            <aside className="space-y-4 md:space-y-5" aria-label="Support informational summaries">
              <div className="rounded-md border border-border bg-background p-6 lg:p-8 transition-colors hover:border-foreground/20">
                <h3 className="text-body-lg font-semibold text-foreground">Need Quick Help?</h3>
                <p className="mt-3 text-body-sm leading-relaxed text-muted-foreground">
                  Find answers related to orders, shipping, delivery updates, and account management instantly.
                </p>
              </div>

              <div className="rounded-md border border-border bg-background p-6 lg:p-8 transition-colors hover:border-foreground/20">
                <h3 className="text-body-lg font-semibold text-foreground">Returns & Refunds</h3>
                <p className="mt-3 text-body-sm leading-relaxed text-muted-foreground">
                  Enjoy hassle-free returns on all products within 30 days of standard transit delivery.
                </p>
              </div>

              <div className="rounded-md border border-border bg-background p-6 lg:p-8 transition-colors hover:border-foreground/20">
                <h3 className="text-body-lg font-semibold text-foreground">Wholesale Enquiries</h3>
                <p className="mt-3 text-body-sm leading-relaxed text-muted-foreground">
                  Interested in bulk corporate purchases or wholesale distribution partnerships? Reach out directly.
                </p>
              </div>
            </aside>
          </div>

          {/* FAQ LAYER */}
          <section 
            className="rounded-md border border-border bg-background p-6 md:p-8 lg:p-10"
            aria-labelledby="faq-heading"
          >
            <h2 id="faq-heading" className="text-h2 font-bold tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>

            <div className="mt-8 space-y-6">
              <div className="border-b border-border pb-6">
                <h3 className="text-body-lg font-medium text-foreground">How long does shipping take?</h3>
                <p className="mt-3 text-body-sm text-muted-foreground leading-relaxed">
                  Standard delivery usually takes 3–7 business days depending on location.
                </p>
              </div>

              <div className="border-b border-border pb-6">
                <h3 className="text-body-lg font-medium text-foreground">Can I return a product?</h3>
                <p className="mt-3 text-body-sm text-muted-foreground leading-relaxed">
                  Yes. Unworn products are fully accepted for refund or processing within 30 days of delivery.
                </p>
              </div>

              <div className="pb-2">
                <h3 className="text-body-lg font-medium text-foreground">How can I track my order?</h3>
                <p className="mt-3 text-body-sm text-muted-foreground leading-relaxed">
                  You can track live courier orders directly via your personal secure account profile platform.
                </p>
              </div>
            </div>
          </section>

          {/* STORE MAP EMBED CONTAINER */}
          <div 
            className="overflow-hidden rounded-md border border-border bg-muted aspect-21/9 max-h-[420px] w-full"
            role="region"
            aria-label="Store locations geographic map details"
          >
            <div className="flex h-full w-full items-center justify-center text-center p-6 bg-neutral-50/60">
              <div>
                <h3 className="text-body-lg font-semibold text-foreground">Store Location Map</h3>
                <p className="mt-2 text-body-sm text-muted-foreground">
                  [Interactive Google Maps Dynamic API Canvas Component]
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}