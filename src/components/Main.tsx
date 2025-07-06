import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "./ui/button";
import { LiaArrowRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Main = () => {
  const imageRef = useRef(null);
  const spanRefs = useRef([]);
  const bannerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const emptypefumeRef = useRef(null);
  spanRefs.current = [];

  useEffect(() => {
    const tl = gsap.timeline();

    // Step 1: Banner background color
    tl.to(bannerRef.current, {
      // backgroundColor: "#f5f5dc38",
      duration: 1.5,
      delay: 0.2,
      ease: "power2.out",
    });

    // Step 2: Heading
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=1" // start 1s before banner ends
    );

    // Step 3: Paragraph 1
    tl.fromTo(
      paragraph1Ref.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4" // slight overlap with heading
    );

    // Step 4: Paragraph 2
    tl.fromTo(
      paragraph2Ref.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.5"
    );

    // Step 5: Image
    tl.fromTo(
      imageRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.6"
    );

    // Step 6: Spans (one after another)
    spanRefs.current.forEach((el, index) => {
      tl.fromTo(
        el,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        `+=${index === 0 ? 0.2 : 0.15}`
      );
    });

    // Step 7: Bottom perfume
    tl.fromTo(
      emptypefumeRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.7"
    );
  }, []);

  // Helper to push refs
  const addToSpanRefs = (el) => {
    if (el && !spanRefs.current.includes(el)) {
      spanRefs.current.push(el);
    }
  };

  return (
    <div
      ref={bannerRef}
      className="relative min-h-screen main-banner bg-black text-white transition-colors duration-1000 overflow-hidden"
    >
      <div className="w-full md:w-[95%] my-0 mx-auto p-0 md:p-4 flex">
        <div className="w-full lg:w-[80%] xl:w-[70%] p-4 md:p-0">
          <div className="relative">
            <h2
              ref={headingRef}
              className="my-4 md:my-0 font-[Coromorant] text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6.5rem] leading-[1] opacity-0"
            >
              Awaken Your Senses with Every Note
            </h2>
            <span
              ref={addToSpanRefs}
              className="absolute top-0 right-0 text-sm py-3.5 px-2 rounded-full opacity-90 bg-blue-50 "
            >
              smell
            </span>
            <span
              ref={addToSpanRefs}
              className="absolute top-12 right-24 text-sm py-3.5 px-2 rounded-full opacity-90 bg-green-50 "
            >
              touch
            </span>
            <span
              ref={addToSpanRefs}
              className="absolute bottom-12 right-12 lg:right-24 xl:right-10 text-sm py-3.5 px-2 rounded-full opacity-90 bg-red-50 "
            >
              emotion
            </span>
          </div>
          <p
            ref={paragraph1Ref}
            className="w-[90%] md:w-fit text-base md:text-xl lg:text-[1.3rem] xl:text-2xl p-1 text-white bg-zinc-700 opacity-0"
          >
            Discover luxury fragrances that define your personality.
          </p>
          <p
            ref={paragraph2Ref}
            className="my-4 font-sec p-2 font-[montserrat] text-base md:text-xl lg:text-[1.3rem] xl:text-2xl text-justify opacity-0"
          >
            Indulge in our carefully curated collection of perfumes crafted to
            captivate and inspire. Whether you're drawn to bold, seductive notes
            or soft, floral tones, our scents are designed to leave a lasting
            impression. Elevate your everyday with a touch of elegance — because
            <span className="font-sec p-0.5 px-1 italic text-base md:text-xl font-medium border-b border-solid border-red-500">
              you deserve to feel unforgettable.
            </span>
          </p>
          <div
            className="flex flex-col md:flex-row items-center opacity-0"
            ref={emptypefumeRef}
          >
            <img
              src="/assets/images/emptyperfumebg.png"
              alt="img"
              className="w-full md:w-1/2 xl:w-full"
            />
            <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl items-start">
              <small className="italic">
                "Let the fragrance bring your senses to life with each layer of
                its scent."
              </small>
              <p>
                Top notes:{" "}
                <span className="font-sec"> What you smell first</span>
              </p>
              <p>
                Heart (middle) notes :
                <span className="font-sec">
                  The main character of the perfume
                </span>
              </p>
              <p>
                Base notes:{" "}
                <span className="font-sec">
                  The long-lasting scent that lingers
                </span>
              </p>

              <Link to ="/search">
                <Button variant="default" className="">
                  Try Now <LiaArrowRightSolid />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <img
          ref={imageRef}
          src="/assets/images/handspray.png"
          alt="bannerimg"
          className="w-[45%] absolute right-0 md:right-[-8%] lg:right-0 xl:right-0 top-[10%] md:top-0 lg:top-[-8%] xl:top-[-18%]"
        />
      </div>
    </div>
  );
};

export default Main;
