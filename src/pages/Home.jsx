import { useState } from "react";
import Button from "../components/Button";

const Home = () => {
  const images = [
    "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729604921%2FCustomized_wy9dpe.webp&w=640&q=75",
    "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729604922%2FInteractive_cdbhfw.webp&w=640&q=75",
    "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729604912%2Fu_c_3_1_buiett.webp&w=640&q=75",
    "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729604923%2FStudy_eicbtr.webp&w=640&q=75"
  ];

  const images1= [
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729669258/Group_1171279293_1_e72ssd.png",
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1728302450/Homepage_Banner_1_sn5css.webp",
    "https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729669258/Group_1171279293_1_e72ssd.png"
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <main className="max-w-screen-lg mx-auto mt-12 px-8">
      {/* Header Section */}
      <section className="flex flex-wrap md:flex-nowrap gap-12">
        {/* Left Content */}
        <div className="flex flex-col gap-8 w-full text-white">
          <h1 className="text-4xl font-semibold leading-9 tracking-tight">
            Your Dream. <br /> Our Expertise.
          </h1>
          <h3 className="text-2xl">What brings you to us today?</h3>
          <div className="flex gap-2 flex-wrap">
            <Button>NEET</Button>
            <Button>JEE</Button>
            <Button>Grade 6-10</Button>
          </div>
        </div>

        {/* Right Content: Image Carousel */}
        <div className="w-full h-full flex flex-col items-center">
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-lg">
            <img
              src={images[activeIndex]}
              alt={`Slide ${activeIndex + 1}`}
              className="w-full h-full object-cover transition duration-500"
            />
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition ${
                  activeIndex === index ? "bg-blue-600" : "bg-gray-400"
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Image Section */}
      <section className="mt-20 flex flex-col items-center">
        <img
          src={images1[activeIndex]}
          alt="Additional Graphic"
          className=""
        />
        <div className="flex gap-2 mt-5">
          {images1.map((image, index) => (
            <div key={index} className="bottom-image">
              <button  key={index}
                className={`h-2 w-2 rounded-full transition ${
                  activeIndex === index ? "bg-blue-600" : "bg-gray-400"
                }`}
                onClick={() => handleDotClick(index)} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
