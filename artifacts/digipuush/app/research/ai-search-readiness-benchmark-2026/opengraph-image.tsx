import { ImageResponse } from "next/og";

export const alt = "Digipuush AI Search Readiness Benchmark 2026 — 78% Weak or Very Weak";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0d1526",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "64px 84px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <div style={{ color: "#ffb08a", fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>
            DIGIPUUSH · ORIGINAL RESEARCH
          </div>
          <div style={{ display: "flex", fontSize: 48, fontWeight: 800, marginTop: 24 }}>
            AI SEARCH READINESS BENCHMARK 2026
          </div>
          <div style={{ alignItems: "baseline", display: "flex", gap: 28, marginTop: 38 }}>
            <div style={{ color: "#cf4014", display: "flex", fontSize: 148, fontWeight: 900 }}>
              78%
            </div>
            <div style={{ display: "flex", flexDirection: "column", fontSize: 34, fontWeight: 700 }}>
              <span>Weak or Very Weak</span>
              <span style={{ color: "#a3adc2", fontSize: 24, fontWeight: 500, marginTop: 10 }}>
                among the websites analyzed
              </span>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,.18)",
              color: "#c8cede",
              display: "flex",
              fontSize: 24,
              marginTop: 42,
              paddingTop: 24,
            }}
          >
            50 Companies · 5 Categories · 15 Readiness Factors
          </div>
        </div>
      </div>
    ),
    size,
  );
}