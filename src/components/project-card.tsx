/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Lock, Mail, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

function ProtectedModal({ title, onClose }: { title: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full flex flex-col items-center gap-5 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        style={{ border: "1px solid #E5E5E5" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="size-4" />
        </button>

        {/* Lock icon */}
        <div className="flex items-center justify-center size-14 rounded-full bg-gray-50 border border-[#E5E5E5]">
          <Lock className="size-6 text-gray-500" />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="text-base font-semibold text-gray-900">{title} is password protected</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Contact me and I'll send you the link to the full case study.
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="mailto:design.sagarmanohar@gmail.com"
          className="flex items-center gap-2 w-full justify-center rounded-xl py-2.5 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          style={{ background: "#111" }}
        >
          <Mail className="size-4" />
          Contact Me
        </a>
      </div>
    </div>
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  protected?: boolean;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  protected: isProtected,
}: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <ProtectedModal title={title} onClose={() => setShowModal(false)} />
      )}
      <div
        className={cn(
          "flex flex-col h-full border border-border rounded-xl overflow-hidden transition-all duration-200",
          className,
          (href || isProtected) ? "cursor-pointer hover:ring-2 hover:ring-muted" : ""
        )}
      >
        <div className="relative shrink-0">
          <Link
            href={href || "#"}
            target={href ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={cn("block", !href && !isProtected && "pointer-events-none")}
          >
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-48 object-cover"
              />
            ) : image ? (
              <ProjectImage src={image} alt={title} />
            ) : (
              <div className="w-full h-48 bg-muted" />
            )}
          </Link>

        </div>
        <div className="p-6 flex flex-col gap-3 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">{title}</h3>
              <time className="text-xs text-muted-foreground">{dates}</time>
            </div>
            <Link
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              aria-label={`Open ${title}`}
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
            <Markdown>{description}</Markdown>
          </div>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-auto">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                  variant="outline"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          <button
            onClick={(e) => {
              if (!href && !isProtected) {
                e.preventDefault();
                return;
              }
              isProtected ? setShowModal(true) : window.open(href, "_blank");
            }}
            className={cn(
              "mt-2 flex items-center justify-center gap-1.5 w-full rounded-lg py-2 text-xs font-medium transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none",
              !href && !isProtected && "cursor-not-allowed opacity-70 hover:shadow-none hover:-translate-y-0"
            )}
            style={{ border: "1px solid #D0D0D0", background: "white", color: "#222" }}
            disabled={!href && !isProtected}
          >
            {isProtected && <Lock className="h-3 w-3 text-gray-400" />}
            {(!href && !isProtected) ? "Coming soon" : "View Case Study"}
            {(href || isProtected) ? <ArrowUpRight className="h-3.5 w-3.5" /> : null}
          </button>
        </div>
      </div>
    </>
  );
}
