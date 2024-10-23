import Button from "../components/Button";
const Card = () => {
  return (
    <div className="flex flex-col px-4 py-3 rounded-3xl bg-slate-800 ">
      <div className="w-fit rounded-3xl uppercase text-gray-300 bg-black  text-xs">
        <Button>Live</Button>
      </div>
      <div className="flex flex-col text-sm gap-2 py-4">
        <h2 className="text-lg">JEE Main Crash Course</h2>
        <h4 className="text-base font-light">JEE Main Only</h4>
        <span className="flex flex-col gap-2 ml-2 ">
          <p>✔️ Live classes from ALLEN Kota's top faculty</p>
          <p>✔️ Course content to stay available till Main Session 2</p>
          <p>✔️ 24/7 doubt resolution, academic guidance & more</p>
        </span>

        <div className="flex justify-between py-4 ">
         <span className="text-xs"><p>₹12,000</p>
         <hr className="w-10 relative bottom-2  " /></span> 
          <div className="text-lg tracking-tighter relative top-6">₹9,999 <span className="text-blue-600">Know more</span></div>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
