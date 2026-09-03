declare global {
  interface Window {
    oaiq?: (...args: unknown[]) => void;
  }
}

/**
 * Record a lead through the browser Measurement Pixel.
 *
 * The pixel automatically supplies the current page origin and timestamp.
 * This event contains no lead details and never blocks the form redirect.
 */
export function trackOpenAiLeadCreated(): void {
  if (typeof window !== "undefined" && typeof window.oaiq === "function") {
    window.oaiq("measure", "lead_created", {
      type: "customer_action",
    });
  }
}