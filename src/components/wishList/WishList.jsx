import { useContext } from "react";
import { Authontication } from "../../context/AuthContext";
import { FaRegHeart, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router";
import { IoStarSharp } from "react-icons/io5";

export default function WishList() {
  const { wishList, removeFromWishList } = useContext(Authontication);

  return (
    <>
      <div>
        <div className="text-center">
          <h2>Wishlist Cart</h2>
        </div>

        {wishList.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
            <div className="w-28 h-28 rounded-full bg-pink-100 flex items-center justify-center mb-6">
              <FaRegHeart className="text-6xl text-[#D9176C]" />
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Your Wishlist is Empty
            </h2>

            <p className="text-gray-500 max-w-md mb-6">
              Save your favorite books to your wishlist so you can find them
              easily later.
            </p>

            <Link to="/shop">
              <button className="bg-[#D9176C] hover:bg-pink-700 transition text-white px-8 py-3 rounded font-semibold shadow-lg">
                Back To Books
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-2">
            {wishList.map((wish) => (
              <div className="col-span-12 md:col-span-6 py-2 px-2 ">
                <div className="parent border p-3 shadow-lg flex-col gap-2 md:flex-row flex md:justify-center ">
                  <div className="img-box h-80 relative md:flex-shrink-0 md:w-[40%]">
                    <img
                      src={wish.image}
                      alt=""
                      className="object-contain ml-12 md:ml-0 h-full rounded"
                    />
                    <p className="absolute top-2 left-16 md:left-2 bg-black px-2 py-1 rounded text-white">
                      {wish.category}
                    </p>
                  </div>
                  <div className="p-2">
                    <h2>{wish.id}</h2>
                    <h4>{wish.title}</h4>
                    <p className="line-clamp-2">{wish.description}</p>
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
                      <p>{wish.price}</p>
                    </div>
                    <div className="flex gap-3 m-0 mt-5 px-3">
                      <button className="flex-1 "></button>
                      <button className=" bg-[#D9176C] p-2 rounded">
                        <FaRegTrashAlt
                          className="text-white"
                          onClick={() => removeFromWishList(wish.id)}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
