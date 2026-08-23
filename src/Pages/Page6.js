import happy1 from "../Images/happy1.webp";
import happy2 from "../Images/happy2.webp";
import happy3 from "../Images/happy3.webp";
import happy4 from "../Images/happy4.webp";
import happy5 from "../Images/happy5.webp";
import { Link } from "react-router-dom";

export default function Page6() {
  return (
    <div className=" flex flex-col justify-center items-center text-center font-bold font-nunito mt-20 ">
      <p className=" text-slate-900 text-6xl">Малютка моя!</p>
      <p className=" text-2xl text-white mt-5 ">
        Ты, кстати, еще и самая смешная и веселая девочка! Смешнявка моя.
        Взгляни на эти фоточки и точно не сможешь сдержать улыбки
      </p>
      <div className=" grid grid-cols-5 mt-10 gap-4">
        <img src={happy1} className=" w-96 h-96 rounded-3xl  " />
        <img src={happy2} className=" w-96 h-96 rounded-3xl  " />
        <img src={happy3} className=" w-96 h-96 rounded-3xl  " />
        <img src={happy4} className=" w-96 h-96 rounded-3xl  " />
        <img src={happy5} className=" w-96 h-96 rounded-3xl  " />
      </div>
      <Link
        to="/page7"
        className=" bg-orange-100 text-purple-500 font-bold text-3xl rounded-3xl p-3 text-center mt-5"
      >
        Тыкай какафка
      </Link>
    </div>
  );
}
