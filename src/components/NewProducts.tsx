import Card from "./Card";
import { perfumeData } from "@/PerfumeData";
import { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NewProducts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 400; // adjust per card width

  const scrollLeft = () => {
    const container = scrollRef.current;
    if (container) {
      if (container.scrollLeft === 0) {
        // Scroll to end if already at start
        container.scrollTo({
          left: container.scrollWidth,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    if (container) {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (Math.ceil(container.scrollLeft) >= maxScrollLeft) {
        // Loop back to start
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <div className="my-12 relative min-h-[40rem]">
      <div className="w-full md:w-[95%] my-0 mx-auto p-4 flex flex-col justify-between h-[40rem] md:h-[37rem] xl:h-[40rem] ">
        <div className="flex items-end justify-between gap-4">
          <h3 className=" text-2xl md:text-4xl lg:text-5xl xl:text-6xl uppercase">
            The Choice of our users
          </h3>
          <Link
            to="/search"
            className="text-base lg:text-xl whitespace-nowrap cursor-pointer hover:text-purple-600"
          >
            Show more <GoArrowUpRight className="inline" />
          </Link>
        </div>

        <div
          className=" w-full absolute top-[12%] left-0 overflow-x-auto scrollbar-hide"
          ref={scrollRef}
        >
          <div className="  p-4 flex items-center gap-4 ">
            {perfumeData.map((perfume) => (
              <Card key={perfume.id} perfume={perfume} />
            ))}
          </div>
        </div>

        <div className="flex items-start justify-between gap-4">
          <p className="text-lg md:text-xl lg:text-2xl font-sec ">
            Explore a world of olfactory elegance where top notes dance with
            your senses, heart notes captivate your soul, and base notes leave a
            lasting impression.
          </p>
          <div className="flex items-center gap-2">
            <FaCircleChevronLeft
              className="text-4xl cursor-pointer hover:text-yellow-500"
              onClick={scrollLeft}
            />
            <FaCircleChevronRight
              className="text-4xl cursor-pointer hover:text-yellow-500"
              onClick={scrollRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
