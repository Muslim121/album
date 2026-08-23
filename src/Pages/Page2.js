import first from "../Images/first.webp";
import { Link } from "react-router-dom";

export default function Page2() {
  return (
    <div className=" grid grid-cols-2 ">
      <div className=" mt-10 ml-20 font-nunito text-white w-2/3">
        <p className=" text-3xl text-slate-900">Котейка моя!</p>
        <p className=" text-xl mt-10">
          Вот наше первое фото! Я помню те времена. И отчетливо помню, как я
          кучу раз пересматривал это фото
        </p>
        <div className=" mt-6">
          <Link
            to="/page3"
            className="bg-orange-100 text-purple-500 font-bold rounded-3xl p-3"
          >
            Нажимай балда
          </Link>
        </div>
      </div>
      <div>
        <img src={first} className=" w-2/3 rounded-3xl mt-10" alt="" />
      </div>
    </div>
  );
}
