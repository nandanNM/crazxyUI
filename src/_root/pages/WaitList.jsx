const WaitList = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl text-center">
          <h1 className="mb-8 text-4xl md:text-6xl font-bold tracking-tight  lg:text-7xl text-white">
            Get notified when we're{" "}
            <span className="text-purple-500/90">launching</span>
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-center tracking-tight text-slate-300 font-semibold text-sm lg:text-lg">
            Secure your spot in our exclusive launch community and get insider
            access to updates, sneak peeks, and special offers. This is your
            chance to be among the first to experience{" "}
            <span className="text-purple-500/90">CrazxyUI</span> and shape its
            future.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <input
              type="text"
              className="border rounded-lg w-[15rem] md:w-sm border-slate-700 bg-slate-800 text-white hover:bg-slate-700 outline-none focus:ring-0 px-4 font-semibold text-lg"
              placeholder="Enter your email"
            />
            <button className="rounded-lg border px-6 py-3 text-sm font-bold border-slate-700 bg-white hover:bg-gray-200 text-black cursor-pointer">
              Notify Me
            </button>
          </div>

          {/* Icons */}
          {/* <div className="flex justify-center gap-10 text-white mt-10">
            {icons.map(icon => (
              <div key={icon.id}>
                <icon.name
                  size={25}
                  className="hover:cursor-pointer hover:scale-120 transition-all ease-in-out duration-300"
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WaitList;
