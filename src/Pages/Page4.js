import monkey from "../Images/monkey.jpg";
import { Link } from "react-router-dom";

export default function Page4() {
  return (
    <div className=" flex flex-col justify-center items-center text-center font-bold font-nunito mt-20 ">
      <p className=" text-white text-4xl sm:text-6xl">ЭТО ТЫЫЫЫЫЫЫ!!!!!!!!</p>
      <div className=" sm:grid sm:grid-cols-2 mt-10 sm:gap-4">
        <Link
          to="/page5"
          className=" bg-orange-100 text-purple-500 font-bold text-3xl rounded-3xl p-3 text-center grow h-14"
        >
          Тыкай обезьянка
        </Link>
        <img
          src={monkey}
          className=" w-72 h-72 sm:w-96 sm:h-96 rounded-3xl mt-10 sm:mt-0 "
          alt=""
        />
      </div>
    </div>
  );
}
