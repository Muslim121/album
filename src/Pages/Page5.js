import beauty1 from "../Images/beauty1.webp";
import beauty2 from "../Images/beauty2.webp";
import beauty3 from "../Images/beauty3.webp";
import beauty4 from "../Images/beauty4.webp";
import beauty5 from "../Images/beauty5.webp";
import { Link } from "react-router-dom";

export default function Page5() {
  return (
    <div className=" flex flex-col justify-center items-center text-center font-bold font-nunito mt-20 ">
      <p className=" text-slate-900 text-4xl sm:text-6xl">Любимая моя!</p>
      <p className=" text-xl sm:text-2xl text-white mt-4 sm:mt-6">
        Ты у меня самая красивая девушка на всем белом свете! Просто взгляни на
        эти фото и увидишь прелесть. Самая прекрасная и самая шикарная девушка.
        От твоей красоты я еле могу устоять на ногах. Маленькая моя, ты правда
        просто чудесна!
      </p>
      <div className=" sm:grid sm:grid-cols-5 mt-10 sm:gap-4">
        <img
          src={beauty1}
          className=" w-72 h-72 sm:w-96 sm:h-96 rounded-3xl "
          alt=""
        />
        <img
          src={beauty2}
          className=" w-72 h-72 sm:w-96 sm:h-96 rounded-3xl mt-4 sm:mt-0 "
          alt=""
        />
        <img
          src={beauty3}
          className=" w-72 h-72 sm:w-96 sm:h-96 rounded-3xl mt-4  sm:mt-0"
          alt=""
        />
        <img
          src={beauty4}
          className=" w-72 h-72 sm:w-96 sm:h-96 rounded-3xl mt-4 sm:mt-0"
          alt=""
        />
        <img
          src={beauty5}
          className=" w-72 h-72 sm:w-96 sm:h-96 rounded-3xl mt-4 sm:mt-0"
          alt=""
        />
      </div>
      <Link
        to="/page6"
        className=" bg-orange-100 text-purple-500 font-bold text-3xl rounded-3xl p-3 text-center mt-5"
      >
        Тыкай красотка
      </Link>
    </div>
  );
}
