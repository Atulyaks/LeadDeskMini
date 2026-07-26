import LeadForm from "../components/LeadForm";
import { Rocket, ShieldCheck, BarChart3 } from "lucide-react";

function Landing() {
  return (
    <div className="bg-gray-50 dark:bg-slate-950 transition-colors duration-300">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-500 via-rose-500 to-red-600 text-white py-24">

        {/* Background Glow */}
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-red-400/30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-400/20 blur-3xl"></div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          {/* Left */}
          <div>

            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
              CRM • Lead Management • Dashboard
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-7xl">
              Capture Every Lead.
              <br />
              Grow Every
              <span className="text-blue-300"> Opportunity.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-red-100">
              LeadDesk Mini helps businesses collect, organize and manage
              customer inquiries from one beautiful dashboard.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#lead-form"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-red-600 shadow-lg transition hover:scale-105"
              >
                Get Started
              </a>

              <a
                href="#features"
                className="rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white/10"
              >
                Learn More
              </a>

            </div>

          </div>

          {/* Right */}
          <div
            id="lead-form"
            className="flex justify-center"
          >
            <LeadForm />
          </div>

        </div>
      </section>

      {/* FEATURES */}

      <section
        id="features"
        className="py-24 bg-white dark:bg-slate-900 transition-colors"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
              Why Choose LeadDesk Mini?
            </h2>

            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Everything you need to capture and manage customer leads.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-white dark:bg-slate-800 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                <Rocket className="text-blue-600" size={34} />
              </div>

              <h3 className="mb-4 text-2xl font-bold dark:text-white">
                Fast Lead Capture
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-300">
                Capture customer inquiries instantly using a clean and
                responsive lead form.
              </p>

            </div>

            <div className="rounded-3xl bg-white dark:bg-slate-800 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                <ShieldCheck className="text-green-600" size={34} />
              </div>

              <h3 className="mb-4 text-2xl font-bold dark:text-white">
                Secure Storage
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-300">
                Every lead is validated and securely stored inside a MySQL
                database.
              </p>

            </div>

            <div className="rounded-3xl bg-white dark:bg-slate-800 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
                <BarChart3 className="text-purple-600" size={34} />
              </div>

              <h3 className="mb-4 text-2xl font-bold dark:text-white">
                Smart Dashboard
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-300">
                Search leads, update their status and monitor everything from
                one dashboard.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-slate-900 py-20 text-center text-white">

        <div className="mx-auto max-w-5xl px-6">

          <h2 className="text-5xl font-bold">
            Ready to Manage Your Leads Better?
          </h2>

          <p className="mt-6 text-xl text-gray-300">
            Join businesses simplifying their customer management with
            LeadDesk Mini.
          </p>

          <a
            href="#lead-form"
            className="mt-10 inline-block rounded-xl bg-red-500 px-8 py-4 font-semibold transition hover:bg-red-600"
          >
            Submit Your First Lead
          </a>

        </div>

      </section>

    </div>
  );
}

export default Landing;