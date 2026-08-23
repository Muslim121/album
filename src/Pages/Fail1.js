import fail from "../Images/fail.webp";

export default function Fail1() {
  return (
    <div className=" flex flex-col justify-center items-center text-center font-bold font-nunito mt-20 ">
      <p className=" text-red-700 text-6xl">ДУУУУУУУУУУУУУУУУУУУУУУУУУУРА</p>
      <p className=" mt-12 text-slate-900 text-3xl">
        Не, ну ты ваще глупенькая у меня что ли?
      </p>
      <img src={fail} className=" w-96 h-96 rounded-3xl mt-10 " alt="" />
    </div>
  );
}
