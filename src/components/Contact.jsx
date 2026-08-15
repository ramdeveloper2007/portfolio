import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Copy, Check, Send } from 'lucide-react';
import { personal } from '../data/personal';
import { copyToClipboard, ExternalLink } from '../utils/helpers';
import { FadeIn } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ID
  ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`
  : null;

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.email.trim()) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email';
    if (!form.subject.trim()) next.subject = 'Subject is required';
    if (!form.message.trim()) next.message = 'Message is required';
    else if (form.message.trim().length < 10) next.message = 'Message must be at least 10 characters';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (FORMSPREE_ENDPOINT) {
      setStatus('sending');
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        });
        if (res.ok) {
          setStatus('success');
          setForm(initialForm);
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
      return;
    }

    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `From: ${form.name} (${form.email})\n\n${form.message}`
    )}`;
    window.location.href = mailto;
    setStatus('mailto');
    setForm(initialForm);
  };

  const handleCopyEmail = async () => {
    const ok = await copyToClipboard(personal.email);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-surface-muted/30" aria-labelledby="contact-heading">
      <div className="section-container">
        <SectionHeader
          label="Contact"
          title="Let's Build Something Together"
          description="I'm always interested in learning, building meaningful projects and connecting with people in technology."
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <FadeIn className="lg:col-span-2">
            <div className="space-y-4">
              <div className="glass-card flex items-start gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-content">Email</p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="mt-1 block truncate text-sm text-accent hover:underline"
                  >
                    {personal.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs text-content-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? 'Copied!' : 'Copy email'}
                  </button>
                </div>
              </div>

              <div className="glass-card flex items-start gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-content">Location</p>
                  <p className="mt-1 text-sm text-content-secondary">{personal.location}</p>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <ExternalLink
                  href={personal.social.github}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-content-secondary hover:border-accent/30 hover:text-accent"
                  showIcon={false}
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </ExternalLink>
                <ExternalLink
                  href={personal.social.linkedin}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-content-secondary hover:border-accent/30 hover:text-accent"
                  showIcon={false}
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </ExternalLink>
                <a
                  href={`mailto:${personal.email}`}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-content-secondary transition-colors hover:border-accent/30 hover:text-accent"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card space-y-5 p-6 md:p-8" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-content">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-content transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-500" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-content">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-content transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-500" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-content">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-content transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-xs text-red-500" role="alert">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-content">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-y rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm text-content transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-500" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === 'sending'}>
                <Send className="h-4 w-4" />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-sm text-emerald-600 dark:text-emerald-400" role="status">
                  Message sent successfully. I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-500" role="alert">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
              {status === 'mailto' && (
                <p className="text-sm text-content-secondary" role="status">
                  Opening your email client. To enable direct form submission, add your Formspree ID to{' '}
                  <code className="rounded bg-surface-muted px-1.5 py-0.5">VITE_FORMSPREE_ID</code>.
                </p>
              )}
              {!FORMSPREE_ENDPOINT && status === 'idle' && (
                <p className="text-xs text-content-muted">
                  Form uses mailto fallback. Set{' '}
                  <code className="rounded bg-surface-muted px-1.5 py-0.5">VITE_FORMSPREE_ID</code> in{' '}
                  <code className="rounded bg-surface-muted px-1.5 py-0.5">.env</code> for Formspree integration.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
