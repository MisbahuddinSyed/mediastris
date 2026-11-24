'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import { ArrowRight, Building2, Layers, Scale } from 'lucide-react';

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

const journeyMilestones = [
  {
    period: '2010',
    title: 'Beginning of the Journey',
    text: 'Started working in healthcare consulting and support, laying the groundwork for hospital operations, insurance coordination, and patient-centric systems.',
  },
  {
    period: '2010 – 2026',
    title: '16 Years Across 150+ Hospitals',
    text: 'Built a trusted network supporting more than 150 hospitals across Mumbai, Palghar, Dahanu, Surat, Bhopal, and Indore with practical advisory and operational support.',
  },
  {
    period: 'February 2026',
    title: 'Incorporated as Mediastris Healthcare LLP',
    text: 'Formally incorporated as Mediastris Healthcare LLP, bringing 16 years of healthcare excellence into a premier advisory, consultancy, and support services organization.',
  },
];

const corePillars = [
  {
    number: '01',
    title: 'Operational Excellence & Insurance Optimization Support System',
    icon: Layers,
    items: [
      'Claim Processing Desk',
      'Claim Rejection Management',
      'Quality, Risk & Compliance Management',
      'NABH Accreditations',
    ],
  },
  {
    number: '02',
    title: 'Institutional Growth & On boarding Support System',
    icon: Building2,
    items: ['Hospital Empanelment', 'Healthcare Marketing & Branding.'],
  },
  {
    number: '03',
    title: 'Legal & Administrative Support System',
    icon: Scale,
    items: [],
  },
];

const leaders = [
  {
    name: 'Dr. C. M Yadav',
    role: 'Co- Founder & CEO',
    text: 'Brings together extensive clinical expertise and health insurance industry experience, enabling comprehensive support to hospitals, healthcare providers, insurance companies, and patients. With a strong background in patient care, medical administration, healthcare quality management, and insurance claim assessment, he possesses in-depth knowledge of clinical requirements, healthcare financing and claims management.',
  },
  {
    name: 'Muskan Khan',
    role: 'Founder & Legal Advisor',
    text: 'A versatile professional with a unique blend of experience in journalism, healthcare, and law, she began her career as a journalist before transitioning into the healthcare sector, where she gained extensive expertise in healthcare administration, patient support, insurance processes, and hospital coordination. Driven by a passion for healthcare and regulatory excellence, she pursued an LL.B., and LLM in Criminology. Further strengthening her understanding of legal and compliance matters. As the Founder and Legal Advisor of Mediastris Healthcare LLP, she plays a key role by providing support in strategic planning, healthcare consulting, legal advisory, quality management, and organizational development, contributing to the company\'s vision of delivering quality, transparency, and innovation in healthcare services.',
  },
  {
    name: 'Sophie Paul',
    role: 'HOD QMS (Quality Management System)',
    text: 'Sophie Paul is a healthcare management professional with a PGDM in Healthcare Management and over 10 years of extensive experience in healthcare quality management, hospital administration, and accreditation consulting. Sophie is a trained and certified professional in NABH 5th Edition Accreditation Standards and NABH Entry Level 2nd Edition Standards. She has successfully guided healthcare organizations in developing quality systems, implementing accreditation requirements, drafting policies and standard operating procedures (SOPs), conducting internal audits, and establishing continuous quality improvement programs.',
  },
];

const servicesOverview = [
  {
    title: 'Providing Onboarding Support System to Hospitals',
    paragraphs: [
      'In today’s healthcare landscape, patients aren\'t just looking for exceptional doctors—they are actively seeking the "Cashless Facility Available" sign. Getting onboarded with the General Insurance Council (GIC) network, Central Government Health Scheme (CGHS), Employees’ State Insurance Corporation (ESIC) and Scheme (ESIS), Pradhan Mantri Jan Arogya Yojna (PMJAY) is an absolute necessity for growing your hospital\'s footprint. However, the path to empanelment often feels like an endless maze of complex paperwork, strict registry codes, and frustrating delays.',
      'At Mediastris Healthcare LLP, we believe your administrative team should be focused on supporting patient care, not endlessly chasing application statuses. Our On boarding Advisory and consultancy expertise takes the wheel, turning a complicated procedural hurdle into a smooth, successful, and swift endeavour.',
    ],
  },
  {
    title: 'Insurance Support System to Hospitals',
    paragraphs: [
      'At Mediastris, our Insurance Operations Desk acts as a bridge between patients, hospital staff, and insurance partners (TPAs) to make healthcare completely stress-free. We streamline the entire claims journey from the moment of admission—fast-tracking pre-authorization approvals, minimizing claim rejections, eliminate long discharge delays, protect the hospital\'s financial health, and ensure your patients experience smooth, seamless cashless care when they need it most. Our largest department manages insurance desk operations, empanelment processes, TPA relationships, and claim lifecycle management for client institutions across India',
    ],
  },
  {
    title: 'Hospital Operations and Administration Support System to Hospitals',
    paragraphs: [
      'Our Hospital Administration services optimize your day-to-day operations to create a seamless, well-structured environment for both staff and patients. Our experts provide end-to-end guidance in organizational design, tailored HR systems, patient flow management, facility management, and regulatory registration support. By redesigning administrative workflows and removing operational friction, we ensure your healthcare facility runs like clockwork—improving bed turnaround times, reducing burnout among healthcare professionals, and allowing your leadership team to focus on strategic growth and clinical excellence.',
    ],
  },
  {
    title: 'Healthcare Claims and Advisory Solution Support System to Hospitals',
    paragraphs: [
      'Receiving a medical bill is stressful enough. Seeing "Claim Denied" stamped across it is downright exhausting. You pay your premiums, you play by the rules, and yet, when you need support the most, you find yourself trapped in a maze of paperwork and fine print.',
      'We believe your energy belongs to your recovery—not to fighting with insurance adjusters. Our Claim Rejections Management team steps in as your dedicated shield, turning frustrating bureaucratic roadblocks into successful resolutions.',
      'Your Advocates in the Insurance Maze: A rejected claim is rarely the end of the road; more often, it is simply a request for better documentation or the result of a coding error. We take the heavy lifting off your shoulders, using our insider knowledge of the insurance industry to challenge unfair denials and fight for the coverage you rightfully deserve.',
    ],
    bullets: [
      'Decoding the Denial: We cut through the confusing jargon to pinpoint the exact reason your claim was bounced—whether it is a missing signature, a billing code mismatch, or a dispute over "medical necessity."',
      'Building a Bulletproof Appeal: Our experts work directly with your medical team to gather the precise clinical notes, records, and evidence required to build an undeniable case.',
      'Relentless Follow-Up: We wait on hold, navigate the automated phone menus, and handle the endless email chains so you don\'t have to.',
      'Maximizing Your Return: We don\'t just aim to get the claim paid; we ensure you aren\'t stuck paying out-of-pocket for covered expenses due to technicalities.',
    ],
    quote:
      '"A denied claim isn\'t a final verdict—it is just the beginning of the negotiation. Let us do the talking."',
  },
  {
    title: 'Home Healthcare',
    paragraphs: [
      'At Mediastris Healthcare, we believe that quality healthcare should extend beyond the boundaries of a hospital. As healthcare continues to evolve, home healthcare has emerged as an essential component of patient-centric care, offering patients the opportunity to recover in familiar surroundings while remaining connected to professional medical support.',
      'We partner with hospitals, nursing homes, and healthcare institutions to establish, strengthen, and scale their home healthcare services through comprehensive clinical, operational, administrative, and insurance management support.',
      'Home Tab',
      'Our Home Healthcare services empower institutions to seamlessly extend their high-quality clinical care beyond hospital walls into the comfort of patients\' homes. Our dedicated team specializes in designing structured home care programs, developing rigorous clinical protocols, delivering comprehensive caregiver training, and managing home-based insurance billing. By combining clinical safety with streamlined administrative support, we help you launch and scale trusted home care services—driving patient recovery, reducing hospital readmissions, and creating a continuous, compassionate healing journey for the families you serve.',
    ],
  },
  {
    title: 'Insurance and Revenue Solution',
    paragraphs: [
      'Insurance Revenue Solutions help healthcare and insurance businesses get paid faster. We create a system that make sure you get the exact revenue generation. We at Mediastris Healthcare are committed to transforming healthcare institutions into high-performing in daily operations by streamlining your entire revenue cycle and optimizing insurance desk operations.',
      'Mediastris assist insurance companies in determining and managing risks.',
    ],
  },
  {
    title: 'Healthcare Operations and Administration',
    paragraphs: [
      'We help hospitals streamline operations, strengthen administrative systems, optimize departmental coordination, and improve healthcare workflows through structured operational excellence. Healthcare operations and administration focus on the day-to-day business and clinical processes of medical facilities. Administrators manage patient flow, billing, facility maintenance, and staff schedules to ensure care is safe, efficient, and legally compliant. This requires strict adherence to strict health and safety standards.',
    ],
  },
  {
    title: 'Quality Management',
    paragraphs: [
      'Quality management in a hospital isn\'t just about passing inspections or hanging certificates on the wall—it’s about creating a system where bad outcomes are systematically prevented, and every patient gets safe, consistent care.',
      'In a healthcare setting, Quality Management (QM) is the continuous process of monitoring, evaluating, and improving every service the hospital provides, from the clinical side down to the administrative workflows.',
      'Accreditation & Compliance: Our Accreditation & Compliance services help healthcare institutions achieve and sustain the highest benchmarks of quality care, safety, and operational excellence. We guide hospitals through every step of the accreditation journey—from gap analysis and process standardization to staff training and audit preparation for NABH certifications. End-to-end accreditation readiness and compliance advisory across NABH related frameworks, including documentation, training and assessment support.',
      'Quality Management: Our Quality Management services are designed to help healthcare institutions deliver safe, consistent, and exceptional clinical care while removing operational errors. We partner with hospitals to build Standard Operating Procedures (SOPs), streamline patient workflows, and establish continuous audit mechanisms across every department. By implementing proactive incident reporting, clinical safety protocols, and key performance tracking, we shift quality from a periodic checklist into a daily operational habit—reducing clinical risks, protecting your financial health, and earning the lasting trust of your patients and community. Clinical quality, patient safety, infection control, and risk management experts who build and sustain quality management systems beyond accreditation requirements.',
    ],
  },
  {
    title: 'Legal Department',
    paragraphs: [
      'Healthcare-specialised legal team providing medico-legal advisory, regulatory compliance, contract support, and representation in consumer and regulatory proceedings. Our Legal & Medico-Legal Advisory service safeguards healthcare institutions against regulatory risks, liability, and operational disputes, allowing your team to focus entirely on patient care. We provide end-to-end legal support tailored to the healthcare sector—from drafting airtight vendor and employment contracts to ensuring full compliance with medical laws, statutory regulations, and patient consent norms. Should complex disputes or medico-legal challenges arise, our experts step in with prompt, strategic guidance to manage risks, protect your professional reputation, and keep your hospital fully compliant, resilient, and secure?',
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

export default function AboutPage() {
  return (
    <div
      className={`${sans} pt-20 w-screen bg-[#FAF8F4] text-[#0D1B2A] antialiased selection:bg-[#B8924A]/20 selection:text-[#0D1B2A]`}
    >
      {/* =====================================================================
          1. HERO SECTION — Asymmetric Editorial Composition + Gold Frame
         ===================================================================== */}
      <section className="relative overflow-hidden bg-[#FAF8F4] border-b border-[#0D1B2A]/12">
        {/* Subtle vertical editorial grid lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-12"
        >
          <div className="col-span-4 border-l border-[#0D1B2A]/[0.04]" />
          <div className="col-span-4 border-l border-[#0D1B2A]/[0.04]" />
          <div className="col-span-4 border-l border-r border-[#0D1B2A]/[0.04]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: About Us */}
            <div className="lg:col-span-7 lg:pr-6 z-10">
              <div className="w-12 h-[2px] bg-[#B8924A] mb-8" />

              <h1
                className={`${serif} text-4xl sm:text-6xl lg:text-[4.25rem] font-semibold text-[#0D1B2A] tracking-[-0.02em] leading-[1.05]`}
              >
                About us
              </h1>

              <p className="mt-7 text-lg sm:text-xl text-[#4A5568] max-w-2xl leading-relaxed font-normal">
                Having started our journey in 2010, Mediastris Healthcare LLP formally incorporated in February 2026, bringing 16 years of healthcare excellence to our role as a premier advisory, consultancy, and support services organization. We bridge the gap between clinical excellence and operational efficiency, delivering streamlined, patient-centric solutions that enhance the quality, velocity, and accessibility of healthcare delivery.
              </p>

              <p className="mt-5 text-base sm:text-lg text-[#4A5568] max-w-2xl leading-relaxed">
                Today, Mediastris operates as a trusted partner to more than 150 hospitals spanning a robust geographical network that includes Mumbai, Palghar, Dahanu, Surat, Bhopal, and Indore.
              </p>
            </div>

            {/* Right Column: Framed Healthcare Imagery with Gold Frame */}
            
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. OUR STORY — Journey Timeline (2010 to February 2026)
         ===================================================================== */}
      <section className="py-24 sm:py-32 px-6 lg:px-12 bg-[#F3EFE6] border-b border-[#0D1B2A]/10 text-[#0D1B2A]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="w-10 h-[2px] bg-[#B8924A] mb-6" />
              <h2
                className={`${serif} text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold leading-[1.15] text-[#0D1B2A]`}
              >
                Our Journey Since 2010
              </h2>
              <p className="mt-5 text-[#4A5568] text-base leading-relaxed">
                16 years of healthcare excellence across Mumbai, Palghar, Dahanu, Surat, Bhopal, and Indore—supporting more than 150 hospitals and formally incorporating as Mediastris Healthcare LLP in February 2026.
              </p>
            </div>

            <div className="lg:col-span-7">
              <ol className="relative border-l border-[#B8924A]/45 ml-3 sm:ml-4 pl-8 sm:pl-12 space-y-12">
                {journeyMilestones.map((m, idx) => (
                  <li key={m.period} className="relative group">
                    <Reveal delay={idx * 90}>
                      <span className="absolute -left-[45px] sm:-left-[61px] top-1 flex items-center justify-center w-6 h-6 bg-[#F3EFE6] border border-[#B8924A] text-[11px] font-semibold text-[#8E6B29] transition-colors duration-300 group-hover:bg-[#B8924A] group-hover:text-[#0D1B2A]">
                        {idx + 1}
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8E6B29]">
                        {m.period}
                      </p>
                      <h3
                        className={`${serif} text-2xl sm:text-[1.75rem] font-semibold text-[#0D1B2A] mt-1.5 leading-snug`}
                      >
                        {m.title}
                      </h3>
                      <p className="mt-2.5 text-[#4A5568] text-base leading-relaxed max-w-xl">
                        {m.text}
                      </p>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

    

      {/* =====================================================================
          4. CORE PILLARS OF EXPERTISE — Architectural Grid
         ===================================================================== */}
      <section className="py-24 sm:py-32 px-6 lg:px-12 bg-[#F3EFE6] border-y border-[#0D1B2A]/12 text-[#0D1B2A]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-3xl">
              <div className="w-10 h-[2px] bg-[#B8924A] mb-6" />
              <h2
                className={`${serif} text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold leading-[1.14] text-[#0D1B2A]`}
              >
                Core Pillars of Expertise
              </h2>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 border-t border-l border-[#0D1B2A]/20">
              {corePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.number}
                    className="group p-8 sm:p-10 border-r border-b border-[#0D1B2A]/20 bg-[#FAF8F4] hover:bg-[#F3EFE6] transition-colors duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-semibold tracking-[0.2em] text-[#B8924A]">
                          {pillar.number}
                        </span>
                        <Icon className="w-5 h-5 text-[#B8924A] stroke-[1.5]" />
                      </div>

                      <h3
                        className={`${serif} text-2xl sm:text-[1.75rem] font-semibold text-[#0D1B2A] leading-snug`}
                      >
                        {pillar.number}. {pillar.title}
                      </h3>

                      {pillar.items.length > 0 && (
                        <ul className="mt-6 space-y-2.5 border-t border-[#0D1B2A]/15 pt-5 text-sm sm:text-base text-[#4A5568]">
                          {pillar.items.map((item) => (
                            <li key={item} className="flex items-start gap-2.5">
                              <span className="mt-2 w-1.5 h-1.5 bg-[#B8924A] shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          5. LEADERSHIP TEAM — Editorial Partner Profiles
         ===================================================================== */}
      <section className="py-24 sm:py-32 px-6 lg:px-12 bg-[#FAF8F4] border-b border-[#0D1B2A]/12 text-[#0D1B2A]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="pb-12 border-b border-[#0D1B2A]/15">
            <div className="w-10 h-[2px] bg-[#B8924A] mb-6" />
            <h2
              className={`${serif} text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold text-[#0D1B2A] leading-tight`}
            >
              Leadership Team
            </h2>
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-3 gap-10 lg:gap-12">
            {leaders.map((p, idx) => (
              <Reveal key={p.name} delay={idx * 100}>
                <article className="h-full flex flex-col justify-between pt-6 border-t-2 border-[#0D1B2A]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8E6B29]">
                      {p.role}
                    </p>
                    <h3
                      className={`${serif} text-2xl sm:text-3xl font-semibold text-[#0D1B2A] mt-2`}
                    >
                      {p.name}
                    </h3>
                    <div className="w-8 h-[1px] bg-[#0D1B2A]/20 my-5" />
                    <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. OUR SERVICES — Editorial Practice Directory
         ===================================================================== */}
      <section className="py-24 sm:py-32 px-6 lg:px-12 bg-[#F3EFE6] text-[#0D1B2A]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <div className="w-10 h-[2px] bg-[#B8924A] mb-6" />
                <h2
                  className={`${serif} text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold leading-[1.12] text-[#0D1B2A]`}
                >
                  Our Services
                </h2>
                <ul className="mt-6 space-y-2.5 border-t border-[#0D1B2A]/15 pt-5 text-sm font-medium text-[#0D1B2A]">
                  <li>Providing Onboarding Support System to Hospitals</li>
                  <li>Insurance Support System to Hospitals</li>
                  <li>Hospital Operations and Administration Support System to Hospitals</li>
                  <li>Healthcare Claims and Advisory Solution Support System to Hospitals</li>
                  <li>Home Healthcare</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#0D1B2A]/20 border-t border-b border-[#0D1B2A]/20">
              {servicesOverview.map((service, index) => (
                <Reveal key={service.title} delay={index * 50}>
                  <article className="py-10 sm:py-12">
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs font-semibold tracking-[0.18em] text-[#B8924A]">
                        0{index + 1}
                      </span>
                      <h3
                        className={`${serif} text-2xl sm:text-[1.85rem] font-semibold text-[#0D1B2A] leading-snug`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div className="mt-5 space-y-4 text-sm sm:text-base text-[#4A5568] leading-relaxed sm:pl-9">
                      {service.paragraphs.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}

                      {service.bullets && (
                        <ul className="mt-4 space-y-2.5">
                          {service.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2.5">
                              <span className="mt-2 w-1.5 h-1.5 bg-[#B8924A] shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {service.quote && (
                        <blockquote
                          className={`${serif} mt-6 pt-4 border-t border-[#0D1B2A]/15 text-xl sm:text-2xl italic text-[#0D1B2A]`}
                        >
                          {service.quote}
                        </blockquote>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================================
          7. CLOSING CTA — High-Contrast Architectural Closing Banner
         ===================================================================== */}
      <section className="relative py-24 sm:py-28 px-6 lg:px-12 bg-[#0D1B2A] text-white overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 w-1/3 h-full border-l border-white/[0.06]"
        />

        <Reveal className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="w-12 h-[2px] bg-[#B8924A] mb-7" />
            <h2
              className={`${serif} text-3xl sm:text-5xl font-semibold leading-[1.12] text-white`}
            >
              Connect with Mediastris Healthcare LLP
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Supporting hospitals, healthcare providers, insurance partners, and patients across Mumbai, Palghar, Dahanu, Surat, Bhopal, and Indore.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 lg:pl-8">
            <Link
              href="/contact"
              className={`group inline-flex items-center justify-between gap-4 bg-[#B8924A] hover:bg-[#C9A35B] text-[#0D1B2A] font-semibold py-4 px-7 text-sm tracking-wide transition-all duration-300 ${focus}`}
            >
              <span>Connect With Us</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}