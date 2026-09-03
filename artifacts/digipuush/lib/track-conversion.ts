/**
 * Record a conversion without sending lead details to a third party.
 *
 * The API key stays on the server; this browser helper only sends the current
 * page URL to the same-origin route after Netlify accepts the form.
 */
export async function trackOpenAiLeadCreated(): Promise<boolean> {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 4000);

  try {
    const response = await fetch("/openai-events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sourceUrl: window.location.href }),
      signal: controller.signal,
    });

    return response.ok;
  } catch {
    // Conversion tracking must never prevent the lead from reaching Netlify.
    return false;
  } finally {
    window.clearTimeout(timeout);
  }
}