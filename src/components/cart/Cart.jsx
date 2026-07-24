import { useContext } from "react";
import { Authontication } from "../../context/AuthContext";
import { IoStarSharp } from "react-icons/io5";
import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router";

export default function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(Authontication);

  const totalPrice = cart.reduce((acc, current) => {
    return acc + parseInt(current.price) * current.Quantity;
  }, 0);

  return (
    <>
      <div>
        <div className="text-center">
          <h2>Shopping Cart</h2>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[75vh] px-4">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D9176C] to-pink-400 rounded-full blur-xl opacity-30"></div>

              <div className="relative w-40 h-40 rounded-full bg-white shadow-2xl flex items-center justify-center">
                <CiShoppingCart className="text-8xl text-[#D9176C]" />
              </div>
            </div>

            <h1 className="mt-10 text-5xl font-extrabold text-gray-800">
              Oops!
            </h1>

            <h2 className="mt-3 text-3xl font-semibold text-gray-700">
              Your Cart is Empty
            </h2>

            <p className="mt-4 max-w-xl text-center text-gray-500 leading-8">
              Your bookshelf is waiting for its first adventure. Browse our
              collection and discover books you'll love.
            </p>

            <Link to="/shop">
              <button className="mt-10 px-10 py-4  bg-gradient-to-r from-[#D9176C] to-pink-500 text-white font-bold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 rounded">
                📚 Explore Books
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-2">
            {cart.map((product) => (
              <div className="col-span-12 md:col-span-6 py-2 px-2 ">
                <div className="parent border p-3 shadow-lg flex-col gap-2 md:flex-row flex md:justify-center ">
                  <div className="img-box h-80 relative md:flex-shrink-0 md:w-[40%]">
                    <img
                      src={product.image}
                      alt=""
                      className="object-contain ml-12 md:ml-0 h-full rounded"
                    />
                    <p className="absolute top-2 left-16 md:left-2 bg-black px-2 py-1 rounded text-white">
                      {product.category}
                    </p>
                  </div>
                  <div className="p-2">
                    <h2>{product.id}</h2>
                    <h4>{product.title}</h4>
                    <p className="line-clamp-2">{product.description}</p>
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
                      <p className="text-xl font-bold text-[#D9176C]">
                        {parseInt(product.price) * product.Quantity}$
                      </p>
                    </div>

                    <div className="flex  m-0 mt-5 px-3 justify-between">
                      <button className="flex gap-2 ">
                        <button
                          className="border px-2 rounded bg-[#D9176C] text-white items-center "
                          onClick={() => increaseQuantity(product.id)}
                        >
                          <FaPlus />
                        </button>
                        <span className="text-xl">{product.Quantity}</span>
                        <button
                          className="border px-2 rounded bg-[#D9176C] text-white items-center "
                          onClick={() => decreaseQuantity(product.id)}
                        >
                          <FaMinus />
                        </button>
                      </button>
                      <button className=" bg-[#D9176C] p-2 rounded ">
                        <FaRegTrashAlt
                          className="text-white"
                          onClick={() => removeFromCart(product.id)}
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

      <div className="my-8 flex justify-end">
        <div className="bg-gray-100 rounded-xl px-6 py-5 w-[350px] shadow">
          <div className="flex justify-between border-b pb-3">
            <span className="text-gray-500">Subtotal</span>
            <span>{totalPrice}$</span>
          </div>

          <div className="flex justify-between pt-4">
            <span className="font-bold text-xl">Total</span>
            <span className="font-bold text-3xl text-[#D9176C]">
              {totalPrice}$
            </span>
          </div>

          <Link to="/checkout">
            <button className="my-6 w-full bg-[#D9176C] text-white py-3 rounded font-medium hover:bg-[#c31562] transition-colors duration-300">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
