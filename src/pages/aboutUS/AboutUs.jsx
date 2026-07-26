import { FaShippingFast } from "react-icons/fa";
import MessageSection from "../../components/messageSection/MessageSection";
import OurMission from "../../components/ourMission/OurMission";
import { MdOutlinePayment } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { BiSupport } from "react-icons/bi";
import CardLoop from "../../components/cardLoop/CardLoop";

export default function AboutUs() {
  const cardAbout = [
    {
      name: "Quality Selection",
      desc: "We carefully select a wide range of high-quality books across different genres and interests, making it easy for every reader to discover a book they will truly enjoy.",
      BTN: "View More →",
    },
    {
      name: "Exceptional Service",
      desc: "We are committed to providing a smooth and enjoyable shopping experience, with easy browsing, detailed book information, and reliable service from discovery to delivery.",
      BTN: "View More →",
    },
    {
      name: "Set Up Stores",
      desc: "We are working to expand our presence and bring our bookshop closer to readers everywhere, making it easier for everyone to discover and enjoy their favorite books.",
      BTN: "Soon",
    },
  ];

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
  return (
    <>
      <div className="text-center my-5">
        <h3>Our Mission</h3>
      </div>

      <div className="grid grid-cols-12 container gap-4 ">
        {cardAbout.map((card) => (
          <OurMission cardAbout={card} />
        ))}
      </div>

      <MessageSection />

      <div className="grid grid-cols-12">
        {cardBodyText.map((one) => (
          <CardLoop cardBodyText={one}/>
        ))}
      </div>
    </>
  );
}
