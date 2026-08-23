import sucess from "../Images/sucess.webp";
import { Link } from "react-router-dom";

export default function Sucess() {
  return (
    <div className=" flex flex-col justify-center items-center text-center font-bold font-nunito mt-20 ">
      <p className=" text-green-700 text-6xl">МОЯ Ж ТЫ УУУУУУМА!</p>
      <p className=" mt-12 text-slate-900 text-3xl">
        Вот просто молодчинка, я в тебе не сомневался! Можешь идти дальше
      </p>
      <div className=" grid grid-cols-2 mt-10 gap-4">
        <Link
          to="/page4"
          className=" bg-orange-100 text-purple-500 font-bold text-3xl rounded-3xl p-3 text-center grow h-14"
        >
          Тыкай ума
        </Link>
        <img src={sucess} className=" w-96 h-96 rounded-3xl  " />
      </div>
    </div>
  );
}
