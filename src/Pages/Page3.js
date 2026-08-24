import second from "../Images/second.webp";
import { Link } from "react-router-dom";

export default function Page3() {
  return (
    <div className="sm:items-start sm:grid sm:grid-cols-2 flex flex-col justify-center items-center">
      <div>
        <img
          src={second}
          className=" w-64 sm:w-96 rounded-3xl sm:ml-20 mt-10"
          alt=""
        />
      </div>
      <div className=" flex flex-col items-center justify-center m-10 font-nunito text-white w-2/3 sm:justify-start sm:items-start sm:mt-10 sm:ml-0">
        <p className="text-center sm:text-start text-3xl text-slate-900 font-bold">
          Любовь моя
        </p>
        <p className="text-center sm:text-start text-xl mt-4 sm:mt-9 ">
          Это одно из моих самых любимых фото по сей день! Можно сказать, что
          благодаря этому фото я в первый раз сделал тебе копмплимент. Тогда я
          был в сказке и написал тебе, что ты очень красивая. Ох телефон тогда
          летал!
        </p>
        <p className=" sm:text-start text-center text-xl mt-4 text-rose-900 font-bold">
          Теперь нужно тебе малеха подумать. Я, конечно, понимаю, что принцессам
          не по масти думать, но ты подумай и отгадай-ка загадку.
        </p>
        <p className=" text-center text-xl mt-4 text-slate-700">
          С каким животным ты у меня ассоциируешься?
        </p>
        <div className=" grid grid-cols-3 mt-6 gap-4 text-xl w-96 sm:w-full">
          <Link
            to="/fail1"
            className=" bg-orange-100 text-purple-500 font-bold rounded-3xl p-3 text-center"
          >
            Котик
          </Link>
          <Link
            to="/sucess"
            className=" bg-orange-100 text-purple-500 font-bold rounded-3xl p-3 text-center"
          >
            Обезьянка
          </Link>
          <Link
            to="/fail1"
            className=" bg-orange-100 text-purple-500 font-bold rounded-3xl p-3 text-center"
          >
            Птичка
          </Link>
        </div>
      </div>
    </div>
  );
}
