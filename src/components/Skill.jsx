import React from "react";
import Navbar from "./Navbar";
const Skill = () => {
 

  return (

    <div>
     

<Navbar />
     
      <div className="grid md:grid-cols-2 max-w-7xl mx-auto rounded   items-center justify-center top-[300px] relative" id="expertise">
        <div className="col-span-1 p-20  mx-auto text-start items-center relative">

          <h1 className=" text-white font-extrabold text-[32px]">I'M MERN STACK DEVELOPER</h1>

          <p className="text-[16px] text-white pt-5 font-medium text-gray-600/60">The MERN stack is a collection of technologies that help developers build robust and scalable web applications using JavaScript. The acronym “MERN” stands for MongoDB, Express, React, and Node. js, with each component playing a role in the development process. Thats Why i choose MERN Stack.</p>




        </div>
        <div className="col-span-1 p-10  mt-10 mx-auto  relative">
          <div className="flex flex-col  gap-2">
            <p className="text-start text-[14px] text-white  font-extrabold">html 90%</p>
            <div class="w-[350px] h-[17px] bg-white rounded dark:bg-purple-600">
              <div class="bg-purple-600  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '90%' }}> 90%</div>
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <p className="text-start text-[14px] text-white font-extrabold">css 90%</p>
            <div class="w-[350px] h-[17px] bg-white rounded dark:bg-gray-700">
              <div class="bg-purple-600  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '90%' }}> 90%</div>
            </div>
          </div>

          <div className="flex flex-col  gap-2">
            <p className="text-start text-[14px] text-white font-extrabold">react.js 70%</p>
            <div class="w-[350px] h-[17px] bg-white rounded dark:bg-gray-700">
              <div class="bg-purple-600  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '70%' }}> 70%</div>
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <p className="text-start text-[14px] text-white font-extrabold">tailwindcss 90%</p>
            <div class="w-[350px] h-[17px] bg-white rounded dark:bg-gray-700">
              <div class="bg-purple-600  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '90%' }}> 90%</div>
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <p className="text-start text-[14px] text-white font-extrabold">node.js 70%</p>
            <div class="w-[350px] h-[17px] bg-white rounded dark:bg-gray-700">
              <div class="bg-purple-600  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '70%' }}> 70%</div>
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <p className="text-start text-[14px] text-white font-extrabold">Mongodb 70%</p>
            <div class="w-[350px] h-[17px] bg-white rounded dark:bg-gray-700">
              <div class="bg-purple-600  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '70%' }}> 70%</div>
            </div>
          </div>

        </div>
      </div>




    </div>
  );
}

export default Skill;
