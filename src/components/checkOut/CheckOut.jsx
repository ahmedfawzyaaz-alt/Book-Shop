import { useContext, useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { Authontication } from "../../context/AuthContext";

export default function CheckOut() {
  const { cart } = useContext(Authontication);
  const [payment, setPayment] = useState("");

  const totalPrice = cart.reduce((acc, current) => {
    return acc + parseInt(current.price) * current.Quantity;
  }, 0);
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="mb-8 mx-3">
          <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
          <p className="text-gray-500 mt-2">
            Complete your order and choose your payment method.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-3 ">
          {/* payment and Choose */}
          {/* Left Side */}
          <div className="col-span-12 md:col-span-6 lg:col-span-8 mx-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 mx-3">
              Payment
            </h2>
            <h3 className="text-lg font-semibold mb-4 mx-3">
              Choose Payment Method
            </h3>

            <div className="flex gap-5 flex-col lg:flex-row md:mx-5 ">
              <div
                className={`flex items-center gap-4 border-1 px-4 py-5 cursor-pointer rounded transition-all duration-500 ${
                  payment === "card"
                    ? " border-[#D9176C] bg-pink-50"
                    : "border-gray-300"
                }`}
                onClick={() => setPayment("card")}
              >
                <MdPayment size={30} />
                <div>
                  <h4>Online Payment</h4>
                  <p>Pay Securely Using Your Card</p>
                </div>
              </div>
              <div
                className={`border-1 px-4 py-5 flex items-center gap-4 cursor-pointer rounded transition-all duration-500 ${
                  payment === "cash"
                    ? "border-[#D9176C] bg-pink-50"
                    : "border-gray-300"
                }`}
                onClick={() => setPayment("cash")}
              >
                <BsCashCoin size={30} />
                <div>
                  <h4>Cash On Delivery</h4>
                  <p className="text-gray-800 ">
                    Pay When You receive your order
                  </p>
                </div>
              </div>
            </div>

            {payment === "card" && (
              <div className=" p-4">
                <h2 className="mt-4 mx-3">Card Details</h2>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="p-3 mt-3 w-full outline-0 border rounded "
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    className="p-3 mt-3 outline-0 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="MM / YY"
                    className="p-3 mt-3 outline-0 border rounded"
                  />
                  <input
                    type="password"
                    placeholder="CVV"
                    className="p-3 mt-3 outline-0 border rounded"
                  />
                </div>

                <button className="bg-[#D9176C] text-white flex w-full mt-4 p-3 rounded justify-center items-center gap-3">
                  <FaLock />
                  <div className="flex gap-1">
                    <p className="m-0">Pay</p>{totalPrice}$
                  </div>
                </button>
              </div>
            )}

            {payment === "cash" && (
              <div className="mt-6 border rounded-lg p-5 md:mx-4">
                <h2 className="text-xl font-bold">Cash On Delivery</h2>

                <p className="text-gray-500 mt-2">
                  You will pay when you receive your order.
                </p>

                <button className="bg-[#D9176C] text-white w-full mt-4 p-3 rounded flex justify-center items-center gap-3">
                  <FaLock />
                  <span>Place Order</span>
                </button>
              </div>
            )}
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 min-h-screen">
            <div>
              <h2 className="text-xl font-bold mb-5">Order Summary</h2>

              <div className="max-h-[500px] overflow-y-auto mx-4">
                {cart?.map((book) => (
                  <div className="flex gap-3 border-b py-4">
                    <img
                      src={book.image}
                      alt=""
                      className="w-16 h-20 object-cover rounded"
                    />

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {book.title}
                      </h3>
                      <p className="text-lg text-[#D9176C] font-bold">
                        {book.price}
                      </p>
                      <p className="text-sm text-gray-500">
                        Quantity:{" "}
                        <span className="font-semibold text-gray-700">
                          {book.Quantity}
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                ))}
              </div>


              <div className="flex justify-between mt-5 mx-5">
                <span className="font-semibold text-gray-700">
                  total
                </span>

                <span className="text-xl font-bold text-[#D9176C]">
                  {totalPrice}$
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
