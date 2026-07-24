import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import CardLoop from "../../components/cardLoop/CardLoop";
import { BiSupport } from "react-icons/bi";
import BestSellerSlider from "../../components/bestSellerSlider/BestSellerSlider";
import Recomanded from "../../components/recomanded/Recomanded";
import FlashSale from "../../components/flashSale/FlashSale";
import SlidCard from "../../components/slidCard/SlidCard";
import { useQuery } from "@tanstack/react-query";
import { getAllImage } from "../../apis/getAllImage";
import { useImage } from "../../hooks/useImage";

export default function Home() {
  const cardBodyText = [
    {
      icone: <FaShippingFast />,
      title: "Fast & Reliable Shipping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
    },
    {
      icone: <MdOutlinePayment />,
      title: "Secure Payment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
    },
    {
      icone: <TfiReload />,
      title: "Easy Returns",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
    },
    {
      icone: <BiSupport />,
      title: "24/7 Customer Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo.",
    },
  ];

  const { data, isError, isLoading } = useImage();
  const bookSlider = data;

  const recomandCard = [
    {
      image: "./assets/book-1.png",
      title: "Rich Dad And Poor Dad",
      author: "Robert T. Kiyosanki",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,",
      price: "$30.00",
      review: "180 Review",
      rate: "4.2",
    },
    {
      image: "./assets/book-5.jpg",
      title: "The Design Of Books",
      author: "Debbie Berne",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,",
      price: "$40.00",
      review: "210 Review",
      rate: "4.2",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-12">
        {cardBodyText.map((card) => (
          <CardLoop cardBodyText={card} />
        ))}
      </div>
      <BestSellerSlider bookSlider={bookSlider} />
      <h2 className="px-3 py-2">Recomended For You</h2>
      <div className="grid grid-cols-12">
        {recomandCard.map((one) => (
          <Recomanded recomandCard={one} />
        ))}
      </div>
      <FlashSale />
      <SlidCard />
    </>
  );
}
