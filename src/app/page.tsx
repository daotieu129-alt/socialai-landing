/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const APP_LOGIN_URL = "https://social-ai-frontend-alpha.vercel.app/login";
const APP_REGISTER_URL = "https://social-ai-frontend-alpha.vercel.app/register";
const LIVE_DEMO_URL = "#";
const VIDEO_REVIEW_URL = "#";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070B14]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
            <span className="text-lg font-semibold">SocialAI Studio</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#product">Product</a>
            <a href="#features">Features</a>
            <a href="#screenshots">Screenshots</a>
            <a href="#who">Who it’s for</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={APP_LOGIN_URL}
              className="rounded-lg border border-white/10 px-4 py-2 text-sm"
            >
              Login
            </Link>
            <Link
              href={APP_REGISTER_URL}
              className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-medium"
            >
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              White-label Social Automation SaaS
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                ready to sell, not a demo
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-zinc-300">
              A full-stack, production-ready SaaS for Facebook Page automation:
              auto posting, AI content, media processing, scheduling and billing.
              Built to be launched, resold or customized.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={LIVE_DEMO_URL}
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black"
              >
                Live Demo
              </a>
              <a
                href={VIDEO_REVIEW_URL}
                className="rounded-xl border border-white/15 px-6 py-3 text-sm"
              >
                Video Walkthrough
              </a>
              <a
                href={APP_REGISTER_URL}
                className="rounded-xl border border-white/15 px-6 py-3 text-sm"
              >
                Open App
              </a>
            </div>
          </div>

          <div>
            <img
              src="/screenshots/dashboard.png"
              alt="Dashboard"
              className="rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= WHAT YOU ARE BUYING ================= */}
      <section
        id="product"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-20"
      >
        <h2 className="text-3xl font-semibold">What you are actually buying</h2>

        <p className="mt-4 max-w-3xl text-zinc-300">
          This is not a template, MVP or UI kit. You are purchasing a complete
          SaaS codebase that replaces months of engineering work.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ul className="space-y-4 text-zinc-200">
            <li>• Full frontend dashboard (React / Next.js)</li>
            <li>• Authentication, users, shops, permissions</li>
            <li>• Scheduler-based auto posting (cron + workers)</li>
            <li>• Facebook Page OAuth + posting pipeline</li>
            <li>• Media upload, background removal, image compose</li>
          </ul>

          <ul className="space-y-4 text-zinc-200">
            <li>• AI content generation pipeline</li>
            <li>• Database schema & production migrations</li>
            <li>• Billing & subscription logic</li>
            <li>• Job-claim workers (no duplicate runs)</li>
            <li>• Production-ready architecture</li>
          </ul>
        </div>
      </section>

      {/* ================= CORE FEATURES ================= */}
      <section
        id="features"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-20"
      >
        <h2 className="text-3xl font-semibold">Core product capabilities</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Facebook Page automation",
            "AI content generation",
            "Media processing pipeline",
            "Post scheduling & retry logic",
            "Multi-shop support",
            "Role-based access",
            "Billing & plans",
            "Operational dashboard",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SCREENSHOTS ================= */}
      <section
        id="screenshots"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-20"
      >
        <h2 className="text-3xl font-semibold">Product screenshots</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "login",
            "dashboard",
            "shops",
            "channels",
            "posts",
            "media",
            "ai-studio",
            "planner",
          ].map((img) => (
            <img
              key={img}
              src={`/screenshots/${img}.png`}
              alt={img}
              className="rounded-xl border border-white/10"
            />
          ))}
        </div>
      </section>

      {/* ================= WHO THIS IS FOR ================= */}
      <section
        id="who"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-20"
      >
        <h2 className="text-3xl font-semibold">Who this product is for</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Agencies</h3>
            <p className="mt-2 text-sm text-zinc-300">
              Launch your own social automation SaaS and resell to clients under
              your brand.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Founders</h3>
            <p className="mt-2 text-sm text-zinc-300">
              Skip MVP development and go straight to marketing and sales.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Product teams</h3>
            <p className="mt-2 text-sm text-zinc-300">
              Use as a base platform to extend or customize for niche markets.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold">
          Ready to launch or resell your own SaaS?
        </h2>

        <p className="mt-4 text-zinc-300">
          This codebase is built to be deployed, sold and scaled.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href={VIDEO_REVIEW_URL}
            className="rounded-xl border border-white/15 px-6 py-3 text-sm"
          >
            Watch walkthrough
          </a>
          <a
            href={APP_REGISTER_URL}
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-medium"
          >
            Open app
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} SocialAI Studio. All rights reserved.
      </footer>
    </main>
  );
}
