import hello from "../Images/hello.jpeg";
import { Link } from "react-router-dom";

export default function Page1() {
  return (
    <div className="flex flex-col items-center justify-center sm:grid sm:grid-cols-2">
      <div>
        <img
          src={hello}
          className=" w-64 rounded-3xl sm:ml-20 mt-10 sm:w-96"
          alt=""
        />
      </div>
      <div className=" flex flex-col items-center justify-center m-10 font-nunito text-white sm:w-2/3 sm:justify-start sm:items-start sm:mt-10 sm:ml-0">
        <p className=" text-center text-3xl text-slate-900 font-bold">
          Альбинушка корзинушка!
        </p>
        <p className=" text-xl mt-9">
          За эти почти 9 месяцев ты стала неотъемлимой частью моей жизни. Ты бы
          знала как же сильно я тебя люблю, мое солнце! Я очень сильно дорожу
          тобой, котик! Мне хотелось сделать тебе необычный подарок. Я решил
          сделать для тебя наш мини-альбомчик. Не суди строго, я делал все на
          скорую руку и года три не программировал. Надеюсь, тебе понравится
        </p>
        <div className=" mt-6">
          <Link
            to="/page2"
            className=" bg-orange-100 text-purple-500 font-bold rounded-3xl p-3"
          >
            Тыкай сюда
          </Link>
        </div>
      </div>
    </div>
  );
}
