import { CiSearch } from "react-icons/ci";
import { FaMicrophone, FaSearch } from "react-icons/fa";

export default function HeroSection({ setSearch }) {
  return (
    <div className="bg-[linear-gradient(to_right,#00000099,#00000099),url(/assets/book-Shop.png)] min-h-screen bg-cover bg-no-repeat flex justify-center items-center flex-col gap-5">
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
    </div>
  );
}
