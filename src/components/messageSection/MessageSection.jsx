import { IoCall, IoPencil } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { RiMessage2Line } from "react-icons/ri";

export default function MessageSection() {
  return (
    <div className="bg-[#3b2f4ae9]  my-5">
      <div className="flex justify-around text-white py-5 flex-col md:flex-row gap-5 mx-4">
        <div>
          <h3>
            Have a Questions? <p>Get in Touch</p>
          </h3>
          <p className="text-[#FFFFFF80]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est.{" "}
            <p> Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
          </p>
        </div>

        <div className="flex flex-col justify-center gap-3">
          <div className="flex gap-3 items-center">
            <span className="p-2 rounded bg-[white] text-[#D9176C]">
              <IoCall />
            </span>
            <span>01123456789</span>
          </div>

          <div className="flex gap-3 items-center">
            <span className=" p-2 rounded bg-[white] text-[#D9176C]">
              <RiMessage2Line />
            </span>
            <span>Example@gmail.com</span>
          </div>

          <div className="flex gap-3 items-center">
            <span className="p-2 rounded bg-[white] text-[#D9176C]">
              <FaLocationDot />
            </span>
            <span>
              adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,
            </span>
          </div>
        </div>
      </div>

      <div className="lg:w-[33%]  md:mx-[120px]  mx-[20px] flex flex-col gap-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="UserName"
            className="text-white p-2 rounded border border-[#FFFFFF33] outline-0"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="text-white p-2 rounded border border-[#FFFFFF33] outline-0"
          />
        </div>
        <div className="relative">
          <span className="absolute top-8 left-4 text-[#FFFFFF80]">
            <IoPencil />
          </span>
          <textarea
            placeholder=" Your Message"
            rows={5}
            className="border rounded py-4 text-[#FFFFFF80] outline-0 pl-10 w-full"
          ></textarea>
        </div>
          <div className="text-center mb-4">
            <button className=" px-4 py-2  rounded bg-[#D9176C] text-white ">
              Send Message
            </button>
          </div>
      </div>
    </div>
  );
}
