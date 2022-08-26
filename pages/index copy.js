import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div> 
    {/* <!--first block--!> */}
    <div>
      {/* <!--nav bar--!> */}
      <div>
        <div>
          <a href="https://www.rmktube.com"> RMK </a>
          <img src="RMK LOGO-white" alt="RMK LOGO"></img>
        </div>
      </div>
      </div>      
  </div>
//     <div className="text-gray-600">
//       <div className="grid md:grid-cols-3">
//         {/* <!-- content wrapper --> */}
//         <div className="md:col-span-1 md:flex md:justify-end">
//           <nav className="text-right">
//             <div className="flex justify-between items-center">
//               <h1 className="font-bold uppercase p-4 border-b border-gray-100">
//                 <a href="/" className="hover:text-gray-700">Food Ninja</a>
//               </h1>
//               <div className="p-4 cursor-pointer md:hidden" id="burger">
//                 <svg className="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
// </svg>
//               </div>
//             </div> 
//             <ul className="text-sm mt-6 hidden md:block" id="menu">
//               <li className="text-gray-700 font-bold py-1">
//                 <a href="#" className="px-4 flex justify-end border-r-4 border-red-400">
//                   <span>Home</span>
//                   <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
// </svg>
//                 </a>
//               </li>
//               <li className="py-1">
//                 <a href="#" className="px-4 flex justify-end border-r-4 border-white">
//                   <span>About</span>
//                   <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
// </svg>
//                 </a>
//               </li>
//               <li className="py-1">
//                 <a href="#" className="px-4 flex justify-end border-r-4 border-white">
//                   <span>Contact</span>
//                   <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
// </svg>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         {/* <!--end nav--> */}

//         <div className="px-16 py-6 bg-gray-100 md:col-span-2">
//           <div className=" text-red-400 flex justify-center md:justify-end">
//             <a href="#" className="btn border-red-400 md:border-2 hover:bg-red-400 hover:text-white">Log in</a>
//             <a href="#" className="btn ml-2 border-red-400 md:border-2 hover:bg-red-400 hover:text-white">Sign up</a>
//           </div>

//           <header>
//             <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
//             <h3 className="text-2xl font-semibold">For Ninjas</h3>
//           </header>

//           <div>
//             <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>

//             <div className="mt-8 grid lg:grid-cols-3 gap-10">
//               {/* <!-- cards go here--> */}
//               <div className="card hover:shadow-lg">
//                   <img src="/img/stew.jpg" alt="stew" className="w-full h-32 sm:h-48 object-cover"/>
//                 <div className="m-4">
//                   <span className="font-bold">5 Bean Chilli Stew</span>
//                   <span className="block text-gray-500 text-sm">Recipe by Mario</span>
//                 </div>
//                 <div className="badge">
//                 <svg className="w-5 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
// </svg>
//                   <span>25 mins</span>
//                 </div>
//               </div>
//               <div className="card hover:shadow-lg">
//                   <img src="/img/noodle.jpg" alt="noodle" className="w-full h-32 sm:h-48 object-cover"/>
//                 <div className="m-4">
//                   <span className="font-bold">Veg Noodles</span>
//                   <span className="block text-gray-500 text-sm">Recipe by Mario</span>
//                 </div>
//                 <div className="badge">
//                 <svg className="w-5 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
// </svg>
//                   <span>25 mins</span>
//                 </div>
//               </div>
//               <div className="card hover:shadow-lg">
//                   <img src="/img/curry.jpg" alt="curry" className="w-full h-32 sm:h-48 object-cover"/>
//                 <div className="m-4">
//                   <span className="font-bold">Tofu Curry</span>
//                   <span className="block text-gray-500 text-sm">Recipe by Mario</span>
//                 </div>
//                 <div className="badge">
//                 <svg className="w-5 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
// </svg>
//                   <span>25 mins</span>
//                 </div>
//               </div>
//             </div>

//             <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>

//             <div className="mt-8">
//               {/* <!-- cards go here--> */}</div>

//             <div className="flex justify-center">
//               <div className="btn bg-stone-200 hover:shadow-inner">Load more</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
  );
}
 
