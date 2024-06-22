import QualityCont from "../items/y.jpg";

export const QualityContainer = ({ onClicker }) => {
  return (
    <div className="text-orange-500 px-5 text-center sm:text-left bg-white sm:h-[910] md:h-[810] lg:h-[664] flex  flex-col lg:flex-row justify-between items-center sm:px-16">
      <div className="max-w-xl">
        <h1 className=" text-4xl mt-10   m-2 font-bold sm:mt-10  lg:mt-0 sm:text-5xl ">
          {" "}
          Hungry for something unique?{" "}
        </h1>
        <h2 className=" text-4xl mx-2 sm:my-5 font-bold text-[#285181]">
          {" "}
          Sasta Swiggy delivers!{" "}
        </h2>
        <p className=" mt-8 text-xl sm:mx-2 sm:mt-3 font-semibold">
          Discover a revolutionary food ordering experience with Sasta Swiggy!
          Embark on a unique culinary journey where exceptional flavors,
          sustainable practices, and community spirit unite. Celebrate your love
          for food and explore new tastes, one affordable and delicious order at
          a time.
        </p>
        <button
          className="mt-8 mx-2  p-3 rounded-xl text-white bg-[#285181] hover:bg-orange-600 sm:mt-5"
          onClick={onClicker}
        >
          Get Started
        </button>
      </div>

      <div className=" mt-12 sm:mt-8  xl:mt-0 md:h-96">
        <img
          src={QualityCont}
          alt=""
          className="h-[250] rounded-lg sm:h-[400]  "
        />
      </div>
    </div>
  );
};
