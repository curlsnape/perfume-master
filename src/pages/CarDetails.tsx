import { useRef, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { carData, Car_Data } from "@/Data";
import { GoArrowLeft } from "react-icons/go";
import { SlSpeedometer } from "react-icons/sl";
import { BsCcCircle, BsFuelPumpDiesel } from "react-icons/bs";
import { CgColorBucket } from "react-icons/cg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdDoubleArrow, MdOutlineAppRegistration } from "react-icons/md";
import { GiToolbox, GiCartwheel, GiCarWheel } from "react-icons/gi";
import { IoDocumentsOutline } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import BackToTop from "@/components/BackToTop";

gsap.registerPlugin(ScrollTrigger);

const CarDetails = () => {
  const { carid, carname } = useParams();
  const navigate = useNavigate();

  const [carDisplayList, setCarDisplayList] = useState<Car_Data[]>([]);
  const tyreRef = useRef<HTMLImageElement | null>(null);
  const tyreTextRef = useRef<HTMLHeadingElement | null>(null);
  const tyreBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const parsedId = Number(carid);
    const decodedCarName = decodeURIComponent(carname || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

    const totalCars = carData.length;

    if (totalCars === 0) {
      navigate("/search");
      return;
    }

    const currentIndex = carData.findIndex(
      (car) =>
        car.id === parsedId && car.carname.toLowerCase() === decodedCarName
    );

    if (currentIndex === -1) {
      navigate("/search");
      return;
    }

    const currentCar = carData[currentIndex];

    // If only one car, don't show "next"
    if (totalCars === 1) {
      setCarDisplayList([currentCar]);
    } else {
      const nextIndex = (currentIndex + 1) % totalCars;
      const nextCar = carData[nextIndex];
      setCarDisplayList([currentCar, nextCar]);
      // console.log(carDisplayList)
    }
  }, [carid, carname, navigate]);

  useEffect(() => {
    if (!tyreRef.current || !tyreTextRef.current || !tyreBarRef.current) return;

    const tyre = tyreRef.current;
    const text = tyreTextRef.current;
    const bar = tyreBarRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: tyre,
        start: "top 80%",
        end: "+=550",
        scrub: 1.5,
      },
    });

    // Move and rotate the tyre
    tl.to(tyre, {
      x: "80vw",
      rotation: 720,
      ease: "power1.out",
    });

    // Fade in text
    tl.to(
      text,
      {
        opacity: 1,
        ease: "none",
      },
      "<"
    );

    // Fade in tyre bar slightly after
    tl.to(
      bar,
      {
        opacity: 1,
        ease: "power1.out",
      },
      "<0"
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [carDisplayList]);

  const numberPlateFull = carDisplayList[0]?.number_plate || "";
  const [numberPlate, rtoInfo] = numberPlateFull.split(" (");
  const rtoDisplay = rtoInfo ? `(${rtoInfo}` : "";

  const handleBuyNow = () => {
    const car = carDisplayList[0];
    if (!car) return;

    const carName = encodeURIComponent(car.carname || "N/A");
    const color = encodeURIComponent(car.color || "N/A");
    const numberPlate = encodeURIComponent(car.number_plate || "N/A");
    const image = encodeURIComponent(car.thumb_img || "");

    const message = `Hi, I'm interested in buying this car:\n\n *Car Name:* ${carName}\n *Color:* ${color}\n *Number Plate:* ${numberPlate}\n *Image:* ${image}`;

    const phoneNumber = "9920202332"; // Replace with your or dealer's WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  const splitOwnerText = (owner: string | null | undefined) => {
    if (!owner || owner.toUpperCase() === "NULL") {
      return { number: "?", suffix: "", label: "Owner" };
    }

    const match = owner.match(/^(\d+)([A-Z]{2})\s+(OWNER)$/i);
    if (!match) {
      return { number: owner, suffix: "", label: "" };
    }

    return {
      number: match[1], // "1"
      suffix: match[2], // "ST"
      label: match[3], // "OWNER"
    };
  };

  const { number, suffix, label } = splitOwnerText(carDisplayList[0]?.owner);

  return (
    <div className="p-4 flex gap-2 lg:gap-4 w-full lg:w-[95%] my-0 mx-auto relative">
      <Link to="/search" className="absolute md:static top-0 left-[2%]">
        <GoArrowLeft className="text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] p-1 md:p-2 lg:p-4 border-[1px] border-solid border-gray-500 rounded-full transition-all ease-in duration-200 cursor-pointer hover:bg-[#fde047] hover:border-none" />
      </Link>

      {/* ------------current----------------- */}
      <div className="w-full md:w-[95%] my-0 mx-auto bg-white rounded-lg">
        {carDisplayList[0] && (
          <>
            <section key={carDisplayList[0]?.id} className=" ">
              <div className=" p-4 flex flex-col gap-2 bg-[image:var(--bg-banner)] rounded-lg">
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-xl md:text-3xl lg:text-5xl py-1 font-semibold border-b-[1px] border-solid border-red-600 font-clash">
                      {carDisplayList[0]?.carname}
                    </h3>
                    <span className="text-base lg:text-xl text-gray-500 italic">
                      {carDisplayList[0]?.color}
                    </span>
                  </div>
                  <img
                    src={
                      carDisplayList[0]?.thumb_img || "/assets/images/hulk.png"
                    }
                    alt={carDisplayList[0]?.carname}
                    className="w-[30rem] md:w-[45rem] lg:w-[60rem] h-[15rem] md:h-[25rem] lg:h-[35rem]  object-contain"
                  />
                </div>
                <div className="flex flex-col gap-8">
                  <p className="text-lg text-gray-500">
                    <span className="underline">Price</span> <br />
                    <span
                      className={`text-4xl lg:text-6xl font-medium ${
                        carDisplayList[0]?.asking_price === "N/A" ||
                        carDisplayList[0]?.asking_price === ""
                          ? "text-gray-500"
                          : "text-green-500"
                      } `}
                    >
                      {carDisplayList[0]?.asking_price === "N/A" ||
                      carDisplayList[0]?.asking_price === ""
                        ? "Price not available"
                        : `₹ ${carDisplayList[0]?.asking_price}`}
                    </span>
                  </p>
                  <div className="flex gap-6 md:gap:10 lg:gap-12 flex-wrap">
                    {/* Kilometer Ran */}
                    {carDisplayList[0]?.kilometer_ran &&
                      carDisplayList[0].kilometer_ran.toLowerCase() !==
                        "null" && (
                        <div className="flex gap-4">
                          <SlSpeedometer className="text-5xl bg-white p-3.5 rounded-md shadow-md" />
                          <p className="leading-5">
                            <span className="text-zinc-900 font-medium">
                              {carDisplayList[0].kilometer_ran} km
                            </span>
                            <br />
                            <span className="text-[0.95rem] text-slate-600">
                              Mileage of the car
                            </span>
                          </p>
                        </div>
                      )}

                    {/* Fuel Type */}
                    {carDisplayList[0]?.fuel_type &&
                      carDisplayList[0].fuel_type.toLowerCase() !== "null" && (
                        <div className="flex gap-4">
                          <BsFuelPumpDiesel className="text-5xl bg-white p-3.5 rounded-md shadow-md" />
                          <p className="leading-5">
                            <span className="text-zinc-900 font-medium">
                              {carDisplayList[0].fuel_type}
                            </span>
                            <br />
                            <span className="text-[0.95rem] text-slate-600">
                              Fuel consumption
                            </span>
                          </p>
                        </div>
                      )}

                    {/* CC */}
                    {carDisplayList[0]?.cc &&
                      carDisplayList[0].cc.toLowerCase() !== "null" && (
                        <div className="flex gap-4">
                          <BsCcCircle className="text-5xl bg-white p-3.5 rounded-md shadow-md" />
                          <p className="leading-5">
                            <span className="text-zinc-900 font-medium">
                              {carDisplayList[0].cc}
                            </span>
                            <br />
                            <span className="text-[0.95rem] text-slate-600">
                              Engine capacity (CC)
                            </span>
                          </p>
                        </div>
                      )}

                    {/* Color */}
                    {carDisplayList[0]?.color &&
                      carDisplayList[0].color.toLowerCase() !== "null" && (
                        <div className="flex gap-4">
                          <CgColorBucket className="text-5xl bg-white p-3.5 rounded-md shadow-md" />
                          <p className="leading-5">
                            <span className="text-zinc-900 font-medium">
                              {carDisplayList[0].color}
                            </span>
                            <br />
                            <span className="text-[0.95rem] text-slate-600">
                              Color
                            </span>
                          </p>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </section>
            <section className="p-4">
              <p>
                <span className="font-clash text-[6rem] md:text-[10rem] lg:text-[14rem] text-slate-300">
                  {number}
                  <sup>
                    <small className="lowercase">{suffix}</small>
                  </sup>
                </span>

                <span className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-thin text-slate-700 uppercase">
                  Owner
                </span>
              </p>

              <div className="w-full my-8 md:my-4 relative">
                <h4
                  ref={tyreTextRef}
                  className="text-[3rem] md:text-[6rem] lg:text-[7rem] xl:text-[10rem] font-medium uppercase text-[#b0b4f35e] absolute right-0 opacity-0 transition-opacity duration-500 tyreText"
                >
                  Tyre Health
                </h4>

                <img
                  ref={tyreRef}
                  src="/assets/images/tyre.png"
                  alt="tyre"
                  className="w-[10rem] md:w-[12rem] lg:w-[14rem] xl:w-[16rem]"
                />

                <div
                  ref={tyreBarRef}
                  className="flex justify-end absolute top-[-15%] right-0 opacity-0 transition-opacity duration-500"
                >
                  <div className="relative w-[16rem] h-12 shadow-md rounded-md overflow-hidden bg-[#fafdff]">
                    {/* Filled part */}
                    <div
                      className="h-full bg-yellow-300"
                      style={{ width: carDisplayList[0]?.tyre_health }}
                    ></div>

                    {/* Diagonal lines on the remaining part */}
                    <div
                      className="absolute top-0 right-0 h-full bg-[repeating-linear-gradient(-45deg,#ccc_0px,#ccc_2px,transparent_2px,transparent_6px)]"
                      style={{
                        width: `calc(100% - ${carDisplayList[0]?.tyre_health})`,
                      }}
                    ></div>

                    {/* Percentage label */}
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 backdrop-blur rounded text-sm font-semibold text-zinc-900">
                      {carDisplayList[0]?.tyre_health}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full my-14 md:my-8 p-5 md:p-8 lg:p-12 flex justify-between flex-wrap gap-2 bg-[#0c1f0c] text-white rounded-b-3xl">
                {carDisplayList[0]?.registration === "NULL" ? (
                  ""
                ) : (
                  <div className="text-sm md:text-base lg:text-lg text-center md:text-start">
                    <h4 className="font-medium flex items-center gap-1">
                      <MdOutlineAppRegistration />{" "}
                      <span className="text-[#8ce700]">Registration</span>
                    </h4>
                    <p>{carDisplayList[0]?.registration}</p>
                  </div>
                )}
                {carDisplayList[0]?.service_history === "NULL" ? (
                  ""
                ) : (
                  <div className="text-sm md:text-base lg:text-lg text-center md:text-start">
                    <h4 className="font-medium flex items-center gap-1">
                      <GiToolbox />{" "}
                      <span className="text-[#8ce700]">Service History</span>
                    </h4>
                    <p>{carDisplayList[0]?.service_history}</p>
                  </div>
                )}
                {carDisplayList[0]?.insurance === "NULL" ? (
                  ""
                ) : (
                  <div className="text-sm md:text-base lg:text-lg text-center md:text-start">
                    <h4 className="font-medium flex items-center gap-1">
                      <IoDocumentsOutline />{" "}
                      <span className="text-[#8ce700]">Insurance</span>
                    </h4>
                    <p>{carDisplayList[0]?.insurance}</p>
                  </div>
                )}
                {carDisplayList[0]?.key_type === "NULL" ? (
                  ""
                ) : (
                  <div className="text-sm md:text-base lg:text-lg text-center md:text-start">
                    <h4 className="font-medium flex items-center gap-1">
                      <GiCartwheel />{" "}
                      <span className="text-[#8ce700]">Key Type</span>
                    </h4>
                    <p>{carDisplayList[0]?.key_type}</p>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center flex-col gap-1 ">
                <div className="relative">
                  <img
                    src="/assets/images/number plate.png"
                    alt="img"
                    className="w-full h-[5rem] md:h-full"
                  />
                  <p className="text-xl md:text-3xl lg:text-4xl font-semibold text-zinc-800 absolute top-0 right-0 leading-[1] w-[80%] p-[5px] h-full flex items-center justify-center text-center">
                    {numberPlate}
                  </p>
                </div>
                <p className="text-sm text-gray-500 italic">{rtoDisplay}</p>
              </div>
              <div className="flex items-center justify-center gap-3 my-6  md:m-4 flex-wrap">
                <Button
                  className="w-fit opacity-80 transition-all ease-in duration-300 hover:opacity-100"
                  onClick={handleBuyNow}
                >
                  Buy Now{` `}
                  <GiCarWheel />
                </Button>
                <Link
                  to={`/search/${carDisplayList[1]?.id}/${encodeURIComponent(
                    carDisplayList[1]?.carname
                  )}`}
                  className="flex items-center justify-center gap-2"
                >
                  <Button
                    className="w-fit opacity-80 transition-all ease-in duration-300 hover:opacity-100"
                    variant="ghost"
                  >
                    Next{` `}
                    <MdDoubleArrow />
                  </Button>
                </Link>
              </div>
            </section>
          </>
        )}
      </div>

      {/* ----------next---------------- */}
      <Link
        to={`/search/${carDisplayList[1]?.id}/${encodeURIComponent(
          carDisplayList[1]?.carname
        )}`}
      >
        <div
          key={carDisplayList[1]?.id}
          className="absolute right-0 top-[5%] md:top-[1%] lg:top-0 bg-[#f5f5dc] rounded-lg shadow-md group transition-all duration-300 ease-in "
        >
          <img
            src={carDisplayList[1]?.thumb_img || "/assets/images/hulk.png"}
            alt={carDisplayList[1]?.carname}
            className="w-[7rem] md:w-[10rem] lg:w-[14rem] h-[4rem] md:h-[6rem] lg:h-[8rem] object-contain p-2 backdrop-contrast-50 group-hover:backdrop-brightness-50 rounded-lg"
          />
          <small className="text-base p-3">
            Next <GrNext className="inline px-0.5" />
          </small>
        </div>
      </Link>

      <BackToTop />
    </div>
  );
};

export default CarDetails;
