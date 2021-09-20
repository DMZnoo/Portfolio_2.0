import NavBar from "../components/NavBar";
import HomeLayout from "../components/Layouts/HomeLayout";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Daniel Lee's Portfolio"
        description="Check out my portfolio to see what I've done and what I am passionate about."
        openGraph={{
          url: "https://www.danieljnwlee.com",
          title: "Daniel Lee's Portfolio",
          description:
            "Check out my portfolio to see what I've done and what I am passionate about.",
          site_name: "Daniel Lee's Portfolio",
        }}
      />
      <NavBar />
      <HomeLayout />
    </>
  );
}
