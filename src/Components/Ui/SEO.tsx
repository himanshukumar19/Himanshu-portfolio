import { Helmet } from "@dr.pogodin/react-helmet";
import { SITE_URL } from "../../utils/constants";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Himanshu Kumar",
  description = "Full Stack Developer from Hubballi, India. Building scalable web applications with the MERN stack and modern technologies.",
  keywords = "Himanshu Kumar, Full Stack Developer, MERN, React, Node.js, Web Developer, Portfolio",
  image = "/PfLogo.png",
  url = SITE_URL,
}) => {
  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Himanshu Kumar",
    jobTitle: "Full Stack Developer",
    description: description,
    url: url,
    image: image,
    sameAs: [
      "https://github.com/himanshukumar19",
      "https://www.linkedin.com/in/himanshukumar19/",
      "https://x.com/himanshu__2109",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hubballi",
      addressCountry: "India",
    },
    knowsAbout: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Express",
      "Full Stack Development",
      "REST APIs",
      "JavaScript",
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
