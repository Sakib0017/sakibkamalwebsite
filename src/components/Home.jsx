import Navbar from "./Navbar";
import React from 'react';
import Sakib from "../assets/Sakib.png"
const Home = () => {

  
  
  return (

    <div className="bg-purple-100/5 ">
     <Navbar />
     <div className=" ">

      

<div className="grid sm:grid-cols-9 max-w-7xl mx-auto  rounded flex items-center justify-center mt-20 relative " id="expertise">

  <div className="mx-auto p-5 col-span-5 text-start mt-8 relative">
  <p className="text-[15px] text-[#ffffff] font-bold font-mono">Software Developer(Frontend)</p>
    <p className="text-[32px] text-gray-200 font-bold font-mono">Hello Everybody, I'M</p>
    <h1 className="text-[#ffffff] text-[#ffffff] font-extrabold font-mono text-[32px]">MD. SAKIB KAMAL</h1>
    <p className="text-[#ffffff]  bg-yellow-300/20 p-1 rounded font-medium text-[14px] font-mono">I, the undersigned, certify that I was a former employee of the Client</p>
    <p className="text-[#ffffff]  bg-yellow-300/20 p-1 rounded font-medium text-[14px] mt-2 font-mono">immediately before the submission of this proposal, and to the best of</p>
    <p className="text-[#ffffff]  bg-yellow-300/20 p-1 rounded font-medium text-[14px] mt-2 font-mono">my knowledge and belief, this bio data correctly describes myself, my</p>
    <p className="text-[#ffffff]  bg-yellow-300/20 p-1 rounded font-medium text-[14px] mt-2 font-mono">qualifications, and my experience.</p>
    <div className="pt-5   me-auto  relative">


     

    </div>

    <div className="flex gap-5 mx-auto items-center pt-5">
      <button className="w-[150px] text-[14px] p-3 rounded-full h-auto hover:bg-purple-100/20 bg-yellow-200/20 font-mono  flex font-bold text-gray-900">
        <p className="w-[18px] h-[18px] mx-auto text-white ">Resume</p>
      <svg className="w-[18px] h-[18px] mx-auto pl-1 fill-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

     <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path>

      </svg>
      </button>
      <svg className="w-[35px] h-[35px]   fill-yellow-300/50 hover:fill-blue-300/50" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

        <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>

      </svg>
      <svg className="w-[35px] h-[35px]   fill-yellow-300/50 hover:fill-gray-300/50" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-23.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-22.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path>

      </svg>
      <svg className="w-[35px] h-[35px]  fill-yellow-300/50 hover:fill-purple-300/50" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

        <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path>

      </svg>
    </div>
    
  </div>
  <div className="ms-auto col-span-4 mt-8  p-5">
    <img src={Sakib} alt="Sakib" className="h-[350px]  w-[330px] bg-yellow-300/20  rounded hover:bg-purple-300/20" />
    </div>
    
</div>

</div>
<div className="grid sm:grid-cols-3  max-w-7xl mx-auto flex  items-center justify-center mt-20 pb-20 gap-5 ">
  <div className="  col-span-1 text-start bg-green-300/20 rounded hover:bg-purple-100/20 shadow-2xl rounded mt-8 p-10 mr-0">
   <div className=" items-start">
      
      <p className=" font-bold  text-[28px] text-white font-mono  p-1 rounded">UI/UX Design</p>
      <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
            <li className=" font-medium  text-[18px] text-white font-mono bg-yellow-300/20 p-1 rounded">Adobe XD</li>
            <li className=" font-medium  text-[18px] text-white font-mono bg-yellow-300/20 p-1 rounded">Figma</li>
            
        </ul>
     

   </div>
  </div>
  <div className="  col-span-1 text-start bg-green-300/20 rounded hover:bg-purple-100/20 p-10 shadow-2xl rounded mt-8  mr-0">
   <div className="  items-start">
      <p className="font-bold text-[28px] text-white font-mono  p-1 rounded">Web Designer</p>
      <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
            <li className=" font-medium  text-[18px] text-white font-mono bg-yellow-300/20 p-1 rounded">HTML5, css3, bootstrap</li>
            <li className=" font-medium  text-[18px] text-white font-mono bg-yellow-300/20 p-1 rounded">reactjs, tailwind css</li>
           
        </ul>
   </div>
  </div>
  <div className="  col-span-1 text-start bg-green-300/20 rounded hover:bg-purple-100/20 p-10 shadow-2xl rounded mt-8  mr-0">
   <div className="  items-start">
      <p className=" font-bold text-[28px] text-white font-mono p-1 rounded">Web Development</p>
      <ul class="ps-5 mt-2 space-y-1 list-disc list-inside ">
            <li className=" font-medium  text-[18px] text-white font-mono bg-yellow-300/20 p-1 rounded">nodejs expressjs, mongodb</li>
            <li className=" font-medium  text-[18px] text-white font-mono bg-yellow-300/20 p-1 rounded">php, mysql, mariadb</li>
            
        </ul>
   </div>
  </div>
  </div>

  















  
</div>

     
  );
}

export default Home;
