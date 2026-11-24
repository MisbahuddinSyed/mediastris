import React from 'react';
import { Cormorant_Garamond } from 'next/font/google';
import { ShieldCheck } from 'lucide-react';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const serif = cormorant.className;

const Footer = () => {
  return (
    <div>
      <footer className="w-screen bg-[#08111B] text-slate-400 pt-16 pb-12 px-6 lg:px-12 border-t border-white/10 text-sm">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          <div className="md:col-span-5 pr-4">
            <div className="flex items-center gap-2.5 text-white font-semibold text-xl mb-4">
              <ShieldCheck className="w-5 h-5 text-[#B8924A]" />
              <span className={`${serif} text-2xl tracking-tight`}>MediAstris</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Providing end-to-end medical pre-authorizations, claim filing, and reimbursement recovery for health institutions and individual insured clients.
            </p>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-xs uppercase tracking-[0.18em] text-[#D4AF6A] font-semibold mb-4">
              Services
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>Hospital Revenue Cycle</li>
              <li>Pre-Authorization Desk</li>
              <li>Claim Denial Appeals</li>
              <li>Patient Reimbursement</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-xs uppercase tracking-[0.18em] text-[#D4AF6A] font-semibold mb-4">
              Company
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>About Us</li>
              <li>Partner Hospitals</li>
              <li>Privacy Policy</li>
              <li>HIPAA Compliance</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-xs uppercase tracking-[0.18em] text-[#D4AF6A] font-semibold mb-4">
              Support
            </h5>
            <p className="text-xs text-slate-300">Email: xyz@abc.com</p>
            <p className="text-xs text-slate-300 mt-2">Helpdesk: 123456789</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} MediAstris Inc. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;