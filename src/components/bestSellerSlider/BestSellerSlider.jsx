import { useQuery } from "@tanstack/react-query";
import "./swiper.css";
import { Link } from "react-router";
import { useContext } from "react";
import { Authontication } from "../../context/AuthContext";
export default function BestSellerSlider({ bookSlider }) {
  const {token} = useContext(Authontication)
  console.log(bookSlider);
  return (
    <section className="bg-[#3B2F4A]  min-h-screen]">
      <div className="seller-text text-center py-24 text-white">
        <h2>Best Seller</h2>
        <p className="px-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          <p>
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </p>
      </div>
      <div className="images">
        <div className="slide">
          {bookSlider?.map((bookOne) => (
            <img src={bookOne.image} alt="" />
          ))}
          {bookSlider?.map((bookOne) => (
            <img src={bookOne.image} alt="" />
          ))}
        </div>
      </div>

      <div className="text-center my-10 py-[120px]">
        {}
        <Link to={"/shop"}>
          <button className=" py-2 rounded px-10 text-white bg-[#D9176C]">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
}
