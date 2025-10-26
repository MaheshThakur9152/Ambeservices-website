import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Ambe Service Facilities Pvt Ltd",
  description: "Learn about Ambe Service Facilities - an entrepreneurial real estate platform unifying development and services. Meet our team, values, and commitment to excellence.",
  keywords: "about ambe service, company information, leadership team, real estate development, facility management, rushabh vora",
  openGraph: {
    title: "About Us - Ambe Service Facilities Pvt Ltd",
    description: "Learn about Ambe Service Facilities - an entrepreneurial real estate platform unifying development and services.",
    url: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}