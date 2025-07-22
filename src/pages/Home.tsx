import React from "react";
import Container from "../components/common/Container";
import Blog from "../components/ui/blog/Blog";

export default function Home() {
  return (
    <div>
      {/* banner */}
      <div className="bg-[#fbfbfb]">
        <Container>
          <img src="/banner.png" alt="banner" className="w-full" />
        </Container>
      </div>


      {/* blog */}
      <Blog/>
    </div>
  );
}