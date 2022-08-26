import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Test() {
  return (
    <>
      {/* Nav bar */}
      <div className="sticky z-50 top-0">
        <div className="bg-transparent bg-gradient-to-b from-black/50 flex w-full p-3 md:p-14 justify-between items-center">
          <div className="flex cursor-pointer">
            <a href="">
            <img src="/img/rmklogo.png" alt="rmk logo"></img>
            </a>
          </div>
          <div className="p-4 cursor-pointer md:hidden" id="burger">
                <svg className="h-10 w-10 stroke-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>
              </div>
          <div className="gap-5 text-white text-lg items-center hidden md:flex md:block">
            <div className="hover:font-medium hover:border-b-2 border-white">
              <a href="#">
                <span>Company</span>
              </a>
            </div>
            <div  className="hover:font-medium hover:border-b-2 border-white">
              <a href="#">
                <span>Products</span>
              </a>
            </div>
            <div  className="hover:font-medium hover:border-b-2 border-white">
              <a href="#">
                <span>Quality</span>
              </a>
            </div>
            <div  className="hover:font-medium hover:border-b-2 border-white">
              <a href="#">
                <span>Stock</span>
              </a>
            </div>
            <div className="py-1 px-4 rounded-full border-0 bg-red-600 hover:bg-red-700">
              <a href="#">
                <span className="font-semibold tracking-wider">Contact</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 inset-x-0">
        {/* Section 1 */}
        <div className="h-screen relative">
          {/* image */}
          <img
            className="absolute w-full h-full object-cover"
            src="/img/background.png"
          ></img>
          <div className="absolute w-full h-full object-cover bg-gradient-to-t from-black/30" />
          <div className="relative flex flex-col h-full justify-center itmes-center">
            <p className="font-bold text-white text-4xl md:text-5xl p-5 md:pl-10">
              {" "}
              Heat Exchange Global Solution Leader{" "}
            </p>
            <p className=" text-white text-lg md:text-3xl font-light pl-5 md:pl-10">
              {" "}
              The leading company specialized in tubing products{" "}
            </p>
          </div>
        </div>
        {/* Section 2 */}
        <div>
          {/* who we are */}
          <div className="h-full flex bg-white">
            <div className="p-5 md:p-14 mt-10 mb-20">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl md:text-3xl">01</span>
                <span className="w-36 border-b border-2 border-red-500"></span>
                <span className="font-bold text-xl md:text-3xl">Who we are</span>
              </div>
              <div className="mt-5">
                <p className="text-2xl font-medium">
                  RMK tube is an established tubing company since 1997. Our
                  factory combined tubing line, finning line and U-bending line
                  in one place. It makes possible for non-stop production from
                  drawing to U-tube. Clients don't need to waste their valuable
                  time. We will continue our efforts to make our customers
                  satisfied with good quality and price.
                </p>
              </div>
              {/* products */}
              <div className="text-3xl font-bold mt-10">Our products</div>
              <div className="grid md:grid-cols-3 mt-5 gap-2">
                <div>
                  <img
                    className="rounded-lg w-full object-cover"
                    src="/img/finned.png"
                  ></img>
                  <p className="mt-2 text-2xl font-semibold">Finned Tube</p>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                  <div className="mt-3 mb-10">
                    <a href="#">
                      <span className="bg-neutral-700 text-sm py-1 px-3 rounded-full text-neutral-100 hover:bg-neutral-900">
                        view more
                      </span>
                    </a>
                  </div>
                </div>
                <div>
                    <img
                        className="rounded-lg w-full object-cover"
                        src="/img/seamless.png">
                    </img>
                  <p className="mt-2 text-2xl font-semibold">Seamless Tube</p>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                  <div className="mt-3 mb-10">
                    <a href="#">
                      <span className="bg-neutral-700 text-sm py-1 px-3 rounded-full text-neutral-100 hover:bg-neutral-900">
                        view more
                      </span>
                    </a>
                  </div>
                </div>
                <div>
                  <img
                    className="rounded-lg w-full object-cover"
                    src="/img/piping.png"
                  ></img>
                  <p className="mt-2 text-2xl font-semibold">
                    Piping material for On-Offshore
                  </p>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                  <div className="mt-3 mb-10">
                    <a href="#">
                      <span className="bg-neutral-700 text-sm py-1 px-3 rounded-full text-neutral-100 hover:bg-neutral-900">
                        view more
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section 3 */}
        <div>
          <div className="flex h-full bg-neutral-800">
            <div className="p-5 md:p-14 mt-11 mb-20 bg-neutral-800">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-xl md:text-3xl">02</span>
                <span className="text-white w-36 border-b border-2 border-red-500"></span>
                <span className="text-white font-bold text-xl md:text-3xl">
                  Who we work
                </span>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-10 mt-10">
                <img className="grayscale brightness-200" src="/img/posco.png" alt="Posco logo"></img>
                <img className="grayscale brightness-200" src="/img/posco.png" alt="Posco logo"></img>
                <img className="grayscale brightness-200" src="/img/posco.png" alt="Posco logo"></img>
                <img className="grayscale brightness-200" src="/img/posco.png" alt="Posco logo"></img>
                <img className="grayscale brightness-200" src="/img/posco.png" alt="Posco logo"></img>
                <img className="grayscale brightness-200" src="/img/posco.png" alt="Posco logo"></img>
                <img className="grayscale brightness-200" src="/img/posco.png" alt="Posco logo"></img>
                <img className="grayscale brightness-200" src="/img/posco.png" alt="Posco logo"></img>
                <img className="grayscale brightness-200" src="/img/posco.png" alt="Posco logo"></img>
                <img className="grayscale brightness-200" src="/img/posco.png" alt="Posco logo"></img>
                <img className="grayscale brightness-200" src="/img/posco.png" alt="Posco logo"></img>
                <img className="grayscale brightness-200" src="/img/posco.png" alt="Posco logo"></img>
              </div>
              <div>
                <div className="grid gap-5 mt-10 md:grid-cols-2 md:gap-7">
                  {/* card goes from here */}
                  {/* card1 */}
                  <div className="p-7 md:pt-10 md:rounded-2xl bg-gradient-to-tr from-white/10 border-2 border-white/5 backdrop-blur-sm rounded-lg">
                    <img src="/img/comma.png" className="h-5 opacity-80"></img>
                    <p className="mt-5 text-neutral-50 text-xl font-semibold tracking-wide">
                      Hello I am very happy to work with you! This is my first
                      project and I am cute!
                    </p>
                    <div className="flex mt-3">
                      <div className="h-12 w-12">
                        <img src="/img/circle.png"></img>
                      </div>
                      <div className="pl-3">
                        <p className="text-neutral-200 font-semibold">
                          Elizabeth Taylor
                        </p>
                        <p className="text-neutral-200 font-light">
                          Hyundai Steel.co
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card2 */}
                  <div className="p-7 md:pt-10 md:rounded-2xl bg-gradient-to-tr from-white/10 border-2 border-white/5  backdrop-blur-sm rounded-md">
                    <img src="/img/comma.png" className="h-5 opacity-80"></img>
                    <p className="mt-5 text-neutral-50 text-xl font-semibold tracking-wide">
                      Hello I am very happy to work with you! This is my first
                      project and I am cute!
                    </p>
                    <div className="flex mt-3">
                      <div className="h-12 w-12">
                        <img src="/img/circle.png"></img>
                      </div>
                      <div className="pl-3">
                        <p className="text-neutral-200 font-semibold">
                          Elizabeth Taylor
                        </p>
                        <p className="text-neutral-200 font-light">
                          Hyundai Steel.co
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section 4 */}
        <div>
          <div className="h-[800px] relative">
            <div className="absolute inset-0">
              <img
                className="w-full h-full object-cover"
                src="/img/bg2.jpg"
              ></img>
            </div>
            <div className="relative z-20 mb-20 p-3 md:p-14">
              <div className="flex items-center gap-2 mt-10">
                <span className="text-white font-bold text-xl md:text-3xl">03</span>
                <span className="text-white w-36 border-b border-2 border-red-500"></span>
                <span className="text-white font-bold text-xl md:text-3xl">
                  What we gurantee
                </span>
              </div>
              <div className="mt-10">
                <div className="text-neutral-50">
                  <p className="text-4xl font-bold">Fast response</p>
                  <p className="text-lg">Reply within 1 hour. 24/7 open</p>
                </div>
                <div className="text-neutral-50 pt-3">
                  <p className="text-4xl font-bold">Nice price</p>
                  <p className="text-lg">
                    Affordable price with the best quality
                  </p>
                </div>
                <div className="text-neutral-50 pt-3">
                  <p className="text-4xl font-bold">Best quality</p>
                  <p className="text-lg">
                    Made by the professionals with 30 years of experience
                  </p>
                </div>
              </div>
              {/* contact */}
                <div className="h-full">
                    <div className="w-full px-4 max-w-2xl mx-auto sm:px-6 lg:px-8 lg:max-w-7xl mt-10">
                    <div className=
                    "bg-gradient-to-tr from-white/40 backdrop-blur-sm border-2 border-white/5 h-60 rounded-xl">
                        <div className="flex h-60 items-center justify-center">
                        <div className="flex flex-col items-center">
                            <div className="text-white text-2xl md:text-4xl font-bold uppercase">Get in Touch</div>
                            <div className="text-white">We will get back to you within 6 hours</div>
                            <div className="text-white mt-5">
                                <a href="#" 
                                className="text-sm font-medium uppercase tracking-wider bg-red-600 p-2 px-4 rounded-full hover:bg-red-700">
                                Contact
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        {/* Section 5 - Footer */}
        <div>
          <div className="h-[300px] bg-neutral-900">
            <div className="p-5 md:px-14 md:grid grid-cols-5 lg:grid-cols-8">
              <div className="mt-5 md:mt-10">
                <img src="/img/rmklogo.png"></img>
              </div>
              <div className="text-neutral-300 md:col-span-4 lg:grid-cols-7 mt-5 md:mt-10">
                <p className="font-bold text-sm">RMK Co.,Ltd</p>
                <p className="font-medium text-xs">
                  25,CHUNHWANONGGONGDANJI-GIL,BUBUK-MYEON,MIRYANG-SI,GYEONGSANGNAM-DO,KOREA
                </p>
                <p className="font-medium text-xs">
                  TEL : 82-55-353-5827 FAX : 82-55-354-5829
                </p>
                <p className="font-light text-xs">
                  COPYRIGHTⓒ2012 RMK Co., Ltd. ALL RIGHTS RESERVED. CONTACT
                  WEBMASTER FOR MORE INFORMATION.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
