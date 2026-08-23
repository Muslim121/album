import last from "../Images/last.webp";
import { FaHeart } from "react-icons/fa6";

export default function Page7() {
  return (
    <div className=" grid grid-cols-2 ">
      <div>
        <img src={last} className=" w-96 rounded-3xl ml-20 mt-10" />
      </div>
      <div className=" mt-10 font-nunito text-white w-2/3">
        <p className=" text-3xl text-slate-900 font-bold text-6xl">
          Любовь моя!
        </p>
        <p className=" text-3xl mt-9">
          На этом все. Надеюсь, тебе понравился мой маленький сюрпризик!
        </p>
        <p className=" text-4xl text-rose-700 mt-5 font-bold">Я люблю тебя!</p>
        <FaHeart size={400} className=" text-rose-700" />
      </div>
    </div>
  );
}
