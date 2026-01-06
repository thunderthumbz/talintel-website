import { Mail } from "lucide-react";
import linkedinLogo from "@assets/download_1767304725284.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <span className="font-logo text-2xl font-bold tracking-tight">
              <span className="text-secondary">TAL</span>
              <span className="text-white">INTEL</span>
            </span>
            <p className="text-gray-300 italic font-light">
              "Talent. Intelligence. Clarity that scales."
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Stockholm, Sweden
            </p>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg text-secondary uppercase tracking-widest">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:hello@talintel.ai" 
                  className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@talintel.ai
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/talintel-consulting/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
                >
                  <img src={linkedinLogo} alt="LinkedIn" className="w-4 h-4 object-contain" />
                  Follow us on LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Privacy Column */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg text-secondary uppercase tracking-widest">Privacy</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              We respect your privacy. We do not collect, store, or share personal data beyond form submissions.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          © 2026 TALINTEL Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
