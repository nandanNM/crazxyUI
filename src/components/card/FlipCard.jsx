import React from "react";

const FlipCard = props => {
  const {title ,name, imageUrl, description } = props;
  return (
    <section className="py-16 mx-auto sm:py-20">
      <div className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">
        <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
          <h2 className="text-4xl font-semibold tracking-tight text-grey-950 sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <div className="mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
            <div className="group h-96 w-96 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                  {imageUrl && (
                    <img
                      className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                      src={imageUrl}
                      width={320}
                      height={320}
                    />
                  )}
                  <p className="md:my-6 text-2xl">{name}</p>
                </div>

                {/* back side */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold mb-4">{name}</h2>
                    <p className=" text-lg text-pretty text-center mb-4">
                      {description}
                    </p>
                     
                    <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                      <span>Schedule Service</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlipCard;
