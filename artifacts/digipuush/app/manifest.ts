import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Digipuush",
    short_name: "Digipuush",
    description:
      "AI-first digital marketing agency helping Indian brands rank on Google and get cited by AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1224",
    theme_color: "#e94b16",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}