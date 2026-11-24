'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  ShieldCheck,
  UserCheck,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const serif = cormorant.className;
const sans = jakarta.className;

/* Shared focus ring matching the refined champagne gold accent */
const focus =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B8924A]';

const contactChannels = [
  {
    number: '01',
    title: 'General enquiries',
    description:
      'Questions about Mediastris Healthcare LLP, our consulting scope, or where to direct a specific request.',
    email: '[General Email Placeholder — Add in Config]',
    phone: '[General Phone Placeholder — Add in Config]',
    icon: Mail,
  },
  {
    number: '02',
    title: 'Hospital partnerships',
    description:
      'Empanelment (GIC, CGHS, ESIC/ESIS, PMJAY), hospital operations, NABH quality systems, home healthcare, and medico-legal advisory.',
    email: '[Hospitals Email Placeholder — Add in Config]',
    phone: '[Hospitals Phone Placeholder — Add in Config]',
    icon: Building2,
  },
  {
    number: '03',
    title: 'Insurance and claim assistance',
    description:
      'Insurance desk coordination, pre-authorizations, TPA workflows, and rejected claim appeal reviews.',
    email: '[Claims Desk Email Placeholder — Add in Config]',
    phone: '[Claims Desk Phone Placeholder — Add in Config]',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Patient support',
    description:
      'Guidance for patients and families navigating claim denials, paperwork gaps, or cashless settlement queries.',
    email: '[Patient Support Email Placeholder — Add in Config]',
    phone: '[Patient Support Phone Placeholder — Add in Config]',
    icon: UserCheck,
  },
];

const whyContactPoints = [
  {
    step: '01',
    title: 'Hospital Insurance Expertise',
    text: 'Practical experience across insurance desks, pre-authorizations, TPA coordination, and network empanelment.',
  },
  {
    step: '02',
    title: 'Claim Management & Appeals',
    text: 'Structured review of rejected claims—pinpointing coding, documentation, or clinical gaps and pursuing resolution.',
  },
  {
    step: '03',
    title: 'Hospital Operations & Quality',
    text: 'Support spanning day-to-day hospital administration, SOPs, NABH readiness, home healthcare, and medico-legal compliance.',
  },
  {
    step: '04',
    title: 'Patient-Centric Assistance',
    text: 'Clear, grounded guidance so patients and families are not left carrying avoidable out-of-pocket costs over paperwork.',
  },
];

const serviceAreas = [
  { city: 'Mumbai', region: 'Maharashtra' },
  { city: 'Palghar', region: 'Maharashtra' },
  { city: 'Dahanu', region: 'Maharashtra' },
  { city: 'Surat', region: 'Gujarat' },
  { city: 'Bhopal', region: 'Madhya Pradesh' },
  { city: 'Indore', region: 'Madhya Pradesh' },
];

const initialFormState = {
  fullName: '',
  email: '',
  phone: '',
  role: 'Hospital',
  subject: '',
  message: '',
};

/* Subtle viewport reveal wrapper — restrained, editorial motion */
function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [feedbackMessage, setFeedbackMessage] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (status === 'success' || status === 'error') {
      setStatus('idle');
      setFeedbackMessage('');
    }
  }

  function validateForm(values) {
    const nextErrors = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!values.phone.trim()) {
      nextErrors.phone = 'Please enter your phone number.';
    } else if (values.phone.replace(/\D/g, '').length < 7) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }

    if (!values.role.trim()) {
      nextErrors.role = 'Please select who you are contacting as.';
    }

    if (!values.subject.trim()) {
      nextErrors.subject = 'Please enter a subject.';
    }

    if (!values.message.trim()) {
      nextErrors.message = 'Please enter your message.';
    } else if (values.message.trim().length < 10) {
      nextErrors.message = 'Please provide a few more details (at least 10 characters).';
    }

    return nextErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('error');
      setFeedbackMessage('Please review the highlighted fields before submitting.');
      return;
    }

    setErrors({});
    setStatus('submitting');
    setFeedbackMessage('');

    try {
      // TODO: Connect your real backend API endpoint here, e.g.:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) throw new Error('Submission failed');

      // Simulated brief UI state transition without pretending backend delivery occurred
      await new Promise((resolve) => setTimeout(resolve, 450));

      setStatus('success');
      setFeedbackMessage(
        'Form validated locally. Connect a backend API route (such as /api/contact) in handleSubmit to transmit submissions.'
      );
      setFormData(initialFormState);
    } catch {
      setStatus('error');
      setFeedbackMessage(
        'Unable to process your request right now. Please try again or check your API connection.'
      );
    }
  }

  return (
    <div
      className={`mt-20 ${sans} w-full bg-[#FAF8F4] text-[#0D1B2A] antialiased selection:bg-[#B8924A]/20 selection:text-[#0D1B2A]`}
    >
      

      {/* =====================================================================
          2. CONTACT INFORMATION — Dedicated Desk Channels (Typographic Layout)
         ===================================================================== */}
      <section className="py-24 sm:py-32 px-6 lg:px-12 bg-[#F3EFE6] border-b border-[#0D1B2A]/10 text-[#0D1B2A]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-14">
            <div className="lg:col-span-7">
              <div className="w-10 h-[2px] bg-[#B8924A] mb-6" />
              <h2
                className={`${serif} text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold leading-[1.14] text-[#0D1B2A]`}
              >
                Reach the right desk directly
              </h2>
            </div>

            
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#0D1B2A]/20">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <article
                    key={channel.title}
                    className="group p-8 sm:p-10 border-r border-b border-[#0D1B2A]/20 bg-[#FAF8F4] hover:bg-[#F3EFE6] transition-colors duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <span className="text-xs font-semibold tracking-[0.2em] text-[#B8924A]">
                          {channel.number}
                        </span>
                        <Icon className="w-5 h-5 text-[#B8924A] stroke-[1.5]" />
                      </div>

                      <h3
                        className={`${serif} text-2xl sm:text-[1.75rem] font-semibold text-[#0D1B2A] leading-snug`}
                      >
                        {channel.title}
                      </h3>

                      <p className="mt-3 text-sm sm:text-base text-[#4A5568] leading-relaxed">
                        {channel.description}
                      </p>
                    </div>

                    <dl className="mt-7 pt-5 border-t border-[#0D1B2A]/15 space-y-2.5 text-sm">
                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-[#8E6B29] shrink-0 mt-0.5 stroke-[1.75]" />
                        <dt className="sr-only">Email</dt>
                        <dd className="font-medium text-[#0D1B2A] break-all">
                          {channel.email}
                        </dd>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-4 h-4 text-[#8E6B29] shrink-0 mt-0.5 stroke-[1.75]" />
                        <dt className="sr-only">Phone</dt>
                        <dd className="font-medium text-[#0D1B2A]">{channel.phone}</dd>
                      </div>
                    </dl>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          3. CONTACT FORM — Controlled React State, Validation & API Hook
         ===================================================================== */}
      <section className="py-24 sm:py-32 px-6 lg:px-12 bg-[#FAF8F4] border-b border-[#0D1B2A]/12 text-[#0D1B2A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Sticky Editorial Guidance */}
            <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="w-10 h-[2px] bg-[#B8924A] mb-6" />
              <h2
                className={`${serif} text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold leading-[1.14] text-[#0D1B2A]`}
              >
                Send us a message
              </h2>
              <p className="mt-5 text-[#4A5568] text-base leading-relaxed">
                Share a brief overview of your hospital&apos;s operational or empanelment needs, or tell us about an insurance claim or appeal you need assistance with.
              </p>

              
            </Reveal>

            {/* Right Column: Editorial Form */}
            <Reveal delay={100} className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-[#F3EFE6] border border-[#0D1B2A]/15 p-7 sm:p-10 lg:p-12 space-y-6"
              >
                {status === 'success' && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="p-4 sm:p-5 bg-[#FAF8F4] border-l-2 border-[#B8924A] border border-[#0D1B2A]/15 flex items-start gap-3.5 text-sm text-[#0D1B2A]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#8E6B29] shrink-0 mt-0.5 stroke-[1.75]" />
                    <div>
                      <p className="font-semibold">Inquiry ready for backend integration</p>
                      <p className="mt-1 text-[#4A5568] leading-relaxed">{feedbackMessage}</p>
                    </div>
                  </div>
                )}

                {status === 'error' && feedbackMessage && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="p-4 sm:p-5 bg-[#FAF8F4] border-l-2 border-[#991B1B] border border-[#991B1B]/25 flex items-start gap-3.5 text-sm text-[#0D1B2A]"
                  >
                    <AlertCircle className="w-5 h-5 text-[#991B1B] shrink-0 mt-0.5 stroke-[1.75]" />
                    <div>
                      <p className="font-semibold text-[#991B1B]">Please check your form</p>
                      <p className="mt-1 text-[#4A5568] leading-relaxed">{feedbackMessage}</p>
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#0D1B2A] mb-2"
                    >
                      Full Name <span className="text-[#8E6B29]">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      className={`w-full bg-[#FAF8F4] border ${
                        errors.fullName ? 'border-[#991B1B]' : 'border-[#0D1B2A]/25'
                      } px-4 py-3 text-sm text-[#0D1B2A] placeholder:text-[#526071]/70 transition-colors ${focus}`}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-1.5 text-xs font-medium text-[#991B1B]">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#0D1B2A] mb-2"
                    >
                      Email Address <span className="text-[#8E6B29]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full bg-[#FAF8F4] border ${
                        errors.email ? 'border-[#991B1B]' : 'border-[#0D1B2A]/25'
                      } px-4 py-3 text-sm text-[#0D1B2A] placeholder:text-[#526071]/70 transition-colors ${focus}`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs font-medium text-[#991B1B]">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#0D1B2A] mb-2"
                    >
                      Phone Number <span className="text-[#8E6B29]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={`w-full bg-[#FAF8F4] border ${
                        errors.phone ? 'border-[#991B1B]' : 'border-[#0D1B2A]/25'
                      } px-4 py-3 text-sm text-[#0D1B2A] placeholder:text-[#526071]/70 transition-colors ${focus}`}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1.5 text-xs font-medium text-[#991B1B]">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* I am contacting as */}
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#0D1B2A] mb-2"
                    >
                      I am contacting as <span className="text-[#8E6B29]">*</span>
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.role)}
                      aria-describedby={errors.role ? 'role-error' : undefined}
                      className={`w-full bg-[#FAF8F4] border ${
                        errors.role ? 'border-[#991B1B]' : 'border-[#0D1B2A]/25'
                      } px-4 py-3 text-sm text-[#0D1B2A] transition-colors ${focus}`}
                    >
                      <option value="Hospital">Hospital</option>
                      <option value="Patient">Patient</option>
                      <option value="Healthcare Professional">Healthcare Professional</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.role && (
                      <p id="role-error" className="mt-1.5 text-xs font-medium text-[#991B1B]">
                        {errors.role}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#0D1B2A] mb-2"
                  >
                    Subject <span className="text-[#8E6B29]">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g., Hospital empanelment, insurance desk support, or claim appeal"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    className={`w-full bg-[#FAF8F4] border ${
                      errors.subject ? 'border-[#991B1B]' : 'border-[#0D1B2A]/25'
                    } px-4 py-3 text-sm text-[#0D1B2A] placeholder:text-[#526071]/70 transition-colors ${focus}`}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1.5 text-xs font-medium text-[#991B1B]">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#0D1B2A] mb-2"
                  >
                    Message <span className="text-[#8E6B29]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can assist your hospital, practice, or claim request..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full bg-[#FAF8F4] border ${
                      errors.message ? 'border-[#991B1B]' : 'border-[#0D1B2A]/25'
                    } px-4 py-3 text-sm text-[#0D1B2A] placeholder:text-[#526071]/70 transition-colors resize-y ${focus}`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs font-medium text-[#991B1B]">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`group inline-flex items-center justify-center gap-3 bg-[#B8924A] hover:bg-[#C9A35B] disabled:opacity-65 text-[#0D1B2A] font-semibold py-4 px-8 text-sm tracking-wide transition-all duration-300 ${focus}`}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Validating Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      

      {/* =====================================================================
          5. LOCATION / SERVICE AREAS — Editorial Ledger Across Six Cities
         ===================================================================== */}
      <section className="py-24 sm:py-32 px-6 lg:px-12 bg-[#FAF8F4] border-b border-[#0D1B2A]/12 text-[#0D1B2A]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="w-10 h-[2px] bg-[#B8924A] mb-6" />
              <h2
                className={`${serif} text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold leading-[1.14] text-[#0D1B2A]`}
              >
                Where we work
              </h2>
              <p className="mt-5 text-[#4A5568] text-base leading-relaxed">
                Our consulting and operational network spans six cities across western and central India. Office address details can be added once confirmed for your public listing.
              </p>
              <div className="mt-6 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#8E6B29]">
                <MapPin className="w-4 h-4 text-[#B8924A] stroke-[1.75]" />
                <span>[Office Address Placeholder — Add in Config]</span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#0D1B2A]/20">
                {serviceAreas.map((area, idx) => (
                  <div
                    key={area.city}
                    className="group p-7 sm:p-8 border-r border-b border-[#0D1B2A]/20 bg-[#FAF8F4] hover:bg-[#F3EFE6] transition-colors duration-300 flex flex-col justify-between min-h-[150px]"
                  >
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#B8924A]">
                      0{idx + 1}
                    </span>
                    <div className="mt-6">
                      <dt className={`${serif} text-2xl sm:text-3xl font-semibold text-[#0D1B2A]`}>
                        {area.city}
                      </dt>
                      <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-[#526071]">
                        {area.region}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      
    </div>
  );
}