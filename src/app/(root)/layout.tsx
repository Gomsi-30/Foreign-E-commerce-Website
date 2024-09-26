import React from 'react';
import Nav from './_components/navbar/nav';
import ContentWithLogoWrapper from './_components/navbar/contentWithLogoWrapper';
import Footer from './_components/navbar/foot';
import ReduxProvider from './_components/redux/reduxProvider'; 
import type { Metadata } from "next";

type LayoutProps = {
    children: React.ReactNode
}
export const metadata: Metadata = {
  metadataBase: new URL("https://trulyroselle.netlify.app/"),
  title: { default: "Trulyroselle", template: `%s | Trulyroselle` },
  description: "Trulyroselle",
  openGraph: {
    url: "/",
    title: "Trulyroselle",
    description: "Trulyroselle",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trulyroselle",
    description: "Trulyroselle",
    images: ["/logo.png"],
  },
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <ReduxProvider> 
        <Nav />
        <main><ContentWithLogoWrapper /></main>
        <main className='pt-40'>{children}</main>
        <main className='pt-32'><Footer /></main>
      </ReduxProvider>
    </div>
  );
};

export default Layout;
