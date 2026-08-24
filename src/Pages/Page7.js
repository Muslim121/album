import last from "../Images/last.webp";
import { FaHeart } from "react-icons/fa6";

export default function Page7() {
  return (
    <div className=" flex flex-col items-center justify-center sm:grid sm:grid-cols-2 ">
      <div>
        <img
          src={last}
          className=" w-72 h-72 rounded-3xl sm:ml-20 mt-10 sm:h-auto sm:w-96 sm:mb-14"
          alt=""
        />
      </div>
      <div className=" flex flex-col items-center justify-center m-10 font-nunito text-white sm:w-2/3 sm:justify-start sm:items-start sm:mt-10 sm:ml-0">
        <p className=" text-slate-900 font-bold text-4xl sm:text-5xl">
          Любовь моя!
        </p>
        <p className=" text-center text-2xl mt-5 sm:text-start sm:text-3xl sm:mt-9">
          На этом все. Надеюсь, тебе понравился мой маленький сюрпризик!
        </p>
        <p className=" text-4xl text-rose-700 mt-5 font-bold">Я люблю тебя!</p>
        <FaHeart size={300} className=" text-rose-700" />
      </div>
    </div>
  );
}
