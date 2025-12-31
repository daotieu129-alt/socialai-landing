"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type Lang = "en" | "vi";

const TEXT = {
  en: {
    nav: {
      features: "Features",
      screenshots: "Screenshots",
      faq: "FAQ",
      contact: "Contact",
    },
    actions: {
      login: "Login",
      register: "Register",
      liveDemo: "Live Demo",
      video: "Video Review",
      openApp: "Open App",
      copyMsg: "Copy message",
      copied: "Copied",
      emailNow: "Email now",
    },
    hero: {
      badge: "Deploy-ready full-stack SaaS source code",
      title: "SocialAI Studio — White-label Social Automation SaaS",
      subtitle:
        "Auto Post Facebook Pages · Media AI pipeline · Scheduler · Billing logic",
      desc:
        "Full source code (frontend + backend + workers). Auto Post Facebook Pages is live. Messaging automation source is included (live usage depends on Meta permission approval).",
      proof: [
        { k: "Modules", v: "Dashboard / Shops / Channels / Posts / Media / AI Studio / Planner" },
        { k: "Auto Post", v: "Scheduler-based posting + permalink" },
        { k: "Pipeline", v: "Upload → Cutout → Marketing compose" },
      ],
    },
    features: {
      title: "What you get",
      items: [
        {
          title: "Auto Post Facebook Pages (Live)",
          desc: "OAuth, Page tokens, scheduler-based posting, and permalink generation.",
        },
        {
          title: "Scheduler + Job Claim",
          desc: "Cron-triggered jobs with claim mechanism to prevent duplicate runs.",
        },
        {
          title: "Media AI pipeline",
          desc: "Upload → background removal (cutout) → marketing image compose by style.",
        },
        {
          title: "Billing & plan limits (structure)",
          desc: "Subscription logic + usage limits (VNPAY sandbox ready, production structure).",
        },
        {
          title: "Dashboard & Planner UX",
          desc: "Weekly goals, next-best-action, health checks, content pipeline visibility.",
        },
        {
          title: "Messaging automation (code included)",
          desc: "Auto Inbox/Reply/Comment source included. Live usage depends on Meta permissions.",
        },
      ],
      note:
        "Messaging features may require Meta review/permissions for live operation. Source code is included.",
    },
    screenshots: {
      title: "Real product screenshots",
      desc: "Screenshots taken from the running product (no mockups).",
      items: [
        { src: "/screenshots/login.png", title: "Login", desc: "Authentication & workspace routing." },
        { src: "/screenshots/dashboard.png", title: "Dashboard", desc: "Goals, next-best-action, health checks." },
        { src: "/screenshots/shops.png", title: "Shops", desc: "Multi-shop/workspace management." },
        { src: "/screenshots/channels.png", title: "Channels", desc: "Facebook Pages, token health, reconnect flow." },
        { src: "/screenshots/posts.png", title: "Posts", desc: "Timeline states: scheduled/posted/failed." },
        { src: "/screenshots/media.png", title: "Media", desc: "Upload assets & marketing compose." },
        { src: "/screenshots/ai-studio.png", title: "AI Studio", desc: "Generate content + image + planner actions." },
        { src: "/screenshots/planner.png", title: "Planner", desc: "7-day planning, status tracking, timeline." },
      ],
      tip:
        "Place files into /public/screenshots/: login.png, dashboard.png, shops.png, channels.png, posts.png, media.png, ai-studio.png, planner.png",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "What exactly am I buying?",
          a: "Full source code for a white-label SaaS (frontend, backend, workers). No users, brand, or revenue included.",
        },
        {
          q: "Can I resell the source code?",
          a: "No. Resale/redistribution of source code is not allowed.",
        },
        {
          q: "Is Auto Inbox / Reply / Comment live?",
          a: "Source code is included. Live usage depends on Meta permission approval.",
        },
        {
          q: "Can I rebrand and sell it as my own SaaS?",
          a: "Yes. White-label/rebrand is allowed for your business (subject to your agreement).",
        },
      ],
    },
    contact: {
      title: "Contact & purchase",
      desc: "Email to request an invoice or ask questions. Include your use case and timeline.",
      footer: "One-time source code sale · No subscription",
      emailLabel: "Email",
      helper: "Copy and paste this message to email/DM.",
    },
  },

  vi: {
    nav: {
      features: "Tính năng",
      screenshots: "Hình ảnh",
      faq: "FAQ",
      contact: "Liên hệ",
    },
    actions: {
      login: "Đăng nhập",
      register: "Đăng ký",
      liveDemo: "Xem demo",
      video: "Video review",
      openApp: "Vào app",
      copyMsg: "Copy tin nhắn",
      copied: "Đã copy",
      emailNow: "Gửi email",
    },
    hero: {
      badge: "Mã nguồn SaaS full-stack sẵn sàng deploy",
      title: "SocialAI Studio — SaaS tự động hóa mạng xã hội (White-label)",
      subtitle: "Auto Post Facebook Page · Media AI pipeline · Scheduler · Billing logic",
      desc:
        "Bán full mã nguồn (frontend + backend + workers). Auto Post Facebook Pages chạy thật. Có code Auto Inbox/Reply/Comment (chạy live phụ thuộc duyệt quyền Meta).",
      proof: [
        { k: "Module", v: "Dashboard / Shops / Channels / Posts / Media / AI Studio / Planner" },
        { k: "Auto Post", v: "Đăng theo lịch + permalink" },
        { k: "Pipeline", v: "Upload → Tách nền → Compose marketing" },
      ],
    },
    features: {
      title: "Nhận được gì",
      items: [
        {
          title: "Auto Post Facebook Pages (Chạy thật)",
          desc: "OAuth, Page token, đăng theo lịch và tạo permalink bài đăng.",
        },
        {
          title: "Scheduler + Job Claim",
          desc: "Cron ổn định, claim job chống chạy trùng.",
        },
        {
          title: "Media AI pipeline",
          desc: "Upload → tách nền (cutout) → compose ảnh marketing theo style.",
        },
        {
          title: "Billing & plan limits (cấu trúc sẵn)",
          desc: "Logic subscription + giới hạn sử dụng (VNPAY sandbox, cấu trúc sẵn cho production).",
        },
        {
          title: "Dashboard & Planner UX",
          desc: "Mục tiêu tuần, next-best-action, health checks, hiển thị trạng thái pipeline.",
        },
        {
          title: "Messaging automation (có code)",
          desc: "Có code Auto Inbox/Reply/Comment. Chạy live phụ thuộc quyền Meta.",
        },
      ],
      note:
        "Các tính năng Messaging có thể cần Meta duyệt quyền để chạy live. Mã nguồn đã có sẵn.",
    },
    screenshots: {
      title: "Ảnh chụp sản phẩm thật",
      desc: "Ảnh chụp trực tiếp từ sản phẩm đang chạy (không dùng mockup).",
      items: [
        { src: "/screenshots/login.png", title: "Login", desc: "Đăng nhập & điều hướng workspace." },
        { src: "/screenshots/dashboard.png", title: "Dashboard", desc: "Mục tiêu tuần, next action, health checks." },
        { src: "/screenshots/shops.png", title: "Shops", desc: "Quản lý nhiều shop/workspace." },
        { src: "/screenshots/channels.png", title: "Channels", desc: "Facebook Pages, token health, reconnect." },
        { src: "/screenshots/posts.png", title: "Posts", desc: "Timeline: scheduled/posted/failed." },
        { src: "/screenshots/media.png", title: "Media", desc: "Upload assets & compose marketing." },
        { src: "/screenshots/ai-studio.png", title: "AI Studio", desc: "Tạo nội dung + ảnh + hành động nhanh." },
        { src: "/screenshots/planner.png", title: "Planner", desc: "Lịch 7 ngày, status tracking, timeline." },
      ],
      tip:
        "Đặt ảnh vào /public/screenshots/: login.png, dashboard.png, shops.png, channels.png, posts.png, media.png, ai-studio.png, planner.png",
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Mình đang mua gì?",
          a: "Full mã nguồn SaaS white-label (frontend, backend, workers). Không kèm user, thương hiệu hay doanh thu.",
        },
        {
          q: "Có được bán lại mã nguồn không?",
          a: "Không. Không được bán lại/redistribute mã nguồn.",
        },
        {
          q: "Auto Inbox / Reply / Comment đã chạy live chưa?",
          a: "Có mã nguồn. Chạy live phụ thuộc Meta duyệt quyền.",
        },
        {
          q: "Mình có thể đổi tên và bán thành SaaS của mình không?",
          a: "Có (tùy theo thỏa thuận sử dụng/license).",
        },
      ],
    },
    contact: {
      title: "Liên hệ & mua",
      desc: "Gửi email để nhận invoice hoặc hỏi thông tin. Nêu use-case và timeline.",
      footer: "Bán mã nguồn 1 lần · Không subscription",
      emailLabel: "Email",
      helper: "Copy và dán đoạn này vào email/DM.",
    },
  },
} as const;

function cn(...x: Array<string | false | null | undefined>) {
  return x.filter(Boolean).join(" ");
}

export default function Page() {
  const [lang, setLang] = useState<Lang>("en");
  const t = TEXT[lang];

  // ====== SET THESE ======
  const LIVE_DEMO_URL = "YOUR_LIVE_DEMO_URL";
  const VIDEO_URL = "YOUR_VIDEO_URL";
  const APP_LOGIN_URL = "http://localhost:5173/login";
  const APP_REGISTER_URL = "http://localhost:5173/register";
  const APP_HOME_URL = "http://localhost:5173";
  const CONTACT_EMAIL = "daotieu129@gmail.com";
  // =======================

  const mailto = useMemo(() => {
    const subject =
      lang === "en"
        ? "Purchase inquiry — SocialAI Studio source code"
        : "Liên hệ mua — Mã nguồn SocialAI Studio";

    const body =
      lang === "en"
        ? [
            "Hi,",
            "",
            "I'm interested in purchasing the SocialAI Studio source code.",
            "",
            "Use-case:",
            "Preferred license (non-exclusive):",
            "Timeline:",
            "",
            "Questions:",
            "",
            "Thanks.",
          ].join("\n")
        : [
            "Chào bạn,",
            "",
            "Mình quan tâm mua mã nguồn SocialAI Studio.",
            "",
            "Use-case:",
            "License mong muốn (non-exclusive):",
            "Timeline:",
            "",
            "Câu hỏi:",
            "",
            "Cảm ơn.",
          ].join("\n");

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [CONTACT_EMAIL, lang]);

  const copyText = useMemo(() => {
    return lang === "en"
      ? [
          "Hi,",
          "",
          "I'm interested in purchasing the SocialAI Studio source code.",
          "- Auto Post Facebook Pages (live)",
          "- Scheduler + job claim",
          "- Media pipeline (upload → cutout → marketing compose)",
          "- Billing logic structure",
          "- Messaging automation source included (Meta permissions required)",
          "",
          "Use-case:",
          "Timeline:",
          "Questions:",
          "",
          "Thanks.",
        ].join("\n")
      : [
          "Chào bạn,",
          "",
          "Mình quan tâm mua mã nguồn SocialAI Studio.",
          "- Auto Post Facebook Pages (chạy thật)",
          "- Scheduler + job claim",
          "- Media pipeline (upload → tách nền → compose marketing)",
          "- Billing logic (cấu trúc sẵn)",
          "- Có code Auto Inbox/Reply/Comment (chạy live phụ thuộc Meta permissions)",
          "",
          "Use-case:",
          "Timeline:",
          "Câu hỏi:",
          "",
          "Cảm ơn.",
        ].join("\n");
  }, [lang]);

  const [copied, setCopied] = useState(false);
  async function onCopy() {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <main className="min-h-screen bg-[#060A14] text-zinc-100">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_10%,rgba(99,102,241,0.36),transparent_60%),radial-gradient(900px_circle_at_75%_20%,rgba(168,85,247,0.24),transparent_60%),radial-gradient(1000px_circle_at_60%_85%,rgba(34,197,94,0.16),transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),rgba(0,0,0,0.88))]" />
        <div className="absolute inset-0 opacity-[0.22] [background-image:radial-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-[#060A14]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-emerald-400 p-[1px]">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#060A14]">
                <LogoMark className="h-6 w-6" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="text-xs text-zinc-400">{t.hero.badge}</div>
              <div className="text-sm font-semibold tracking-tight">
                SocialAI Studio
              </div>
            </div>
          </a>

          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-2 md:flex">
              <a
                href="#features"
                className="rounded-xl border border-white/10 bg-white/0 px-3 py-2 text-sm text-zinc-200 hover:bg-white/5"
              >
                {t.nav.features}
              </a>
              <a
                href="#screens"
                className="rounded-xl border border-white/10 bg-white/0 px-3 py-2 text-sm text-zinc-200 hover:bg-white/5"
              >
                {t.nav.screenshots}
              </a>
              <a
                href="#faq"
                className="rounded-xl border border-white/10 bg-white/0 px-3 py-2 text-sm text-zinc-200 hover:bg-white/5"
              >
                {t.nav.faq}
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/10 bg-white/0 px-3 py-2 text-sm text-zinc-200 hover:bg-white/5"
              >
                {t.nav.contact}
              </a>
            </nav>

            {/* Language */}
            <div className="ml-1 flex items-center gap-1 rounded-xl border border-white/10 bg-white/0 p-1">
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "rounded-lg px-2.5 py-1 text-xs",
                  lang === "en"
                    ? "bg-white text-black"
                    : "text-zinc-300 hover:bg-white/5"
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLang("vi")}
                className={cn(
                  "rounded-lg px-2.5 py-1 text-xs",
                  lang === "vi"
                    ? "bg-white text-black"
                    : "text-zinc-300 hover:bg-white/5"
                )}
              >
                VI
              </button>
            </div>

            {/* Login/Register */}
            <a
              href={APP_LOGIN_URL}
              className="ml-2 hidden rounded-xl border border-white/10 bg-white/0 px-3 py-2 text-sm text-zinc-200 hover:bg-white/5 sm:inline-flex"
            >
              {t.actions.login}
            </a>
            <a
              href={APP_REGISTER_URL}
              className="hidden rounded-xl bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-300 px-3 py-2 text-sm font-semibold text-black hover:opacity-95 sm:inline-flex"
            >
              {t.actions.register}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/0 px-3 py-1 text-xs text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {t.hero.badge}
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
              {t.hero.title}
            </h1>
            <p className="mt-3 text-base text-zinc-300">{t.hero.subtitle}</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300">
              {t.hero.desc}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={LIVE_DEMO_URL}
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/95"
              >
                {t.actions.liveDemo}
              </a>
              <a
                href={VIDEO_URL}
                className="rounded-2xl border border-white/10 bg-white/0 px-5 py-3 text-sm font-semibold text-zinc-100 hover:bg-white/5"
              >
                {t.actions.video}
              </a>
              <a
                href={APP_HOME_URL}
                className="rounded-2xl border border-white/10 bg-white/0 px-5 py-3 text-sm text-zinc-200 hover:bg-white/5"
              >
                {t.actions.openApp}
              </a>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {t.hero.proof.map((x) => (
                <div
                  key={x.k}
                  className="rounded-[18px] border border-white/10 bg-black/20 p-4"
                >
                  <div className="text-xs text-zinc-400">{x.k}</div>
                  <div className="mt-1 text-sm font-semibold text-zinc-100">
                    {x.v}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile auth buttons */}
            <div className="mt-6 flex gap-3 sm:hidden">
              <a
                href={APP_LOGIN_URL}
                className="flex-1 rounded-2xl border border-white/10 bg-white/0 px-5 py-3 text-sm text-zinc-100 hover:bg-white/5"
              >
                {t.actions.login}
              </a>
              <a
                href={APP_REGISTER_URL}
                className="flex-1 rounded-2xl bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-300 px-5 py-3 text-center text-sm font-semibold text-black hover:opacity-95"
              >
                {t.actions.register}
              </a>
            </div>
          </div>

          {/* Right: dashboard-like preview */}
          <div className="rounded-[28px] border border-white/10 bg-white/0 p-6 shadow-[0_0_70px_rgba(255,255,255,0.06)]">
            <div className="rounded-[22px] border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5">
              <div className="flex items-center justify-between">
                <div className="text-xs text-zinc-400">PRODUCT SNAPSHOT</div>
                <div className="rounded-full border border-white/10 bg-white/0 px-3 py-1 text-xs text-zinc-300">
                  PRO UI
                </div>
              </div>

              <div className="mt-3 text-lg font-semibold">Core flow</div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <MiniCard title="Connect Facebook" desc="Pages + token health" />
                <MiniCard title="Create content" desc="AI Studio + brief" />
                <MiniCard title="Compose images" desc="Cutout + styles" />
                <MiniCard title="Auto post" desc="Scheduler posting" />
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs text-zinc-400">NOTE</div>
                <div className="mt-1 text-sm text-zinc-300">
                  {lang === "en"
                    ? "Messaging automation source is included. Live usage may require Meta permission approval."
                    : "Có mã nguồn messaging automation. Chạy live có thể cần Meta duyệt quyền."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-6">
          <div className="text-sm text-zinc-400">{t.nav.features}</div>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight">
            {t.features.title}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {t.features.items.map((f) => (
            <div
              key={f.title}
              className="rounded-[24px] border border-white/10 bg-white/0 p-6"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-400/40 via-fuchsia-400/30 to-emerald-300/20 p-[1px]">
                  <div className="flex h-full w-full items-center justify-center rounded-xl bg-black/30">
                    <DotIcon />
                  </div>
                </div>
                <div>
                  <div className="text-lg font-semibold">{f.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-zinc-300">
                    {f.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[24px] border border-white/10 bg-black/20 p-5 text-sm text-zinc-300">
          {t.features.note}
        </div>
      </section>

      {/* Screenshots */}
      <section id="screens" className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-6">
          <div className="text-sm text-zinc-400">{t.nav.screenshots}</div>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight">
            {t.screenshots.title}
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-zinc-300">
            {t.screenshots.desc}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.screenshots.items.map((s) => (
            <Screenshot key={s.src} src={s.src} title={s.title} desc={s.desc} />
          ))}
        </div>

        <div className="mt-6 text-xs text-zinc-500">{t.screenshots.tip}</div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-6">
          <div className="text-sm text-zinc-400">{t.nav.faq}</div>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight">
            {t.faq.title}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {t.faq.items.map((x) => (
            <div
              key={x.q}
              className="rounded-[24px] border border-white/10 bg-white/0 p-6"
            >
              <div className="font-semibold">{x.q}</div>
              <div className="mt-2 text-sm leading-relaxed text-zinc-300">
                {x.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-16 pt-6">
        <div className="rounded-[28px] border border-white/10 bg-white/0 p-8">
          <div className="text-sm text-zinc-400">{t.nav.contact}</div>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-2 text-sm text-zinc-300">{t.contact.desc}</p>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-black/20 p-6">
              <div className="text-sm font-semibold">{t.contact.emailLabel}</div>
              <div className="mt-2 text-sm text-zinc-300">{CONTACT_EMAIL}</div>

              <a
                href={mailto}
                className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/95"
              >
                {t.actions.emailNow}
              </a>

              <div className="mt-3 text-xs text-zinc-500">
                {lang === "en"
                  ? "Tip: set LIVE_DEMO_URL and VIDEO_URL before sharing."
                  : "Gợi ý: nhớ set LIVE_DEMO_URL và VIDEO_URL trước khi gửi cho khách."}
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-black/20 p-6 lg:col-span-2">
              <div className="text-sm font-semibold">{t.actions.copyMsg}</div>
              <div className="mt-2 text-sm text-zinc-300">{t.contact.helper}</div>

              <pre className="mt-3 whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/30 p-4 text-xs text-zinc-200">
                {copyText}
              </pre>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={onCopy}
                  className="rounded-2xl border border-white/10 bg-white/0 px-5 py-3 text-sm font-semibold text-zinc-100 hover:bg-white/5"
                >
                  {copied ? t.actions.copied : t.actions.copyMsg}
                </button>
                <a
                  href={mailto}
                  className="rounded-2xl bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-300 px-5 py-3 text-sm font-semibold text-black hover:opacity-95"
                >
                  {t.actions.emailNow}
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="mx-auto mt-8 max-w-6xl px-2 text-xs text-zinc-500">
          © {new Date().getFullYear()} SocialAI Studio — {t.contact.footer}
        </footer>
      </section>
    </main>
  );
}

function MiniCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-[18px] border border-white/10 bg-black/20 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-xs text-zinc-300">{desc}</div>
    </div>
  );
}

function Screenshot({
  src,
  title,
  desc,
}: {
  src: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/0 p-4">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-xs text-zinc-400">{desc}</div>
        </div>
        <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300">
          UI
        </div>
      </div>

      <div className="overflow-hidden rounded-[18px] border border-white/10 bg-black/30">
        <Image
          src={src}
          alt={title}
          width={1400}
          height={900}
          className="h-auto w-full"
          priority={false}
        />
      </div>
    </div>
  );
}

function DotIcon() {
  return (
    <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.55)]" />
  );
}

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="g" x1="2" y1="2" x2="22" y2="22">
          <stop stopColor="#A5B4FC" />
          <stop offset="0.5" stopColor="#F0ABFC" />
          <stop offset="1" stopColor="#6EE7B7" />
        </linearGradient>
      </defs>

      <path
        d="M16.8 7.4c-.9-2-3.1-3.2-5.7-3.2-3 0-5.4 1.7-5.4 4 0 2 1.5 3 3.9 3.5l2.1.4c1.6.3 2.4.8 2.4 1.8 0 1.2-1.3 2.1-3.2 2.1-1.8 0-3.2-.7-3.9-2.1"
        stroke="url(#g)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6.2 16.6c.9 2 3.1 3.2 5.7 3.2 3 0 5.4-1.7 5.4-4 0-2-1.5-3-3.9-3.5l-2.1-.4c-1.6-.3-2.4-.8-2.4-1.8 0-1.2 1.3-2.1 3.2-2.1 1.8 0 3.2.7 3.9 2.1"
        stroke="url(#g)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}
