import type { NextConfig } from "next";

const config: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/sections/:slug.html",
        destination: "/notes/:slug",
        permanent: true,
      },
      {
        source: "/practice-exam/exams.html",
        destination: "/practice",
        permanent: true,
      },
      {
        source: "/practice-exam/:slug.html",
        destination: "/practice/:slug",
        permanent: true,
      },
      {
        source: "/study-guide.html",
        destination: "/study-guide",
        permanent: true,
      },
      {
        source: "/mind-map-aws-ccp.html",
        destination: "/topic-map",
        permanent: true,
      },
    ];
  },
};
export default config;
