import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="relative">
      {/* navigation bar */}
      <img className="absolute w-full" src="/img/background.png"></img>
      <div className="sticky bg-transparent top-0 flex w-full p-3 justify-between items-center">
        <div className="flex">
          <img src="/img/rmklogo.png" alt="rmk logo"></img>
        </div>
        <div className="flex gap-5 text-white items-center">
          <div>
            <a href="#">
              <span>Company</span>
            </a>
          </div>
          <div>
            <a href="#">
              <span>Products</span>
            </a>
          </div>
          <div>
            <a href="#">
              <span>Quality</span>
            </a>
          </div>
          <div>
            <a href="#">
              <span>Stock</span>
            </a>
          </div>
          <div className="py-1 px-4 rounded-full border-0 bg-red-600">
            <a href="#">
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative ">
        {/* <div className="relative flex">
          <img className="absolute w-full" src="/img/background.png"></img>
        </div> */}

        {/* Main */}
        <div className="relative p-3 mt-32">
          <h1 className="font-bold md:text-6xl text-4xl text-white">
            Heat Echange Global Solution Leader
          </h1>
          <h2 className="md:text-4xl text-2xl text-white">
            The leading company specialized in tubing products
          </h2>
        </div>
      </div>
      <div className="relative w-full bg-white">
        {/* who we are */}
        <div>
          <div>
            <span>01</span>
            <span>Who we are</span>
          </div>
        </div>
      </div>
      {/* our products */}
      <div></div>
    </div>

    // <div className="flex relative" alt="Background image">
    //   <img className="w-full" src="/img/background.png" alt="backgroundimage"></img>
    //       <div className="absolute w-full" alt="Navbar">
    //         <div className="flex items-center justify-between w-full">
    //           <img className="m-3" src="/img/rmklogo.png" alt="RMK LOGO"></img>
    //           <div>
    //             <span className="text-lg text-white font-semibold m-3">Company</span>
    //             <span className="text-lg text-white font-semibold m-3">Products</span>
    //             <span className="text-lg text-white font-semibold m-3">Quality</span>
    //             <span className="text-lg text-white font-semibold m-3">Stocks</span>
    //             <span className="text-lg text-white font-semibold border-1 rounded-full bg-red-600 p-2 px-5 m-3">Contact</span>
    //           </div>
    //         </div>
    //       </div>
    //       <div className= "absolute">
    //         <h1 className="text-white">Heat Exchange Global Solution Leader</h1>
    //         <h2 className="text-white">The leading company specialized in tubing products</h2>
    //       </div>
    // </div>
  );
}
