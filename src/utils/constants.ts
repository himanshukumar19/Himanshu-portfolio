// Time intervals
export const CLOCK_UPDATE_INTERVAL = 1000; // 1 second in milliseconds

export const SOCIAL_LINKS = {
  github: import.meta.env.VITE_GITHUB_URL || "http://github.com/DaKSH18r",
  linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/daksh-sangwan-129783255",
  twitter: import.meta.env.VITE_TWITTER_URL || "https://x.com/DaKSH18_",
  discord: import.meta.env.VITE_DISCORD_URL || "https://discord.gg/snPas8Ux",
  instagram: import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/daksh.sangwan?igsh=MWwyd3YzMGdhendhYg==",
} as const;

export const SITE_URL = import.meta.env.VITE_SITE_URL || "http://localhost:5173";

// Location
export const LOCATION = "New Delhi, India";