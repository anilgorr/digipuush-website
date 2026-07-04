const encode = (data: Record<string, string>): string =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

/**
 * Submit a lead to Netlify Forms.
 *
 * Netlify detects the "contact" form at deploy time from the static
 * `public/__forms.html` file, then intercepts POSTs to that path whose body
 * carries a matching `form-name`. Every submission is stored in the Netlify
 * dashboard (Forms tab) and can be emailed via a form notification.
 *
 * Note: capture only happens on the deployed Netlify site. In local/preview
 * environments there is no Netlify backend, so submissions are not recorded.
 */
export async function submitToNetlifyForms(
  fields: Record<string, string>,
): Promise<void> {
  const res = await fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...fields }),
  });

  if (!res.ok) {
    throw new Error("Something went wrong. Please try again.");
  }
}
