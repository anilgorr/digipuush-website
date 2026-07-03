import { Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function AuthorBox() {
  const { founder } = siteConfig;
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-line bg-mist p-6 sm:flex-row sm:items-start">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy text-lg font-bold text-white">
        AG
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-orange-dark">
          Written by
        </p>
        <p className="mt-1 text-base font-bold text-navy">{founder.name}</p>
        <p className="text-sm text-slate">{founder.role}</p>
        <p className="mt-2 text-sm leading-relaxed text-slate">{founder.bio}</p>
        <a
          href={founder.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-orange-dark hover:underline"
        >
          <Linkedin className="h-4 w-4" />
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
}
