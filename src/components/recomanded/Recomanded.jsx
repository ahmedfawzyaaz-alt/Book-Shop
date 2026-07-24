import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { Authontication } from "../../context/AuthContext";
import Swal from "sweetalert2";

export default function Recomanded({ recomandCard }) {
  console.log(recomandCard)
  const { token, addCart } = useContext(Authontication);

  return (
    <div className="col-span-12 md:col-span-6 px-3 py-2">
      <div className="parent flex flex-col lg:flex-row shadow-lg p-2 rounded gap-10">
        {/* image */}
        <div className="imag-box  md:w-full lg:w-[176px]">
          <img
            src={recomandCard.image}
            alt=""
            className="object-cover object-center rounded"
          />
        </div>
        {/* content */}
        <div className="content flex-1">
          <h2>{recomandCard.title}</h2>
          <p>
            <span className="text-[#22222280]">Author</span>:{" "}
            {recomandCard.author}
          </p>
          <p className="text-[#22222280]">{recomandCard.description}</p>
          <div className="stars flex items-center gap-3">
            <div className="flex gap-1 ">
              <IoStarSharp className="text-[#EBC305]" />
              <IoStarSharp className="text-[#EBC305]" />
              <IoStarSharp className="text-[#EBC305]" />
              <IoStarSharp className="text-[#EBC305]" />
              <IoStarSharp className="text-[#22222233]" />
            </div>
            <small className="text-[#22222272]">({recomandCard.review})</small>
          </div>

          {/* rate , price */}
          <div className="flex justify-between">
            <small>
              <span className="text-[#22222286]">rate</span>:{" "}
              {recomandCard.rate}
            </small>
            <h4>{recomandCard.price}$</h4>
          </div>

          {/* controls */}
          <div className="flex gap-3 m-0">
            <button
              className="border p-2 flex-1 rounded bg-[#D9176C] text-white"
              onClick={() => {
                if (!token) {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Sign Up and Sign In First",
                    footer: '<a href="#">Why do I have this issue?</a>',
                  });
                } else {
                  addCart(recomandCard);
                }
              }}
            >
              Add To Cart
            </button>
            <button className="border-1 border-[#D9176C] px-3 rounded">
              <FaRegHeart className="text-[#D9176C]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
