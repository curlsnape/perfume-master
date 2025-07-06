import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Main from "@/components/Main";
import NewProducts from "@/components/NewProducts";
import Main2 from "@/components/Main2";

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home_box">
        <Main2 />
        <NewProducts />
      </div>
    </div>
  );
};

export default Home;
