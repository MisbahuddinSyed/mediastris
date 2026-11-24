'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import {
  Building2,
  ShieldCheck,
  Layers,
  FileCheck2,
  HeartPulse,
  ArrowRight,
  ArrowUpRight,
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

const servicesData = [
  {
    id: 'onboarding-support',
    number: '01',
    shortLabel: 'Hospital Empanelment & Onboarding',
    title: 'Providing Onboarding Support System to Hospitals',
    icon: Building2,
    paragraphs: [
      'In today’s healthcare landscape, patients aren\'t just looking for exceptional doctors—they are actively seeking the "Cashless Facility Available" sign. Getting onboarded with the General Insurance Council (GIC) network, Central Government Health Scheme (CGHS), Employees’ State Insurance Corporation (ESIC) and Scheme (ESIS), Pradhan Mantri Jan Arogya Yojna (PMJAY) is an absolute necessity for growing your hospital\'s footprint. However, the path to empanelment often feels like an endless maze of complex paperwork, strict registry codes, and frustrating delays.',
      'At Mediastris Healthcare LLP, we believe your administrative team should be focused on supporting patient care, not endlessly chasing application statuses. Our On boarding Advisory and consultancy expertise takes the wheel, turning a complicated procedural hurdle into a smooth, successful, and swift endeavour.',
    ],
    highlights: [
      { code: 'GIC', name: 'General Insurance Council Network' },
      { code: 'CGHS', name: 'Central Government Health Scheme' },
      { code: 'ESIC / ESIS', name: 'Employees’ State Insurance Corporation & Scheme' },
      { code: 'PMJAY', name: 'Pradhan Mantri Jan Arogya Yojna' },
    ],
  },
  {
    id: 'insurance-support',
    number: '02',
    shortLabel: 'Insurance Operations Desk',
    title: 'Insurance Support System to Hospitals',
    icon: ShieldCheck,
    paragraphs: [
      'At Mediastris, our Insurance Operations Desk acts as a bridge between patients, hospital staff, and insurance partners (TPAs) to make healthcare completely stress-free. We streamline the entire claims journey from the moment of admission—fast-tracking pre-authorization approvals, minimizing claim rejections, eliminate long discharge delays, protect the hospital\'s financial health, and ensure your patients experience smooth, seamless cashless care when they need it most. Our largest department manages insurance desk operations, empanelment processes, TPA relationships, and claim lifecycle management for client institutions across India.',
    ],
    focusAreas: [
      'Pre-authorization approvals from admission',
      'TPA relationships & coordination',
      'Minimizing claim rejections & discharge delays',
      'End-to-end claim lifecycle management across India',
    ],
  },
  {
    id: 'hospital-operations',
    number: '03',
    shortLabel: 'Operations & Administration',
    title: 'Hospital Operations and Administration Support System to Hospitals',
    icon: Layers,
    paragraphs: [
      'Our Hospital Administration services optimize your day-to-day operations to create a seamless, well-structured environment for both staff and patients. Our experts provide end-to-end guidance in organizational design, tailored HR systems, patient flow management, facility management, and regulatory registration support. By redesigning administrative workflows and removing operational friction, we ensure your healthcare facility runs like clockwork—improving bed turnaround times, reducing burnout among healthcare professionals, and allowing your leadership team to focus on strategic growth and clinical excellence.',
    ],
    focusAreas: [
      'Organizational design & tailored HR systems',
      'Patient flow & bed turnaround optimization',
      'Facility management & workflow redesign',
      'Regulatory registration support',
    ],
  },
  {
    id: 'claims-advisory',
    number: '04',
    shortLabel: 'Claims & Denial Resolution',
    title: 'Healthcare Claims and Advisory Solution Support System to Hospitals',
    icon: FileCheck2,
    paragraphs: [
      'Receiving a medical bill is stressful enough. Seeing "Claim Denied" stamped across it is downright exhausting. You pay your premiums, you play by the rules, and yet, when you need support the most, you find yourself trapped in a maze of paperwork and fine print.',
      'We believe your energy belongs to your recovery—not to fighting with insurance adjusters. Our Claim Rejections Management team steps in as your dedicated shield, turning frustrating bureaucratic roadblocks into successful resolutions.',
    ],
    subheading: 'Your Advocates in the Insurance Maze',
    subtext:
      'A rejected claim is rarely the end of the road; more often, it is simply a request for better documentation or the result of a coding error. We take the heavy lifting off your shoulders, using our insider knowledge of the insurance industry to challenge unfair denials and fight for the coverage you rightfully deserve.',
    stepsHeading: 'How we turn things around:',
    steps: [
      {
        title: 'Decoding the Denial',
        text: 'We cut through the confusing jargon to pinpoint the exact reason your claim was bounced—whether it is a missing signature, a billing code mismatch, or a dispute over "medical necessity."',
      },
      {
        title: 'Building a Bulletproof Appeal',
        text: 'Our experts work directly with your medical team to gather the precise clinical notes, records, and evidence required to build an undeniable case.',
      },
      {
        title: 'Relentless Follow-Up',
        text: 'We wait on hold, navigate the automated phone menus, and handle the endless email chains so you don\'t have to.',
      },
      {
        title: 'Maximizing Your Return',
        text: 'We don\'t just aim to get the claim paid; we ensure you aren\'t stuck paying out-of-pocket for covered expenses due to technicalities.',
      },
    ],
    quote:
      '"A denied claim isn\'t a final verdict—it is just the beginning of the negotiation. Let us do the talking."',
  },
  {
    id: 'home-healthcare',
    number: '05',
    shortLabel: 'Post-Acute & Home Care',
    title: 'Home Healthcare',
    icon: HeartPulse,
    paragraphs: [
      'At Mediastris Healthcare, we believe that quality healthcare should extend beyond the boundaries of a hospital. As healthcare continues to evolve, home healthcare has emerged as an essential component of patient-centric care, offering patients the opportunity to recover in familiar surroundings while remaining connected to professional medical support.',
      'We partner with hospitals, nursing homes, and healthcare institutions to establish, strengthen, and scale their home healthcare services through comprehensive clinical, operational, administrative, and insurance management support.',
    ],
    focusAreas: [
      'Clinical & operational program setup',
      'Administrative workflow integration',
      'Home healthcare insurance management support',
      'Scaling for hospitals, nursing homes & institutions',
    ],
  },
];

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

export default function ServicesPage() {
  return (
    <div
      className={`${sans} pt-20 w-full bg-[#FAF8F4] text-[#0D1B2A] antialiased selection:bg-[#B8924A]/20 selection:text-[#0D1B2A]`}
    >
      {/* =====================================================================
          1. HERO SECTION — Asymmetric Editorial Composition + Practice Index
         ===================================================================== */}
      <section className="relative overflow-hidden bg-[#FAF8F4] border-b border-[#0D1B2A]/12">
        {/* Subtle vertical editorial grid lines matching Home Page */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-12"
        >
          <div className="col-span-4 border-l border-[#0D1B2A]/[0.04]" />
          <div className="col-span-4 border-l border-[#0D1B2A]/[0.04]" />
          <div className="col-span-4 border-l border-r border-[#0D1B2A]/[0.04]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-start">
            {/* Left Column: Editorial Headline */}
            <div className="lg:col-span-7 z-10">
              <div className="w-12 h-[2px] bg-[#B8924A] mb-8" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8E6B29] mb-4">
                Mediastris Healthcare LLP
              </p>

              <h1
                className={`${serif} text-4xl sm:text-6xl lg:text-[4.25rem] font-semibold text-[#0D1B2A] tracking-[-0.02em] leading-[1.05]`}
              >
                Our Services
              </h1>

              <p className="mt-7 text-lg sm:text-xl text-[#4A5568] max-w-2xl leading-relaxed font-normal">
                End-to-end onboarding, insurance desk management, hospital operations, claim rejection recovery, and home healthcare support systems designed to let institutions focus on patient care.
              </p>

              <div className="mt-9">
                <Link
                  href="/contact"
                  className={`group inline-flex items-center gap-4 bg-[#0D1B2A] hover:bg-[#13263A] text-white font-semibold py-3.5 px-7 text-sm tracking-wide transition-all duration-300 ${focus}`}
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF6A] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Quick-Jump Directory */}
            <div className="lg:col-span-5 relative">
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -top-3 -right-3 w-full h-full border border-[#B8924A]/65 pointer-events-none"
              />

              <nav
                aria-label="Services directory"
                className="relative bg-[#F3EFE6] border border-[#0D1B2A]/15 p-7 sm:p-8"
              >
                <div className="flex items-center justify-between pb-4 border-b border-[#0D1B2A]/15">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8E6B29]">
                    Practice Directory
                  </span>
                  <span className="text-xs font-semibold tracking-[0.16em] text-[#526071]">
                    05 Pillars
                  </span>
                </div>

                <ul className="divide-y divide-[#0D1B2A]/12 mt-2">
                  {servicesData.map((service) => (
                    <li key={service.id}>
                      <a
                        href={`#${service.id}`}
                        className={`group py-3.5 flex items-start justify-between gap-3 text-sm text-[#0D1B2A] hover:text-[#8E6B29] transition-colors ${focus}`}
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="text-xs font-semibold tracking-[0.16em] text-[#B8924A] shrink-0">
                            {service.number}
                          </span>
                          <span className="font-medium leading-snug">{service.title}</span>
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[#0D1B2A]/40 group-hover:text-[#8E6B29] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. SERVICE 01 — Providing Onboarding Support System to Hospitals
         ===================================================================== */}
      <section
        id={servicesData[0].id}
        className="scroll-mt-24 py-24 sm:py-32 px-6 lg:px-12 bg-[#F3EFE6] border-b border-[#0D1B2A]/12 text-[#0D1B2A]"
      >
        <div className="max-w-7xl mx-auto">
          <Reveal className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#B8924A]">
                  01
                </span>
                <span className="w-8 h-[1px] bg-[#B8924A]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526071]">
                  {servicesData[0].shortLabel}
                </span>
              </div>

              <h2
                className={`${serif} text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold leading-[1.14] text-[#0D1B2A]`}
              >
                {servicesData[0].title}
              </h2>

              <div className="mt-8 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#8E6B29]">
                <Building2 className="w-4 h-4 text-[#B8924A] stroke-[1.75]" />
                <span>Empanelment &amp; Cashless Onboarding</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {servicesData[0].paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-[#4A5568] text-base sm:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              {/* Empanelment Networks Matrix */}
              <dl className="pt-6 grid grid-cols-1 sm:grid-cols-2 border-t border-l border-[#0D1B2A]/20">
                {servicesData[0].highlights.map((scheme) => (
                  <div
                    key={scheme.code}
                    className="p-6 border-r border-b border-[#0D1B2A]/20 bg-[#FAF8F4] hover:bg-[#F3EFE6] transition-colors duration-300"
                  >
                    <dt className={`${serif} text-2xl font-semibold text-[#0D1B2A]`}>
                      {scheme.code}
                    </dt>
                    <dd className="mt-1.5 text-sm text-[#4A5568] leading-snug">
                      {scheme.name}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          3. SERVICE 02 — Insurance Support System to Hospitals
         ===================================================================== */}
      <section
        id={servicesData[1].id}
        className="scroll-mt-24 py-24 sm:py-32 px-6 lg:px-12 bg-[#FAF8F4] border-b border-[#0D1B2A]/12 text-[#0D1B2A]"
      >
        <div className="max-w-7xl mx-auto">
          <Reveal className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#B8924A]">
                  02
                </span>
                <span className="w-8 h-[1px] bg-[#B8924A]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526071]">
                  {servicesData[1].shortLabel}
                </span>
              </div>

              <h2
                className={`${serif} text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold leading-[1.14] text-[#0D1B2A]`}
              >
                {servicesData[1].title}
              </h2>

              <div className="mt-8 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#8E6B29]">
                <ShieldCheck className="w-4 h-4 text-[#B8924A] stroke-[1.75]" />
                <span>Admission-to-Discharge Claims Desk</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {servicesData[1].paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-[#4A5568] text-base sm:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <ul className="pt-4 border-t border-[#0D1B2A]/15 grid sm:grid-cols-2 gap-4">
                {servicesData[1].focusAreas.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#0D1B2A] font-medium"
                  >
                    <span className="mt-2 w-1.5 h-1.5 bg-[#B8924A] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          4. SERVICE 03 — Hospital Operations and Administration Support System
         ===================================================================== */}
      <section
        id={servicesData[2].id}
        className="scroll-mt-24 py-24 sm:py-32 px-6 lg:px-12 bg-[#F3EFE6] border-b border-[#0D1B2A]/12 text-[#0D1B2A]"
      >
        <div className="max-w-7xl mx-auto">
          <Reveal className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#B8924A]">
                  03
                </span>
                <span className="w-8 h-[1px] bg-[#B8924A]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526071]">
                  {servicesData[2].shortLabel}
                </span>
              </div>

              <h2
                className={`${serif} text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold leading-[1.14] text-[#0D1B2A]`}
              >
                {servicesData[2].title}
              </h2>

              <div className="mt-8 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#8E6B29]">
                <Layers className="w-4 h-4 text-[#B8924A] stroke-[1.75]" />
                <span>Workflow &amp; Facility Administration</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {servicesData[2].paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-[#4A5568] text-base sm:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <ul className="pt-4 border-t border-[#0D1B2A]/15 grid sm:grid-cols-2 gap-4">
                {servicesData[2].focusAreas.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#0D1B2A] font-medium"
                  >
                    <span className="mt-2 w-1.5 h-1.5 bg-[#B8924A] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          5. SERVICE 04 — Healthcare Claims and Advisory Solution (Midnight Navy)
         ===================================================================== */}
      <section
        id={servicesData[3].id}
        className="scroll-mt-24 py-24 sm:py-32 px-6 lg:px-12 bg-[#0D1B2A] text-white"
      >
        <div className="max-w-7xl mx-auto">
          <Reveal className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#D4AF6A]">
                  04
                </span>
                <span className="w-8 h-[1px] bg-[#B8924A]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  {servicesData[3].shortLabel}
                </span>
              </div>

              <h2
                className={`${serif} text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold leading-[1.14] text-white`}
              >
                {servicesData[3].title}
              </h2>

              <blockquote
                className={`${serif} mt-8 pt-6 border-t border-white/15 text-2xl sm:text-[1.75rem] italic text-[#D4AF6A] leading-snug`}
              >
                {servicesData[3].quote}
              </blockquote>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {servicesData[3].paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-slate-300 text-base sm:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-6 border-t border-white/15">
                <h3
                  className={`${serif} text-2xl sm:text-3xl font-semibold text-white`}
                >
                  {servicesData[3].subheading}
                </h3>
                <p className="mt-3 text-slate-300 text-base leading-relaxed">
                  {servicesData[3].subtext}
                </p>
              </div>

              <div className="pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF6A] mb-6">
                  {servicesData[3].stepsHeading}
                </p>

                <ol className="relative border-l border-[#B8924A]/45 ml-3 pl-8 sm:pl-10 space-y-8">
                  {servicesData[3].steps.map((step, idx) => (
                    <li key={step.title} className="relative group">
                      <span className="absolute -left-[45px] sm:-left-[53px] top-0.5 flex items-center justify-center w-6 h-6 bg-[#0D1B2A] border border-[#B8924A] text-[11px] font-semibold text-[#D4AF6A] transition-colors duration-300 group-hover:bg-[#B8924A] group-hover:text-[#0D1B2A]">
                        {idx + 1}
                      </span>
                      <h4
                        className={`${serif} text-xl sm:text-2xl font-semibold text-white`}
                      >
                        {step.title}
                      </h4>
                      <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                        {step.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          6. SERVICE 05 — Home Healthcare
         ===================================================================== */}
      <section
        id={servicesData[4].id}
        className="scroll-mt-24 py-24 sm:py-32 px-6 lg:px-12 bg-[#FAF8F4] border-b border-[#0D1B2A]/12 text-[#0D1B2A]"
      >
        <div className="max-w-7xl mx-auto">
          <Reveal className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#B8924A]">
                  05
                </span>
                <span className="w-8 h-[1px] bg-[#B8924A]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#526071]">
                  {servicesData[4].shortLabel}
                </span>
              </div>

              <h2
                className={`${serif} text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold leading-[1.14] text-[#0D1B2A]`}
              >
                {servicesData[4].title}
              </h2>

              <div className="mt-8 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#8E6B29]">
                <HeartPulse className="w-4 h-4 text-[#B8924A] stroke-[1.75]" />
                <span>Beyond Hospital Boundaries</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {servicesData[4].paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-[#4A5568] text-base sm:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <ul className="pt-4 border-t border-[#0D1B2A]/15 grid sm:grid-cols-2 gap-4">
                {servicesData[4].focusAreas.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#0D1B2A] font-medium"
                  >
                    <span className="mt-2 w-1.5 h-1.5 bg-[#B8924A] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          7. CLOSING CTA — High-Contrast Architectural Closing Banner
         ===================================================================== */}
      <section className="relative py-24 sm:py-28 px-6 lg:px-12 bg-[#F3EFE6] text-[#0D1B2A] overflow-hidden">
        <Reveal className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="w-12 h-[2px] bg-[#B8924A] mb-7" />
            <h2
              className={`${serif} text-3xl sm:text-5xl font-semibold leading-[1.12] text-[#0D1B2A]`}
            >
              Ready to streamline your hospital operations or resolve a denied claim?
            </h2>
            <p className="mt-4 text-[#4A5568] text-base sm:text-lg leading-relaxed max-w-xl">
              Connect with Mediastris Healthcare LLP to discuss onboarding, insurance desk management, operations, claim appeals, or home healthcare programs.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 lg:pl-8">
            <Link
              href="/contact"
              className={`group inline-flex items-center justify-between gap-4 bg-[#0D1B2A] hover:bg-[#13263A] text-white font-semibold py-4 px-7 text-sm tracking-wide transition-all duration-300 ${focus}`}
            >
              <span>Contact MediAstris</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF6A] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/about"
              className={`group inline-flex items-center justify-between gap-4 bg-transparent hover:bg-[#0D1B2A] text-[#0D1B2A] hover:text-white border border-[#0D1B2A]/30 hover:border-[#0D1B2A] font-semibold py-4 px-7 text-sm tracking-wide transition-all duration-300 ${focus}`}
            >
              <span>Learn About Our Team</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}