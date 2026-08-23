import beauty1 from "../Images/beauty1.webp";
import beauty2 from "../Images/beauty2.webp";
import beauty3 from "../Images/beauty3.webp";
import beauty4 from "../Images/beauty4.webp";
import beauty5 from "../Images/beauty5.webp";
import { Link } from "react-router-dom";

export default function Page5() {
  return (
    <div className=" flex flex-col justify-center items-center text-center font-bold font-nunito mt-20 ">
      <p className=" text-slate-900 text-6xl">Любимая моя!</p>
      <p className=" text-2xl text-white ">
        Ты у меня самая красивая девушка на всем белом свете! Просто взгляни на
        эти фото и увидишь прелесть. Самая прекрасная и самая шикарная девушка.
        От твоей красоты я еле могу устоять на ногах. Маленькая моя, ты правда
        просто чудесна!
      </p>
      <div className=" grid grid-cols-5 mt-10 gap-4">
        <img src={beauty1} className=" w-96 h-96 rounded-3xl  " />
        <img src={beauty2} className=" w-96 h-96 rounded-3xl  " />
        <img src={beauty3} className=" w-96 h-96 rounded-3xl  " />
        <img src={beauty4} className=" w-96 h-96 rounded-3xl  " />
        <img src={beauty5} className=" w-96 h-96 rounded-3xl  " />
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
