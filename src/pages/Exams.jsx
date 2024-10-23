import Button from "../components/Button";
import Card from "../components/Card";

const Exams = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col gap-12 px-4 lg:px-8 py-12">
      {/* Header Image */}
      <img
        src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729669418/dark_w_CTA_13_n3xwvh.webp"
        alt="JEE Banner"
        className="w-full object-cover"
      />

      {/* Title and Button Filters */}
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-semibold">JEE Programs for Class 12th Plus</h1>
        <div className="flex gap-2 items-center px-2 flex-wrap">
          <Button>Filters</Button>
          <span className="w-px h-6 bg-slate-400 mx-2" />
          <Button>Live</Button>
          <Button>Online Test Series</Button>
          <Button>Recorded</Button>
          <Button>Practice</Button>
        </div>
      </div>

      {/* Live Online Programs Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Live Online Programs</h1>
        <img
          src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1727084826/Live_oooh8u.webp"
          alt="Live Program"
          className="h-20"
        />
      </div>

      {/* Separator */}
      <hr className="w-full border-slate-300 relative bottom-11" />

      {/* Placeholder Section */}
      <div className=" rounded-2xl gap-8 flex w-[90%]  ">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Exams;
