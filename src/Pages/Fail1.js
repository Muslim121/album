import fail from "../Images/fail.webp";

export default function Fail1() {
  return (
    <div className=" flex flex-col justify-center items-center text-center font-bold font-nunito mt-14 sm:mt-20 ">
      <p className=" text-red-700 text-3xl sm:text-6xl">ДУУУУУУУУУУУУУУРА</p>
      <p className=" mt-7 sm:mt-12 text-slate-900 text-2xl sm:text-3xl">
        Не, ну ты ваще глупенькая у меня что ли?
      </p>
      <img
        src={fail}
        className=" w-64 h-64 sm:w-96 sm:h-96 rounded-3xl mt-10 "
        alt=""
      />
    </div>
  );
}
