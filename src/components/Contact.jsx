import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Copy, Check, Send, ArrowUpRight, MessageSquare, Terminal } from 'lucide-react';
import { personal } from '../data/personal';
import { copyToClipboard, ExternalLink, maskEmail } from '../utils/helpers';
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
    <section id="contact" className="section-padding relative bg-surface" aria-labelledby="contact-heading">
      <div className="section-container">
        <SectionHeader
          label="Direct Communication"
          title="Let's Build Something Together."
          description="Have an open internship, software project, or opportunity? Feel free to reach out directly."
        />

        {/* Single Premium Selective Liquid Glass Contact Card */}
        <FadeIn>
          <div className="liquid-glass rounded-3xl overflow-hidden p-6 md:p-10 lg:p-12 shadow-2xl border border-border">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Direct Info */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                    GET IN TOUCH
                  </span>
                  <h3 className="font-display text-2xl font-bold text-content mt-1">
                    Connect &amp; Collaborate
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-content-secondary">
                    Open for software development roles, full-stack internships, and technical collaborations. I typically respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Email Box */}
                  <div className="rounded-2xl border border-border bg-surface-muted p-4 transition-all hover:border-cyan-500/30">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-mono font-medium text-content-muted">DIRECT EMAIL</p>
                        <a
                          href={`mailto:${personal.email}`}
                          className="text-xs sm:text-sm font-mono font-medium text-cyan-300 hover:underline"
                          title="Click to send email"
                        >
                          {maskEmail(personal.email)}
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-muted px-2.5 py-1 text-[11px] font-mono text-content-secondary hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
                    >
                      {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
                    </button>
                  </div>

                  {/* Location Box */}
                  <div className="rounded-2xl border border-border bg-surface-muted p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-mono font-medium text-content-muted">LOCATION</p>
                        <p className="text-xs sm:text-sm font-medium text-content">{personal.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="pt-2">
                  <p className="font-mono text-xs text-content-muted mb-3">SOCIAL PROFILES</p>
                  <div className="flex gap-2.5">
                    <ExternalLink
                      href={personal.social.github}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-muted text-content-secondary hover:text-cyan-300 hover:border-cyan-500/40 transition-all hover:scale-105"
                      showIcon={false}
                    >
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </ExternalLink>
                    <ExternalLink
                      href={personal.social.linkedin}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-muted text-content-secondary hover:text-cyan-300 hover:border-cyan-500/40 transition-all hover:scale-105"
                      showIcon={false}
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </ExternalLink>
                    <a
                      href={`mailto:${personal.email}`}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-muted text-content-secondary hover:text-cyan-300 hover:border-cyan-500/40 transition-all hover:scale-105"
                      aria-label="Send direct email"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Message Form */}
              <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-mono font-medium text-content-secondary">
                        YOUR NAME *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-surface-muted px-3.5 py-2.5 text-xs sm:text-sm text-content placeholder:text-content-muted/60 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/20 transition-all"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-rose-400 font-mono" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs font-mono font-medium text-content-secondary">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-border bg-surface-muted px-3.5 py-2.5 text-xs sm:text-sm text-content placeholder:text-content-muted/60 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/20 transition-all"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-rose-400 font-mono" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-xs font-mono font-medium text-content-secondary">
                      SUBJECT *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Project discussion / Opportunity"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-surface-muted px-3.5 py-2.5 text-xs sm:text-sm text-content placeholder:text-content-muted/60 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/20 transition-all"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-1 text-xs text-rose-400 font-mono" role="alert">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-mono font-medium text-content-secondary">
                      MESSAGE *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Describe your project, role, or proposal..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full resize-y rounded-xl border border-border bg-surface-muted px-3.5 py-2.5 text-xs sm:text-sm text-content placeholder:text-content-muted/60 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/20 transition-all"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-rose-400 font-mono" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto"
                    disabled={status === 'sending'}
                  >
                    <Send className="h-4 w-4" />
                    <span>{status === 'sending' ? 'Transmitting Message...' : 'Send Message'}</span>
                  </button>

                  {status === 'success' && (
                    <p className="text-xs font-mono text-emerald-400" role="status">
                      ✓ Message transmitted successfully. I will get back to you promptly.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-xs font-mono text-rose-400" role="alert">
                      ✕ Transmission failed. Please try emailing directly at {maskEmail(personal.email)}.
                    </p>
                  )}
                  {status === 'mailto' && (
                    <p className="text-xs font-mono text-cyan-300" role="status">
                      → Opening email client with prefilled details.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

