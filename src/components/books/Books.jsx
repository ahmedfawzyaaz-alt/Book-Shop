import { useContext } from "react";
import { FaEye, FaHeart, FaRegHeart } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { Link, Navigate, useNavigate } from "react-router";
import { Authontication } from "../../context/AuthContext";
import Swal from "sweetalert2";

export default function Books({ books }) {
  const navigate = useNavigate();
  const { token, addCart, cart, wishListItems, wishList } =
    useContext(Authontication);
  console.log(books);
  return (
    <>
      <div className="grid grid-cols-12 gap-3">
        {books?.map((book) => (
          <div className="col-span-12 md:col-span-4">
            <div className="parent border p-3 shadow-lg">
              <div className="img-box h-80 relative">
                <img
                  src={book.image}
                  alt=""
                  className="object-contain h-100 w-full"
                />
                <p className="absolute top-2 left-2 bg-white p-2 text-[#D9176C] rounded-full shadow-md shadow-fuchsia-400">
                  {book.category}
                </p>
                <p
                  className="absolute top-2 right-2  bg-white  p-2 text-[#D9176C] rounded-full shadow cursor-pointer"
                  onClick={() => {
                    if (!token) {
                      Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Please Sign Up and Log In First",
                        footer: '<a href="#">Why do I have this issue?</a>',
                      });
                    } else {
                      wishListItems(book);
                    }
                  }}
                >
                  {wishList.find((item) => item.id === book.id) ? (
                    <FaHeart className="text-xl text-[#D9176C]" />
                  ) : (
                    <FaRegHeart className="text-xl text-gray-500" />
                  )}
                </p>
              </div>
              <div>
                <h2>{book.id}</h2>
                <h4>{book.title}</h4>
                <p className="line-clamp-3">{book.description}</p>
                <div className="flex gap-3 items-center">
                  <div className="flex gap-2">
                    <IoStarSharp className="text-[#EBC305]" />
                    <IoStarSharp className="text-[#EBC305]" />
                    <IoStarSharp className="text-[#EBC305]" />
                    <IoStarSharp className="text-[#EBC305]" />
                    <IoStarSharp className="text-[#22222233]" />
                  </div>
                  <p className="m-0 text-[#00000080]">(180 Review)</p>
                </div>

                <div className="flex justify-between">
                  <p>rate:4.2</p>
                  <p>{book.price}</p>
                </div>
              </div>

              <div className="flex gap-3 m-0">
                <button
                  className="border p-2 flex-1 rounded bg-[#D9176C] text-white"
                  onClick={() => {
                    if (!token) {
                      Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Please Sign Up and Log In First",
                        footer: '<a href="#">Why do I have this issue?</a>',
                      });
                    } else {
                      addCart(book);
                    }
                  }}
                >
                  Add To Cart
                </button>
                <Link>
                  <button
                    className="border-1 border-[#D9176C] px-3 py-2 rounded"
                    onClick={() => {
                      if (!token) {
                        Swal.fire({
                          icon: "error",
                          title: "Oops...",
                          text: "Please Sign Up and Log In First",
                          footer: '<a href="#">Why do I have this issue?</a>',
                        });
                      } else {
                        navigate(`/single-product/${book.id}`);
                      }
                    }}
                  >
                    <FaEye className="text-[#D9176C] text-2xl" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
