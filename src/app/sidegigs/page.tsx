import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Layout,
  Smartphone,
  ShieldCheck,
  MapPin,
  TrendingUp,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="border-t border-border/60 my-2" />;
}

export default function SidegigsPage() {
  return (
    <main className="flex flex-col pb-32">
      {/* Back Nav */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors mb-14 group"
        >
          <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
      </BlurFade>

      {/* Hero */}
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="mb-16">
          <SectionLabel>Case Study</SectionLabel>
          <h1 className="text-6xl sm:text-7xl font-black tracking-tighter text-foreground leading-none mb-6">
            Side<span className="text-muted-foreground/40">gigs</span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-foreground tracking-tight leading-snug max-w-lg">
            Building India's platform for flexible work & side hustles.
          </p>
        </div>
      </BlurFade>

      {/* Meta strip */}
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="grid grid-cols-2 sm:grid-cols-4 border-y border-border/60 divide-x divide-border/60 mb-20">
          {[
            { label: "Timeline", value: "3 Months" },
            { label: "Role", value: "Product Designer & Founder" },
            { label: "Platform", value: "iOS · Android · Web" },
            { label: "Industry", value: "Future of Work" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-1.5 px-5 py-6 first:pl-0 last:pr-0">
              <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                {item.label}
              </span>
              <span className="text-sm font-semibold text-foreground leading-snug">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </BlurFade>

      {/* What is Sidegigs */}
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="grid sm:grid-cols-[1fr_2fr] gap-12 mb-20 items-start">
          <div>
            <SectionLabel>Overview</SectionLabel>
            <h2 className="text-2xl font-bold tracking-tight">What is Sidegigs?</h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Sidegigs is a platform that helps people discover flexible work opportunities while helping businesses find workers quickly — from weekend photography gigs to event staffing and freelance work.
            </p>
            <div className="border-l-2 border-foreground pl-5 py-1">
              <p className="text-lg font-semibold text-foreground leading-snug">
                "Make earning extra income as easy as ordering food online."
              </p>
            </div>
          </div>
        </div>
      </BlurFade>

      <Divider />

      {/* The Problem */}
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <div className="grid sm:grid-cols-[1fr_2fr] gap-12 my-20 items-start">
          <div>
            <SectionLabel>Problem</SectionLabel>
            <h2 className="text-2xl font-bold tracking-tight">The Gap We Found</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">For Workers</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Genuine side jobs hard to find",
                  "Opportunities scattered across WhatsApp",
                  "No centralized platform",
                  "No flexibility in traditional jobs",
                  "Hard to discover local work",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 rounded-full bg-foreground shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">For Employers</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Finding workers takes too long",
                  "Existing platforms are expensive",
                  "Small jobs don't fit job portals",
                  "Last-minute staffing is painful",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 rounded-full bg-foreground shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </BlurFade>

      <Divider />

      {/* Market Opportunity */}
      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <div className="my-20 relative overflow-hidden rounded-3xl bg-foreground text-background px-10 py-12">
          <TrendingUp className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 size-64 opacity-[0.06]" />
          <SectionLabel>
            <span className="text-background/50">Opportunity</span>
          </SectionLabel>
          <p className="text-2xl sm:text-3xl font-bold leading-snug tracking-tight max-w-lg relative z-10">
            India has millions seeking extra income, yet no platform focused entirely on side hustles exists.
          </p>
        </div>
      </BlurFade>

      <Divider />

      {/* Research */}
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <div className="grid sm:grid-cols-[1fr_2fr] gap-12 my-20 items-start">
          <div>
            <SectionLabel>Research</SectionLabel>
            <h2 className="text-2xl font-bold tracking-tight">Discovery</h2>
          </div>
          <div className="flex flex-col gap-10">
            {/* Interviews */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { n: "20+", l: "Students" },
                { n: "15+", l: "Freelancers" },
                { n: "12+", l: "Biz Owners" },
                { n: "10+", l: "Organizers" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col gap-1 border border-border/60 rounded-2xl p-4 text-center">
                  <span className="text-3xl font-extrabold text-foreground">{s.n}</span>
                  <span className="text-xs text-muted-foreground font-medium">{s.l}</span>
                </div>
              ))}
            </div>

            {/* Key findings */}
            <div className="flex flex-col divide-y divide-border/60 border border-border/60 rounded-2xl overflow-hidden">
              {[
                { p: "91%", t: "wanted transparent payment information" },
                { p: "84%", t: "wanted flexible schedules" },
                { p: "76%", t: "preferred local opportunities" },
                { p: "68%", t: "searched for side income every month" },
                { p: "57%", t: "found jobs through personal networks" },
                { p: "49%", t: "experienced scams on social platforms" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 px-5 py-4 hover:bg-muted/30 transition-colors">
                  <span className="text-xl font-extrabold text-foreground w-14 shrink-0">{item.p}</span>
                  <span className="text-sm text-muted-foreground">{item.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BlurFade>

      <Divider />

      {/* Competitive Analysis */}
      <BlurFade delay={BLUR_FADE_DELAY * 8}>
        <div className="grid sm:grid-cols-[1fr_2fr] gap-12 my-20 items-start">
          <div>
            <SectionLabel>Analysis</SectionLabel>
            <h2 className="text-2xl font-bold tracking-tight">Competitive Landscape</h2>
          </div>
          <div className="border border-border/60 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60 bg-muted/20">
                    <th className="px-5 py-3.5 text-left font-semibold text-foreground">Feature</th>
                    <th className="px-5 py-3.5 text-left font-bold text-foreground bg-foreground/5 border-r border-border/60">Sidegigs</th>
                    <th className="px-5 py-3.5 text-left font-medium text-muted-foreground">LinkedIn</th>
                    <th className="px-5 py-3.5 text-left font-medium text-muted-foreground">Upwork</th>
                    <th className="px-5 py-3.5 text-left font-medium text-muted-foreground">Indeed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {[
                    { f: "Local Gigs", sg: true, li: false, up: false, ind: "—" },
                    { f: "One-Time Jobs", sg: true, li: false, up: "—", ind: false },
                    { f: "Student Friendly", sg: true, li: "—", up: "—", ind: "—" },
                    { f: "Fast Hiring", sg: true, li: false, up: false, ind: false },
                    { f: "Side Hustle Focus", sg: true, li: false, up: false, ind: false },
                  ].map((row, i) => {
                    const Cell = ({ val }: { val: boolean | string }) =>
                      val === true ? (
                        <CheckCircle2 className="size-4 text-green-500" />
                      ) : val === false ? (
                        <XCircle className="size-4 text-border" />
                      ) : (
                        <span className="text-xs px-1.5 py-0.5 bg-muted rounded text-muted-foreground">{val}</span>
                      );
                    return (
                      <tr key={i} className="hover:bg-muted/10 transition-colors">
                        <td className="px-5 py-3.5 font-medium text-foreground">{row.f}</td>
                        <td className="px-5 py-3.5 bg-foreground/5 border-r border-border/60"><Cell val={row.sg} /></td>
                        <td className="px-5 py-3.5"><Cell val={row.li} /></td>
                        <td className="px-5 py-3.5"><Cell val={row.up} /></td>
                        <td className="px-5 py-3.5"><Cell val={row.ind} /></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </BlurFade>

      <Divider />

      {/* Design Principles */}
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <div className="grid sm:grid-cols-[1fr_2fr] gap-12 my-20 items-start">
          <div>
            <SectionLabel>Design</SectionLabel>
            <h2 className="text-2xl font-bold tracking-tight">Principles</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: <Layout className="size-5" />, title: "Simplicity First", desc: "Users find work in minutes, no complex onboarding needed." },
              { icon: <Smartphone className="size-5" />, title: "Mobile First", desc: "Designed for gig workers who live on their phones." },
              { icon: <ShieldCheck className="size-5" />, title: "Trust & Transparency", desc: "Every gig shows expectations and pay upfront." },
              { icon: <MapPin className="size-5" />, title: "Local Discovery", desc: "Nearby opportunities surface before remote listings." },
            ].map((p, i) => (
              <div key={i} className="p-5 border border-border/60 rounded-2xl flex flex-col gap-3 hover:bg-muted/20 transition-colors group">
                <div className="size-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {p.icon}
                </div>
                <p className="font-semibold text-foreground text-sm">{p.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      <Divider />

      {/* Process */}
      <BlurFade delay={BLUR_FADE_DELAY * 10}>
        <div className="grid sm:grid-cols-[1fr_2fr] gap-12 my-20 items-start">
          <div>
            <SectionLabel>Process</SectionLabel>
            <h2 className="text-2xl font-bold tracking-tight">How We Built It</h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { phase: "01", text: "Understand users & hiring workflows" },
              { phase: "02", text: "Define core user journeys" },
              { phase: "03", text: "Wireframe & test usability" },
              { phase: "04", text: "Build visual design system" },
              { phase: "05", text: "Validate through user feedback" },
            ].map((p, i) => (
              <div key={i} className="flex items-center gap-5 py-4 border-b border-border/60 last:border-0 group hover:text-foreground transition-colors">
                <span className="text-xs font-bold text-muted-foreground tabular-nums w-6 shrink-0">{p.phase}</span>
                <span className="text-sm font-medium text-foreground">{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      <Divider />

      {/* Core User Flows */}
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="grid sm:grid-cols-[1fr_2fr] gap-12 my-20 items-start">
          <div>
            <SectionLabel>Flows</SectionLabel>
            <h2 className="text-2xl font-bold tracking-tight">Core User Journeys</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { title: "Find Work", steps: ["Home", "Search", "Job Details", "Apply"] },
              { title: "Hire Workers", steps: ["Create Job", "Review Applicants", "Select Worker"] },
              { title: "Manage Activity", steps: ["Applications", "Messages", "Completed Gigs"] },
            ].map((f, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 border border-border/60 rounded-2xl hover:bg-muted/10 transition-colors">
                <span className="font-semibold text-sm text-foreground shrink-0">{f.title}</span>
                <div className="flex items-center gap-2 flex-wrap">
                  {f.steps.map((s, si) => (
                    <span key={si} className="flex items-center gap-2">
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-md">{s}</span>
                      {si < f.steps.length - 1 && <span className="text-border text-sm">→</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      <Divider />

      {/* Results */}
      <BlurFade delay={BLUR_FADE_DELAY * 12}>
        <div className="my-20">
          <div className="flex flex-col gap-2 mb-10">
            <SectionLabel>Outcomes</SectionLabel>
            <h2 className="text-2xl font-bold tracking-tight">Results & Impact</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 border border-border/60 rounded-2xl overflow-hidden divide-x divide-y divide-border/60">
            {[
              { n: "91%", l: "Job search flow completion" },
              { n: "68%", l: "Reduction in posting time" },
              { n: "3.2×", l: "Faster worker discovery" },
              { n: "87%", l: "User satisfaction" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-2 p-6 hover:bg-muted/20 transition-colors">
                <span className="text-4xl font-extrabold text-foreground tracking-tighter">{s.n}</span>
                <span className="text-xs text-muted-foreground font-medium leading-snug">{s.l}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 mt-4 gap-3">
            {[
              { n: "1,000+", l: "Waitlist signups" },
              { n: "250+", l: "Jobs in beta" },
              { n: "70%", l: "30-day retention" },
              { n: "4.8/5", l: "Avg. user rating" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col gap-1.5 p-6 bg-foreground text-background rounded-2xl relative overflow-hidden">
                <span className="text-3xl font-extrabold tracking-tighter relative z-10">{s.n}</span>
                <span className="text-xs text-background/60 font-medium relative z-10">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      <Divider />

      {/* What I Learned */}
      <BlurFade delay={BLUR_FADE_DELAY * 13}>
        <div className="grid sm:grid-cols-[1fr_2fr] gap-12 my-20 items-start">
          <div>
            <SectionLabel>Reflection</SectionLabel>
            <h2 className="text-2xl font-bold tracking-tight">What I Learned</h2>
          </div>
          <div className="flex flex-col gap-5 text-muted-foreground text-lg leading-relaxed">
            <p>Building Sidegigs reinforced that people don't just want jobs — they want <em>flexibility</em>.</p>
            <p>
              The biggest challenge wasn't creating another job platform. It was designing a product that makes earning additional income feel accessible, trustworthy, and effortless.
            </p>
            <p className="font-semibold text-foreground text-xl leading-snug border-t border-border/60 pt-6 mt-2">
              The future of work is flexible. Sidegigs is built to enable that shift.
            </p>
          </div>
        </div>
      </BlurFade>
    </main>
  );
}
