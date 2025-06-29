import { Link } from "react-router-dom";
import { perfume_Data } from "@/PerfumeData";

interface CardProps {
  perfume: perfume_Data;
}
const Card = ({ perfume }: CardProps) => {
  return (
    <Link to={`/search/${perfume.id}`} className="flex-shrink-0">
      <div className="p-4 w-fit rounded-xl bg-gray-100 relative">
        <img
          src={perfume.image}
          alt={perfume.name}
          className="w-[16rem] sm:w-[18rem] lg:w-[20rem] xl:w-[25rem] h-[16rem] sm:h-[18rem] lg:h-[20rem] xl:h-[25rem] object-contain"
        />
        <div className="absolute w-full h-full p-4 left-0 top-0 flex flex-col justify-between rounded-xl linearcard-bg">
          <p className="flex justify-end">
            <span className="py-2 px-3 rounded-full bg-white w-fit">
              {perfume.sillage}
            </span>
          </p>
          <h5 className="text-3xl">{perfume.name}</h5>
        </div>
      </div>
    </Link>
  );
};

export default Card;
