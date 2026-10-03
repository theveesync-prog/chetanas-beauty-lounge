"use client";

import { trackEvent } from "@/lib/analytics";

interface Props {
  href: string;
  location: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

// Thin client-side wrapper so server-component pages can still fire a
// whatsapp_click analytics event on click (event handlers can't be passed
// directly from a Server Component to a plain <a> tag).
export default function WhatsAppLink({ href, location, className, style, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { location })}
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}
