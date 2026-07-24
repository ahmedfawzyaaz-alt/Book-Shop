import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

export default function FlashSale() {
  const totalTime = 30 * 60;
  const [time, setTime] = useState(totalTime);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((x) => {
        if (x <= 0) {
          clearInterval(timer);
          return 0;
        } else {
          return x - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(time / 60);
  const secondes = time % 60;

  return (
    <>
      <div className="mt-[100px] px-4   flex justify-between flex-col md:flex-row ">
        <div className="flex flex-col items-center md:items-start">
          <h2>Flash Sale</h2>
          <p className="flex flex-col items-center text-center md:items-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            <p>
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </p>
        </div>
        <div className="flex justify-center md:justify-start">
          <div className="flex items-center gap-3">
            {/* Minutes */}
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full
                    bg-[#D9176C]
                    shadow-[0_8px_25px_rgba(217,23,108,0.35)]"
            >
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold leading-none text-white">
                  {String(minutes).padStart(2, "0")}
                </span>

                <span className="mt-1 text-[8px] uppercase tracking-widest text-white/70">
                  Min
                </span>
              </div>
            </div>

            {/* Separator */}
            <div className="flex flex-col gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D9176C]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#D9176C]" />
            </div>

            {/* Seconds */}
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full
                    border-2 border-[#D9176C]
                    shadow-[0_0_20px_rgba(217,23,108,0.15)]"
            >
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold leading-none text-[#D9176C]">
                  {String(secondes).padStart(2, "0")}
                </span>

                <span className="mt-1 text-[8px] uppercase tracking-widest text-gray-400">
                  Sec
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
