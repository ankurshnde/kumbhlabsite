import {
  forwardRef,
  useCallback,
  useId,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type FormEvent,
} from "react";
import { AlertCircle, ChevronRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactFormValues = Readonly<{
  name: string;
  email: string;
  subject: string;
  message: string;
}>;

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export type ContactFormProps = Readonly<
  {
    title?: string;
    subtitle?: string;
    submitLabel?: string;
    successTitle?: string;
    successMessage?: string;
    submitErrorMessage?: string;
    maxMessageLength?: number;
    loading?: boolean;
    onSubmit?: (values: ContactFormValues) => void | Promise<void>;
  } & Omit<ComponentPropsWithoutRef<"form">, "onSubmit">
>;

function validateContact(values: ContactFormValues, maxLength: number): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const subject = values.subject.trim();
  const message = values.message.trim();

  if (name.length < 2) errors.name = "Please enter your name.";
  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email address.";
  if (subject.length < 3) errors.subject = "Subject must be at least 3 characters.";
  if (message.length < 10) errors.message = "Message must be at least 10 characters.";
  else if (message.length > maxLength)
    errors.message = `Message cannot exceed ${maxLength} characters.`;

  return errors;
}

export const ContactForm = forwardRef<HTMLDivElement, ContactFormProps>(function ContactForm(
  {
    className,
    title = "Get in touch",
    subtitle = "We usually reply within one business day.",
    submitLabel = "Send message",
    successTitle = "Message sent",
    successMessage = "Thanks for reaching out. We'll get back to you soon.",
    submitErrorMessage = "Your message wasn't sent. Please try again.",
    maxMessageLength = 1000,
    loading = false,
    onSubmit,
    onReset,
    ...props
  },
  ref,
) {
  const formId = useId();
  const honeypotRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const busy = loading || submitting;
  const messageLimit = Math.max(10, Math.floor(maxMessageLength));

  const clearError = useCallback((key: keyof ContactFormValues) => {
    setSubmitError("");
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (busy || success) return;

      if (honeypotRef.current?.value.trim()) {
        setSuccess(true);
        return;
      }

      const values: ContactFormValues = { name, email, subject, message };
      const nextErrors = validateContact(values, messageLimit);
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length > 0) return;

      setSubmitting(true);
      setSubmitError("");
      try {
        await onSubmit?.({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
        });
        setSuccess(true);
      } catch (err: unknown) {
        const msg = err instanceof Error && err.message ? err.message : submitErrorMessage;
        setSubmitError(msg);
      } finally {
        setSubmitting(false);
      }
    },
    [busy, email, message, messageLimit, name, onSubmit, subject, submitErrorMessage, success],
  );

  const handleReset = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      onReset?.(event);
      if (event.defaultPrevented) return;
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setErrors({});
      setSubmitError("");
    },
    [onReset],
  );

  if (success) {
    return (
      <div
        ref={ref}
        data-slot="contact-form"
        data-success
        role="status"
        aria-live="polite"
        className={cn(
          "w-full max-w-md rounded-3xl border border-border bg-card p-6 font-sans shadow-sm md:p-8",
          className,
        )}
      >
        <div className="flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent">
          <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground">
          {successTitle}
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{successMessage}</p>
      </div>
    );
  }

  return (
    <div ref={ref} className={cn("w-full max-w-md", className)}>
      <form
        data-slot="contact-form"
        aria-busy={busy}
        noValidate
        onSubmit={handleSubmit}
        onReset={handleReset}
        className="rounded-3xl border border-border bg-card p-6 font-sans shadow-sm md:p-8"
        {...props}
      >
        <input
          ref={honeypotRef}
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="sr-only"
        />

        <div className="mb-7">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            {title}
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{subtitle}</p>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor={`${formId}-name`}
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id={`${formId}-name`}
                name="name"
                type="text"
                autoComplete="name"
                disabled={busy}
                value={name}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                onChange={(event) => {
                  setName(event.target.value);
                  clearError("name");
                }}
                className={cn(
                  "h-11 w-full rounded-md border bg-background px-3.5 text-sm ring-0 transition-colors outline-none focus:ring-1 focus:ring-accent disabled:bg-muted/50",
                  errors.name
                    ? "border-destructive focus:border-destructive"
                    : "border-input focus:border-accent",
                )}
                placeholder="Your name"
              />
              {errors.name ? (
                <p
                  id={`${formId}-name-error`}
                  role="alert"
                  className="mt-1.5 text-xs text-destructive"
                >
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor={`${formId}-email`}
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id={`${formId}-email`}
                name="email"
                type="email"
                autoComplete="email"
                disabled={busy}
                value={email}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                onChange={(event) => {
                  setEmail(event.target.value);
                  clearError("email");
                }}
                className={cn(
                  "h-11 w-full rounded-md border bg-background px-3.5 text-sm ring-0 transition-colors outline-none focus:ring-1 focus:ring-accent disabled:bg-muted/50",
                  errors.email
                    ? "border-destructive focus:border-destructive"
                    : "border-input focus:border-accent",
                )}
                placeholder="you@organization.com"
              />
              {errors.email ? (
                <p
                  id={`${formId}-email-error`}
                  role="alert"
                  className="mt-1.5 text-xs text-destructive"
                >
                  {errors.email}
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <label
              htmlFor={`${formId}-subject`}
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Subject / Organization
            </label>
            <input
              id={`${formId}-subject`}
              name="subject"
              type="text"
              disabled={busy}
              value={subject}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? `${formId}-subject-error` : undefined}
              onChange={(event) => {
                setSubject(event.target.value);
                clearError("subject");
              }}
              className={cn(
                "h-11 w-full rounded-md border bg-background px-3.5 text-sm ring-0 transition-colors outline-none focus:ring-1 focus:ring-accent disabled:bg-muted/50",
                errors.subject
                  ? "border-destructive focus:border-destructive"
                  : "border-input focus:border-accent",
              )}
              placeholder="Organization or initiative name"
            />
            {errors.subject ? (
              <p
                id={`${formId}-subject-error`}
                role="alert"
                className="mt-1.5 text-xs text-destructive"
              >
                {errors.subject}
              </p>
            ) : null}
          </div>

          <div>
            <div className="mb-1.5 flex items-baseline justify-between gap-2">
              <label htmlFor={`${formId}-message`} className="text-sm font-medium text-foreground">
                Partnership proposal / Message
              </label>
              <span className="text-xs text-muted-foreground tabular-nums">
                {message.length}/{messageLimit}
              </span>
            </div>
            <textarea
              id={`${formId}-message`}
              name="message"
              rows={4}
              disabled={busy}
              value={message}
              maxLength={messageLimit}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? `${formId}-message-error` : `${formId}-message-count`
              }
              onChange={(event) => {
                setMessage(event.target.value);
                clearError("message");
              }}
              className={cn(
                "min-h-28 w-full resize-y rounded-md border bg-background px-3.5 py-2.5 text-sm leading-relaxed ring-0 transition-colors outline-none focus:ring-1 focus:ring-accent disabled:bg-muted/50",
                errors.message
                  ? "border-destructive focus:border-destructive"
                  : "border-input focus:border-accent",
              )}
              placeholder="Tell us about your organization and how you'd like to collaborate..."
            />
            <span id={`${formId}-message-count`} className="sr-only">
              {message.length} of {messageLimit} characters used
            </span>
            {errors.message ? (
              <p
                id={`${formId}-message-error`}
                role="alert"
                className="mt-1.5 text-xs text-destructive"
              >
                {errors.message}
              </p>
            ) : null}
          </div>
        </div>

        {submitError ? (
          <div
            role="alert"
            className="mt-5 flex items-start gap-2.5 border-l-2 border-destructive bg-destructive/10 px-3 py-2.5 text-sm text-destructive"
          >
            <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden />
            <span>{submitError}</span>
          </div>
        ) : null}

        <button
          type="submit"
          disabled={busy}
          className="mt-6 flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-foreground px-4 text-sm font-semibold text-background transition-colors hover:bg-foreground/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground disabled:cursor-not-allowed disabled:opacity-60"
        >
          {busy ? <Loader2 size={16} className="animate-spin" aria-hidden /> : null}
          {busy ? "Submitting..." : submitLabel}
          {!busy ? <ChevronRight size={15} aria-hidden /> : null}
        </button>
      </form>
    </div>
  );
});

ContactForm.displayName = "ContactForm";
