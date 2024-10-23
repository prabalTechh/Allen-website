import { FaYoutube, FaFacebookSquare ,FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-[#0F1825]  mx-auto   ">
      <div className="max-w-screen-lg py-20 mx-auto flex gap-20  justify-center ">
        <ul className="flex flex-col gap-2 tracking-tighter ">
        <li className="font-semibold text-gray-200">About</li>
            <li className="font-extralight text-sm">Blog</li>
            <li className="font-extralight text-sm">News</li>
            <li className="font-extralight text-sm">MyExam</li>
            <li className="font-extralight text-sm">privacy policy</li>
        </ul>

        <ul className="flex flex-col gap-2 tracking-tighter ">
        <li className="font-semibold text-gray-200">Help & Support</li>
            <li  className="font-extralight text-sm">Refund Policy</li>
            <li  className="font-extralight text-sm">Transfer Policy</li>
            <li  className="font-extralight text-sm">Terms & Condition</li>
            <li  className="font-extralight text-sm">Contact Us</li>
            
        </ul>

        <ul className="flex flex-col gap-2 tracking-tighter ">
        <li className="font-semibold text-gray-200">Popular Goals</li>
            <li className="font-extralight text-sm">NEET UG</li>
            <li className="font-extralight text-sm">JEE Advanced</li>
            <li className="font-extralight text-sm">6th to 10th</li>
          
        </ul>

        <ul className="flex flex-col gap-2 tracking-tighter ">
        <li className="font-semibold text-gray-200">Courses</li>
            <li className="font-extralight text-sm">Ultimate Program</li>
            <li className="font-extralight text-sm">Distance learning</li>
            <li className="font-extralight text-sm">Online Test Series</li>
            
        </ul>
        <ul className="flex flex-col gap-2 tracking-tighter ">
        <li className="font-semibold text-gray-200">Centers</li>
            <li className="font-extralight text-sm">Kota</li>
            <li className="font-extralight text-sm">Bangalore</li>
            <li className="font-extralight text-sm">Indore</li>
            <li className="font-extralight text-sm">Delhi</li>
            <li className="font-extralight text-sm">more Centers</li>
            
        </ul>
        <ul className="flex flex-col gap-2 tracking-tighter ">
        <li className="font-semibold text-gray-200 ">Exam information</li>
            <li  className="font-extralight text-sm">JEE Main</li>
            <li className="font-extralight text-sm">JEE Advanced</li>
            <li className="font-extralight text-sm">NEET UG</li>
            <li className="font-extralight text-sm">NEET Online Test Series</li>
            <li className="font-extralight text-sm">more ...</li>
            
        </ul>
        
      </div>
      <hr className="h-1 border-gray-400 max-w-screen-lg mx-auto relative bottom-16" />

      <div className="max-w-screen-lg mx-auto pb-14 flex justify-between px-2 ">
        <h1>ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.</h1>
        <span className=" flex gap-2">
          <FaYoutube />
          <FaFacebookSquare />
          <FaXTwitter />
          <FaLinkedin />
        </span>
      </div>
     
    </div>
  );
};

export default Footer;
