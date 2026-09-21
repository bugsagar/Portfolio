"use client";

"use client";

import Tetris from "@/components/originkit/ui/footer-02/tetris";

function asset(file: string) {
  return `/originkit/footer-02/${file}`;
}

const LINK_COLUMNS = [
  {
    title: "Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Other",
    links: [
      { label: "Automation", href: "#automation" },
      { label: "Product Overview", href: "#product" },
      { label: "Documentation", href: "#docs" },
      { label: "Integration", href: "#integration" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "#privacy" },
      { label: "License", href: "#license" },
      { label: "Terms & Conditions", href: "#terms" },
    ],
  },
] as const;

const SOCIAL_LINKS = [
  {
    label: "X",
    href: "https://x.com",
    icon: "x.svg",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: "instagram.svg",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "linkedin.svg",
  },
] as const;

const SOCIAL_SHADOW =
  "0px 17px 2.5px rgba(0,0,0,0), 0px 11px 2px rgba(0,0,0,0.01), 0px 6px 2px rgba(0,0,0,0.05), 0px 3px 1.5px rgba(0,0,0,0.09), 0px 1px 1px rgba(0,0,0,0.1)";

export function Footer() {
  return (
    <footer
      aria-label="Notrix footer"
      className="relative isolate mx-auto w-full min-h-[268px] overflow-hidden rounded-[12px] bg-[#0b0b0b]"
    >
      {}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[268px] overflow-hidden"
      >
        <Tetris
          boardColor="#212121"
          colors={["#FDF9ED"]}
          cellSize={20}
          gap={0}
          rounded={20}
          dropSpeed={1}
          movement={2}
          startFilled={true}
        />
      </div>
    </footer>
  );
}
