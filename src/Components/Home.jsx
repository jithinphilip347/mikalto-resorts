import Navbar from "./Navbar";
import Herobanner from "../assets/Herobannerr.jpg";
import Feature from "../assets/feature-1.jpg"
import FeatureBanner from "../assets/banner-2.jpg"
import Feature2 from "../assets/feature-2.jpg"
import Feature3 from "../assets/feature-3.jpg"
import Feature4 from "../assets/feature-4.jpg"
import CenterBanner from "../assets/center-banner.jpg"
import { VscArrowRight } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";




const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="relative overflow-hidden">
        {/* Apply a semi-transparent overlay to the background image */}
        <div className="absolute inset-0 bg-black opacity-45 z-10"></div>
        <img src={Herobanner} alt="" className="w-full z-0" />
      </div>
      <form action="" className="flex relative bottom-2 gap-6 px-8 z-20">
        <div className="flex flex-col relative bottom-[168px]">
          <p className="text-white font-semibold relative bottom-6">Checkin*</p>
          <input type="text" className="bg-transparent border-b-[1px]" />
        </div>
        <div className="flex flex-col relative bottom-[168px]">
          <p className="text-white font-semibold relative bottom-6">Checkout*</p>
          <input type="text" className="bg-transparent border-b-[1px]" />
        </div>
        <div className="flex flex-col relative bottom-48 ">
          <p className="text-white font-semibold relative bottom-1">Adults*</p><VscChevronDown  className="absolute top-[35px] left-[262px] text-white w-[24px] h-[24px]"/>
          <input type="text" className="bg-transparent border-[1px] h-12 w-72"  />
          
        </div>
        <div className="flex flex-col relative bottom-48">
          <p className="text-white font-semibold relative bottom-1">Children*</p><VscChevronDown className="absolute top-[35px] left-[262px] text-white w-[24px] h-[24px]" />

          <input type="text" className="bg-transparent border-[1px] h-12 w-72" />
        </div>
        <button className="bg-white text-blue-900 relative bottom-[168px] h-12 w-72 font-semibold hover:cursor-pointer hover:bg-blue-900 hover:text-white">Search</button>
      </form>
      <div className="flex items-center gap-2 p-10">

      <div className="flex flex-col items-start gap-5 w-96 ">
       <p className=" font-sans text-base text-gray-700">WELCOME TO</p>
       <h1 className=" font-branch text-4xl ">The Mikalto Luxury & Comfort Hotel</h1>
       <p className=" font-sans text-base text-gray-700">Welcome to our five-star hotel inPuerto de la Cruz’s
         old town. A marvellous combination of architecture,
          design and contemporary art. 32 rooms and 10 
          uniquely different suites ensure our guests’ stay is 
          extra special.</p>

        <p className=" font-sans text-base text-gray-700">In this luxurious getaway, no expense has been
             spared. You will be captivated by fine cuisines, the 
             naivety of local people and top notched services. 
             Extremely private space makes you feel the serenity 
             and peace of mind.</p>

             <img src="https://mikalto.gavencreative.com/wp-content/uploads/2023/07/textsvg.svg" alt="" />
              <img src={Feature} alt=""  className=" relative left-48 bottom-12 rounded-2xl"/>
      </div>

     <div className=" relative left-44 bottom-24">
      <img src={FeatureBanner} alt="" className=" rounded-2xl"/>
     </div>
      </div>
      <div className=" relative ">
        <div className=" flex flex-col gap-6 relative top-28">
        <p className=" font-sans text-base text-gray-700 absolute left-80 bottom-4 ">THE CONCEPT</p>
      
        </div>
         <div>
            <img src={Feature2} alt=""  className="relative bottom-16 left-[864px]"/>
            <img src={Feature4} alt=""className="relative bottom-2.5 left-[71px] "/>

            <h1 className=" font-branch text-4xl w-[688px] absolute left-[335px] bottom-[415px]">The hotel's distinctive profile is that of an Art hotel that is inspired by and integrated with nature. Our desire to be truly grounded, as well as our love for nature, is never-ending.</h1>

            <img src={Feature3} alt=""  className=" absolute right-[60px] top-[355px]"/>
            <p className=" font-sans text-base text-gray-700 w-[344px] absolute right-[494px] top-[403px]">We have a holistic philosophy which translates into creating a harmonious environment, complemented by wellness services that aim to detoxify and rejuvenate your mind, body and soul.</p>
      <h4 className=" font-sans text-base  text-gray-700 absolute right-[721px] top-[573px] flex gap-2">Find out more <VscArrowRight className=" relative top-1" /> </h4>
         </div>
      </div>
      <div>
        <img src={CenterBanner} alt="" className=" relative top-40" />
      </div>
    </div>
  );
};

export default Home;
