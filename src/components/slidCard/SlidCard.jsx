import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaChevronLeft,
  FaChevronRight,
  FaRegHeart,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import { IoStarSharp } from "react-icons/io5";
import { useRef } from "react";
import { CiShoppingCart } from "react-icons/ci";

export default function SlidCard() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const books = [
    {
      image: "./assets/book-1.png",
      title: "Rich Dad And Poor Dad",
      author: "Robert T. Kiyosanki",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,",
      price: "$30.00",
      review: "180 Review",
      rate: "4.2",
      expirePrice: "$45.00",
    },
    {
      image: "./assets/book-2.jpg",
      title: "The Design Of Books",
      author: "Don Norman",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,",
      price: "$40.00",
      review: "210 Review",
      rate: "4.2",
      expirePrice: "$45.00",
    },
    {
      image: "./assets/book-3.png",
      title: "The 48 Laws Of Power",
      author: "Robert Greene",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,",
      price: "$35.00",
      review: "210 Review",
      rate: "4.2",
      expirePrice: "$45.00",
    },
    {
      image: "./assets/book-4.jpg",
      title: "The Craft Of Research",
      author: "Joseph M.Williams",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,",
      price: "$20.00",
      review: "210 Review",
      rate: "4.2",
      expirePrice: "$50.00",
    },
    {
      image: "./assets/book-5.jpg",
      title: "The Design Of Books",
      author: "Debbie Berne",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,",
      price: "$60.00",
      review: "210 Review",
      rate: "4.2",
      expirePrice: "$80.00",
    },
    {
      image: "./assets/book-6.jpg",
      title: "The International BestSeller",
      author: "Daniel Kahneman",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,",
      price: "$90.00",
      review: "210 Review",
      rate: "4.2",
      expirePrice: "$100.00",
    },
    {
      image: "./assets/book-7.jpg",
      title: "The 7 Habits Of Highly",
      author: "Stephen R.Covey",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,",
      price: "$150.00",
      review: "210 Review",
      rate: "4.2",
      expirePrice: "$205.00",
    },
    {
      image: "./assets/book-8.png",
      title: "Panlo Coelho",
      author: "Debbie Berne",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,",
      price: "$300.00",
      review: "210 Review",
      rate: "4.2",
      expirePrice: "$350.00",
    },
  ];
  return (
    <div className="relative w-full px-8 md:px-16 py-6">
      {/* Prev */}
      <button
        className="custom-prev absolute left-0 top-1/2 -translate-y-1/2  w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl duration-300 flex items-center justify-center text-gray-500 hover:text-black"
        ref={prevRef}
      >
        <FaAngleDoubleLeft />
      </button>

      <Swiper
        modules={[Navigation]}
        loop={true}
        speed={700}
        spaceBetween={30}
        slidesPerView={2}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        className="!overflow-hidden"
      >
        {/* Loop On Books */}

        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="col-span-12 md:col-span-6 px-3 py-2">
              <div className="parent flex flex-col lg:flex-row shadow-lg p-2 my-5 rounded gap-10  md:h-full lg:h-[330px] bg-[#3B2F4A] text-white">
                {/* image */}
                <div className="imag-box md:w-full lg:w-[200px]">
                  <img
                    src={book.image}
                    alt=""
                    className="object-contain object-center rounded "
                  />
                </div>
                {/* content */}
                <div className="content flex-1">
                  <h2>{book.title}</h2>
                  <p>
                    <span className="text-[#FFFFFF80]">Author</span>:{" "}
                    {book.author}
                  </p>
                  <div className="stars flex items-center gap-3 mt-3">
                    <div className="flex gap-1 ">
                      <IoStarSharp className="text-[#EBC305]" />
                      <IoStarSharp className="text-[#EBC305]" />
                      <IoStarSharp className="text-[#EBC305]" />
                      <IoStarSharp className="text-[#EBC305]" />
                      <IoStarSharp className="text-[#FFFFFF33]" />
                    </div>
                    <small className="text-[#FFFFFF80]">({book.review})</small>
                  </div>

                  {/* rate , price */}
                  <div className="flex justify-between mt-3">
                    <small>
                      <span className="text-[#FFFFFF80]">rate</span>:{" "}
                      {book.rate}
                    </small>
                  </div>
                  <div className="flex gap-3 items-center">
                    <p className="fw-semibold text-[#FFFFFF4D] pt-2">
                      {book.expirePrice}
                    </p>
                    <h4 className="">{book.price}</h4>
                  </div>

                  {/* controls */}
                  <div className="flex gap-3 m-0 mt-4 px-3">
                    <button className="flex-1 "></button>
                    <button className=" bg-[#D9176C] p-2 rounded">
                      <CiShoppingCart className="text-3xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Next */}
      <button
        className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl duration-300 flex items-center justify-center text-gray-500 hover:text-black"
        ref={nextRef}
      >
        <FaAngleDoubleRight />
      </button>
    </div>
  );
}
