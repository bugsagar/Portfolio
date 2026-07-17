/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        {/* Header */}
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">All Projects →</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">More Projects & Achievements</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Explore my creative journey through work shots, experiments, achievements, and design process
            </p>
          </div>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-4">
          {DATA.hackathons.map((hackathon) => (
            <div
              key={hackathon.title}
              className="flex items-stretch gap-5 p-4 border border-border rounded-2xl bg-background hover:shadow-md transition-shadow duration-200"
            >
              {/* Image — full height on mobile, fixed size on sm+ */}
              <div className="shrink-0 w-20 self-stretch sm:w-32 sm:h-32 sm:self-auto">
                {hackathon.image ? (
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="w-full h-full object-cover rounded-xl border border-[#E6E8EE]"
                  />
                ) : (
                  <div className="w-full h-full bg-muted rounded-xl border border-[#E6E8EE]" />
                )}
              </div>

              {/* Right Content */}
              <div className="flex flex-col justify-between flex-1 gap-2 py-0.5 min-w-0 overflow-hidden">
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-foreground leading-snug text-sm sm:text-base">{hackathon.title}</h3>
                  {hackathon.description && (
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-1 sm:line-clamp-none">
                      {hackathon.description}
                    </p>
                  )}
                </div>

                {/* View Project Button */}
                {hackathon.links && hackathon.links.length > 0 ? (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {hackathon.links.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-medium px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:-translate-y-0.5"
                        style={{ border: "1px solid #D0D0D0", background: "white", color: "#121111" }}
                      >
                        {link.title || "View Project"}
                        <ArrowUpRight className="size-2.5 sm:size-3" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="mt-auto">
                    <span
                      className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-medium px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg"
                      style={{ border: "1px solid #D0D0D0", background: "white", color: "#121111" }}
                    >
                      View Project
                      <ArrowUpRight className="size-2.5 sm:size-3" />
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
