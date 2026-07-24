import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaEarthAfrica, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#3B2F4A] px-5 p-2">
      <div className="flex justify-between items-center my-3 border-b-2  border-white pb-1 flex-col md:flex-row gap-3">
        {/* left */}
        <div className="flex gap-4 items-center">
          <div>
            <img src="./assets/book-bookmark 1 (1).png" alt="" />
          </div>

          <div className="flex gap-3 ">
            <Link to={"/"} className="text-decoration-none text-warning">
              Home
            </Link>
            <Link to={"/shop"} className="text-decoration-none text-white">
              Books
            </Link>
            <Link to={"/about"} className="text-decoration-none text-white">
              About Us
            </Link>
          </div>
        </div>

        {/* right */}

        <div className="flex gap-3 text-2xl text-white">
          <FaFacebook />
          <FaInstagram />
          <FaYoutube />
          <FaXTwitter />
        </div>
      </div>

      <div className="flex justify-between items-center ">
        <p className="text-white">
          &lt;Developed By&gt; EraaSoft &lt;All Copy Rights Reserved @2024
        </p>
        <div className="flex items-center gap-3">
          <FaEarthAfrica className="text-white text-2xl" />
          <select
            name=""
            id=""
            className="border px-3 text-[#FFFFFF80] rounded"
          >
            <option value="" className="bg-black">English</option>
            <option value="" className="bg-black">Arabic</option>
          </select>
        </div>
      </div>
    </footer>
  );
}
