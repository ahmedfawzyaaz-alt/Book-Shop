import { CiSearch } from "react-icons/ci";
import { FaMicrophone, FaSearch } from "react-icons/fa";

export default function HeroSection({ setSearch, isHomeAndShop, isAboutUs }) {
  console.log(isHomeAndShop);
  console.log(isAboutUs);
  return (
    <div
      className={`
        ${isAboutUs ? "bg-[linear-gradient(#000000CC,#000000CC),url(/assets/book-Shop.png)]" : " bg-[linear-gradient(to_right,#00000099,#00000099),url(/assets/book-Shop.png)]"}
        min-h-[390px] bg-cover bg-no-repeat flex justify-center items-center flex-col gap-5
        ${isHomeAndShop || isAboutUs ? "min-h-screen" : ""}
      }`}
    >
      {isHomeAndShop && (
        <div className="flex justify-center items-center w-[90%] md:w-[70%] lg:w-[45%] rounded-full bg-[white] h-13 overflow-hidden">
          <input
            type="text"
            className="flex-1 px-6  py-6  outline-none text-gray-700"
            placeholder="Search"
            onChange={(event) => {
              console.log(event.target.value);
              setSearch(event.target.value);
            }}
          />
          <div className="flex gap-2">
            <button className="text-[#22222280] hover:text-[#D9176C]">
              <FaMicrophone size={20} />
            </button>

            <button className="bg-[#D9176C]  text-white px-4 text-2xl p-3 ">
              <FaSearch size={20} />
            </button>
          </div>
        </div>
      )}

      {isAboutUs && (
        <div className="text-white text-center max-w-2xl px-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            About Bookshop
          </h1>

          <p className="text-lg md:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
      )}
    </div>
  );
}
