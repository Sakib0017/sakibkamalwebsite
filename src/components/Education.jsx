import React from "react";
import Navbar from "./Navbar";
import SSc from "../assets/Udemy.jpeg"
const Education = () => {
    return (
    <>
    <Navbar />
    <div className="grid md:grid-cols-3 max-w-7xl mx-auto   rounded  items-center justify-center top-[250px] relative" id="expertise">

    <div className="col-span-1 p-3">
        

        <div class="max-w-sm bg-blue-900 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src={SSc} alt="" className="p-3 rounded-lg "/>
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-200 dark:text-white">Secondary School Certificate 2012</h5>
                </a>
                <p class="mb-3 font-normal text-blue-200 dark:text-gray-400">I've Complited my Degree From St. Josephs High School, Khulna. For More Click The Button Read more...</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-900/90 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div className="col-span-1 p-3">
        

        <div class="max-w-sm bg-blue-900 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src={SSc} alt="" className="p-3 rounded-lg " />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-200 dark:text-white">Higher Secondary Certificate 2014</h5>
                </a>
                <p class="mb-3 font-normal text-blue-200 dark:text-gray-400">I've Complited my Degree From Model School & College, Khulna. For More Click The Button Read more...</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-900/90 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <div className="col-span-1 p-3">
        

        <div class="max-w-sm bg-blue-900 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src={SSc} alt="" className="p-3 rounded-lg "/>
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-200 dark:text-white">Bachelor of Science certificate 2020</h5>
                </a>
                <p class="mb-3 font-normal text-blue-200 dark:text-gray-400">I've Complited my Degree From Daffodil International University. For More Click The Button Read more...</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-900/90 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div> 
      </div>


     
   
    </>
    );
};
export default Education