import { useContext, useEffect, useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { useParams } from "react-router";
import { Authontication } from "../../context/AuthContext";

export default function SingleProduct() {
  const { cart , addCart} = useContext(Authontication);

  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  function getSingleProduct() {
    fetch(`https://api.codingarabic.online/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data.data);
      });
  }

  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <>
      <div className="parent p-3  flex-col gap-3 md:flex-row flex md:justify-center">
        <div className="img-box md:h-85 h-80  relative ">
          <img
            src={singleProduct.image}
            alt=""
            className="object-contain h-100 rounded ml-15 md:ml-0"
          />
          <p className="absolute top-2 left-16 md:left-2 bg-black px-2 py-1 rounded text-white">
            {singleProduct.category}
          </p>
        </div>
        <div className="p-2 mx-2 md:mx-0 w-full md:w-[70%] lg:w-[60%]">
          <h2>{singleProduct.id}</h2>
          <h4>{singleProduct.title}</h4>
          <p className="">{singleProduct.description}</p>
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
            <p>{singleProduct.price}</p>
          </div>

          <div className="flex my-4">
            <button
              className="border p-2 flex-1 rounded bg-[#D9176C] text-white"
              onClick={() => addCart(singleProduct)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
