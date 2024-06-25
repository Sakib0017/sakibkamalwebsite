import Navbar from "./Navbar";
import Sakib from "../assets/Sakib.png";
import React from "react";
import SSc from "../assets/Udemy.jpeg"
import react from "../assets/react.webp"
const Home = () => {


  return (

    <div >
     
<Navbar />
<div className="absolute  top-[80px] right-0">
<img className="md:h-[900px] md:w-auto h-auto" src={react} />
</div>

<div className="absolute  top-[180px] left-1">
<div className="flex items-center pt-5">
              <svg className="w-[40px] h-[40px] fill-blue-900" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

                <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path>

              </svg>
             
            </div>
            <div className="flex items-center pt-5">
              <svg className="w-[40px] h-[40px] fill-blue-900" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z"></path>

              </svg>
             
            </div>
            <div className="flex items-center pt-5">
              <svg className="w-[40px] h-[40px] fill-blue-900" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>

              </svg>
           
            </div>
            <div className="flex items-center pt-5">
              <svg className="w-[40px] h-[40px] fill-blue-900" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">

                <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32V448c0 35.3 28.7 64 64 64H448.5c35.5 0 64.2-28.8 64-64.3l-.7-160.2h32zM288 160a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM176 400c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H192c-8.8 0-16-7.2-16-16z"></path>

              </svg>
              
            </div>
            <div className="flex items-center pt-5">
            <svg className="w-[40px] h-[40px]  fill-blue-900 hover:fill-gray-400" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>

            </svg>
             
            </div>
            <div className="flex items-center pt-5">
            <svg className="w-[40px] h-[40px]  fill-blue-900 hover:fill-gray-400" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path>

            </svg>
            
            </div>
            <div className="flex items-center pt-5">
            <svg className="w-[40px] h-[40px]  fill-blue-900 hover:fill-gray-400" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

            <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path>

            </svg>
            
            </div>
           
</div>
<div className="grid md:grid-cols-2 max-w-7xl mx-auto  rounded   items-center justify-center top-[100px] relative" id="expertise">
<div className="col-span-1 p-20  mx-auto text-start  mt-8 relative">
  <h1 className="text-[32px] text-center">Hello, My Name is</h1>
  <h1 className="text-[48px] text-center">MD. SAKIB KAMAL</h1>
  
  <h1 className="text-[32px] text-center">WEB DEVELOPER </h1>
</div>

          
      </div>
      <div className="grid md:grid-cols-2 max-w-7xl mx-auto rounded   items-center justify-center top-[300px] relative" id="expertise">
        <div className="col-span-1 p-20  mx-auto text-start items-center relative">

          <h1 className=" text-blue-900 font-extrabold text-[32px]">I'M MERN STACK DEVELOPER</h1>

          <p className="text-[16px] text-blue-900 pt-5 font-medium text-gray-600/60">The MERN stack is a collection of technologies that help developers build robust and scalable web applications using JavaScript. The acronym “MERN” stands for MongoDB, Express, React, and Node. js, with each component playing a role in the development process. Thats Why i choose MERN Stack.</p>




        </div>
        <div className="col-span-1 p-10  mt-10 mx-auto  relative">
          <div className="flex flex-col  gap-2">
            <p className="text-start text-[14px] text-blue-900  font-extrabold">html 90%</p>
            <div class="w-[350px] h-[17px] bg-blue-900 rounded dark:bg-purple-600">
              <div class="bg-purple-600  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '90%' }}> 90%</div>
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <p className="text-start text-[14px] text-blue-900 font-extrabold">css 90%</p>
            <div class="w-[350px] h-[17px] bg-blue-900 rounded dark:bg-gray-700">
              <div class="bg-purple-600  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '90%' }}> 90%</div>
            </div>
          </div>

          <div className="flex flex-col  gap-2">
            <p className="text-start text-[14px] text-blue-900 font-extrabold">react.js 70%</p>
            <div class="w-[350px] h-[17px] bg-blue-900 rounded dark:bg-gray-700">
              <div class="bg-purple-600  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '70%' }}> 70%</div>
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <p className="text-start text-[14px] text-blue-900 font-extrabold">tailwindcss 90%</p>
            <div class="w-[350px] h-[17px] bg-blue-900 rounded dark:bg-gray-700">
              <div class="bg-purple-600  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '90%' }}> 90%</div>
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <p className="text-start text-[14px] text-blue-900 font-extrabold">node.js 70%</p>
            <div class="w-[350px] h-[17px] bg-blue-900 rounded dark:bg-gray-700">
              <div class="bg-purple-600  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '70%' }}> 70%</div>
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <p className="text-start text-[14px] text-blue-900 font-extrabold">Mongodb 70%</p>
            <div class="w-[350px] h-[17px] bg-blue-900 rounded dark:bg-gray-700">
              <div class="bg-purple-600  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '70%' }}> 70%</div>
            </div>
          </div>

        </div>
      </div>
      <div className="grid md:grid-cols-3 max-w-7xl mx-auto   rounded  items-center justify-center top-[250px] relative" id="expertise">

<div className="col-span-1 p-3">
    

    <div class="max-w-sm bg-blue-900 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg" src={SSc} alt="" className="p-3 rounded-lg "/>
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-200 dark:text-blue-900">Secondary School Certificate 2012</h5>
            </a>
            <p class="mb-3 font-normal text-blue-200 dark:text-gray-400">I've Complited my Degree From St. Josephs High School, Khulna. For More Click The Button Read more...</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-900 bg-blue-900/90 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-200 dark:text-blue-900">Higher Secondary Certificate 2014</h5>
            </a>
            <p class="mb-3 font-normal text-blue-200 dark:text-gray-400">I've Complited my Degree From Model School & College, Khulna. For More Click The Button Read more...</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-900 bg-blue-900/90 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-200 dark:text-blue-900">Bachelor of Science certificate 2020</h5>
            </a>
            <p class="mb-3 font-normal text-blue-200 dark:text-gray-400">I've Complited my Degree From Daffodil International University. For More Click The Button Read more...</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-900 bg-blue-900/90 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
</div> 
  </div>
      </div>
   
  );
}

export default Home;
