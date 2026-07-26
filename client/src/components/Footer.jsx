import { Mail, Heart } from "lucide-react";
function Footer() {
  return (
    <footer className="bg-[#071428] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              LeadDesk Mini
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              A lightweight CRM solution that helps businesses capture,
              organize, and manage customer leads efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <a href="#features" className="hover:text-blue-400 transition">
                Features
              </a>

              <a href="#lead-form" className="hover:text-blue-400 transition">
                Get Started
              </a>

              <a href="/admin" className="hover:text-blue-400 transition">
                Admin Dashboard
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact
            </h3>

            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-blue-600 transition"
            >
              <Mail size={20} />
              <span>Email Us</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} LeadDesk Mini. All rights reserved.
          </p>

          <p className="text-sm flex items-center gap-2 text-gray-400">
            Built with <Heart size={16} className="text-red-500 fill-red-500" />
            for{" "}
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Digital Heroes Training Task
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;