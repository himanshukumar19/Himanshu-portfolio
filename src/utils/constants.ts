// Time intervals
export const CLOCK_UPDATE_INTERVAL = 1000; // 1 second in milliseconds

export const SOCIAL_LINKS = {
  github: import.meta.env.VITE_GITHUB_URL || "https://github.com/himanshukumar19",
  linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/himanshukumar19/",
  twitter: import.meta.env.VITE_TWITTER_URL || "https://x.com/himanshu__2109",
  discord: import.meta.env.VITE_DISCORD_URL || "",
  instagram: import.meta.env.VITE_INSTAGRAM_URL || "",
} as const;

export const SITE_URL = import.meta.env.VITE_SITE_URL || "https://himanshu.dev";

// Location
export const LOCATION = "Hubballi, India";