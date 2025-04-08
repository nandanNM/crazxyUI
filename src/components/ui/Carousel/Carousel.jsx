import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://plus.unsplash.com/premium_photo-1676746294199-31d07b48236b?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1674834298045-e405bc99076b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1669839137069-4166d6ea11f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Carousel = () => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <div className="overflow-hidden max-w-xl rounded-xl relative">
      <div
        className={`flex transition ease-out duration-300`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, index) => (
          <img src={image} key={index} alt="image" />
        ))}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex">
        <button
          onClick={previousSlide}
          className="bg-gray-500/20 rounded-full p-2 mx-2"
        >
          <FaChevronLeft className="text-gray-800/90" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-500/20 rounded-full p-2 mx-2"
        >
          <FaChevronRight className="text-gray-800/90" />
        </button>
      </div>

      <div className="absolute bottom-0 py-2 flex justify-center gap-5 w-full">
        {images.map((s, i) => (
          <div
            key={"circle" + i}
            className={`rounded-full w-3 h-3 ${i === current ? "bg-white" : "bg-white/50"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
