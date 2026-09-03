import { NextResponse } from "next/server";

const PIXEL_ID = "Qhwd1PzLMuQTtYxexmy3qA";
const EVENTS_URL = `https://bzr.openai.com/v1/events?pid=${PIXEL_ID}`;

function getSourceUrl(value: unknown, requestUrl: string) {
  if (typeof value !== "string" || value.length === 0) {
    return new URL("/contact", requestUrl).toString();
  }

  try {
    const sourceUrl = new URL(value);
    return sourceUrl.protocol === "http:" || sourceUrl.protocol === "https:"
      ? sourceUrl.toString()
      : new URL("/contact", requestUrl).toString();
  } catch {
    return new URL("/contact", requestUrl).toString();
  }
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_PIXEL_API_KEY;

  if (!apiKey) {
    console.error("OPENAI_PIXEL_API_KEY is not configured");
    return NextResponse.json({ recorded: false }, { status: 503 });
  }

  const body = await request.json().catch(() => ({}));
  const event = {
    id: crypto.randomUUID(),
    type: "lead_created",
    timestamp_ms: Date.now(),
    source_url: getSourceUrl(body?.sourceUrl, request.url),
    action_source: "web",
    data: {
      type: "customer_action",
    },
  };

  try {
    const response = await fetch(EVENTS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        validate_only: false,
        events: [event],
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error("OpenAI conversion event failed", {
        status: response.status,
        detail: detail.slice(0, 500),
      });
      return NextResponse.json({ recorded: false }, { status: 502 });
    }

    return NextResponse.json({ recorded: true });
  } catch (error) {
    console.error("OpenAI conversion event request failed", error);
    return NextResponse.json({ recorded: false }, { status: 502 });
  }
}