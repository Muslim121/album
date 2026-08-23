import monkey from "../Images/monkey.jpg";
import { Link } from "react-router-dom";

export default function Page4() {
  return (
    <div className=" flex flex-col justify-center items-center text-center font-bold font-nunito mt-20 ">
      <p className=" text-white text-6xl">ЭТО ТЫЫЫЫЫЫЫ!!!!!!!!</p>

      <div className=" grid grid-cols-2 mt-10 gap-4">
        <Link
          to="/page5"
          className=" bg-orange-100 text-purple-500 font-bold text-3xl rounded-3xl p-3 text-center grow h-14"
        >
          Тыкай обезьянка
        </Link>
        <img src={monkey} className=" w-96 h-96 rounded-3xl  " alt="" />
      </div>
    </div>
  );
}
