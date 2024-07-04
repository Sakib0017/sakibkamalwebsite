import Navbar from "./Navbar";
import React, { useEffect, useState } from 'react';
import Go from "../assets/go.png"
import Koha from "../assets/koha.png"
import Sakib from "../assets/Sakib.png"
import Mern from "../assets/mern.png"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';


import 'react-vertical-timeline-component/style.min.css';

const Home = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prevParticles) => [
        ...prevParticles,
        { id: prevParticles.length, left: Math.random() * 100 + '%' },
      ]);
    }, 150); 
    return () => clearInterval(interval);
  }, []);
  return (

    <div className="bg-blue-900/70">

      <Navbar />
     

      <div className="flex flex-wrap max-w-7xl mx-auto rounded items-center justify-center top-[120px] relative gap-10 backdrop-blur-sm" id="expertise">
      <div className="absolute w-full h-full ">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#161616] rounded-full"
          style={{ left: particle.left, animation: `sand ${Math.random() * 5 + 5}s linear infinite` }}
        />
      ))}
    </div>
        <div className="me-auto p-5 text-start mt-8 relative mr-0">
          <p className="text-[15px] text-[#161616] font-bold">HELLO EVERYBODY, I'M</p>
          <h1 className="text-[#161616] text-[#161616] font-extrabold text-[32px]">MD. SAKIB KAMAL</h1>
          <p className="text-[15px] text-[#161616] font-bold">WEB DEVELOPER</p>


          <div className="pt-5   me-auto  relative">


            <div className="flex flex-col  gap-2">
              <p className="text-start text-[14px] text-[#161616] font-extrabold">react.js 70%</p>
              <div class="sm:w-[400px] h-[17px] bg-gray-600 rounded dark:bg-gray-600">
                <div class="bg-[#161616]  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '70%' }}> 70%</div>
              </div>
            </div>
            <div className="flex flex-col  gap-2">
              <p className="text-start text-[14px] text-[#161616] font-extrabold">tailwindcss 90%</p>
              <div class="sm:w-[400px] h-[17px] bg-gray-600 rounded dark:bg-gray-600">
                <div class="bg-[#161616]  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '90%' }}> 90%</div>
              </div>
            </div>
            <div className="flex flex-col  gap-2">
              <p className="text-start text-[14px] text-[#161616] font-extrabold">node.js 70%</p>
              <div class="sm:w-[400px] h-[17px] bg-gray-600 rounded dark:bg-gray-600">
                <div class="bg-[#161616]  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '70%' }}> 70%</div>
              </div>
            </div>
            <div className="flex flex-col  gap-2">
              <p className="text-start text-[14px] text-[#161616] font-extrabold">express.js 50%</p>
              <div class="sm:w-[400px] h-[17px] bg-gray-600 rounded dark:bg-gray-600">
                <div class="bg-[#161616]  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '50%' }}> 50%</div>
              </div>
            </div>
            <div className="flex flex-col  gap-2">
              <p className="text-start text-[14px] text-[#161616] font-extrabold">Mongodb 70%</p>
              <div class="sm:w-[400px] h-[17px] bg-gray-600 rounded dark:bg-gray-600">
                <div class="bg-[#161616]  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '70%' }}> 70%</div>
              </div>
            </div>

          </div>

          <div className="flex gap-5 mx-auto items-center pt-5">
            <svg className="w-[50px] h-[50px]   fill-[#161616] hover:fill-gray-400" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

              <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>

            </svg>
            <svg className="w-[50px] h-[50px]   fill-[#161616] hover:fill-gray-400" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

              <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path>

            </svg>
            <svg className="w-[50px] h-[50px]  fill-[#161616] hover:fill-gray-400" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

              <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path>

            </svg>
          </div>
          
        </div>
        <div className="ms-auto text-start mt-8 relative mr-0">
          <img src={Sakib} className="h-[600px]  w-full rounded-2xl object-cover p-20" />
          </div>
          
      </div>
      
      <div className="mt-20 max-w-7xl mx-auto items-center relative justify-center">
      <div className="absolute w-full z-10 h-full ">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#161616]  rounded-full "
          style={{ left: particle.left, animation: `sand ${Math.random() * 5 + 5}s linear infinite` }}
        />
      ))}
    </div>
        <h1 className="text-center text-[40px]  font-bold mb-20 z-20 text-[#161616] ">Educational Qualification</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element "
            contentStyle={{ background: '#161616', color: '#fff' }}
            contentArrowStyle={{ borderRight: '10px solid  #161616' }}

            iconStyle={{ background: '#161616', color: '#fff' }}
            icon={<i className="fa fa-check-circle"></i>}
          >
            <h1 className="text-[28px] font-bold">Secondary School Certificate</h1>
            <p className="text-[14px] font-bold">Session : 2010-2012</p>
            <p className="text-[14px] font-bold">Instritution Name : St. Josephs High School, Khulna</p>
            <p className="text-[14px] font-bold">Subject : Science</p>
            <p className="text-[14px] font-bold">Passing Year : 2012</p>
            <p className="text-[14px] font-bold">Result : 4.75/5.00</p>
            <button className="text-[14px] bg-gray-900 text-blue-400 rounded-lg  p-3 mt-2 font-bold">Download certificate</button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: '#161616', color: '#fff' }}
            contentArrowStyle={{ borderRight: '10px solid  #161616' }}

            iconStyle={{ background: '#161616', color: '#fff' }}
            icon={<i className="fa fa-check-circle"></i>}
          >
            <h1 className="text-[28px] font-bold">Secondary School Certificate</h1>
            <p className="text-[14px] font-bold">Session : 2010-2012</p>
            <p className="text-[14px] font-bold">Instritution Name : St. Josephs High School, Khulna</p>
            <p className="text-[14px] font-bold">Subject : Science</p>
            <p className="text-[14px] font-bold">Passing Year : 2012</p>
            <p className="text-[14px] font-bold">Result : 4.75/5.00</p>
            <button className="text-[14px] bg-gray-900 text-blue-400 rounded-lg  p-3 mt-2 font-bold">Download certificate</button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: '#161616', color: '#fff' }}
            contentArrowStyle={{ borderRight: '10px solid  #161616' }}

            iconStyle={{ background: '#161616', color: '#fff' }}
            icon={<i className="fa fa-check-circle"></i>}
          >
            <h1 className="text-[28px] font-bold">Secondary School Certificate</h1>
            <p className="text-[14px] font-bold">Session : 2010-2012</p>
            <p className="text-[14px] font-bold">Instritution Name : St. Josephs High School, Khulna</p>
            <p className="text-[14px] font-bold">Subject : Science</p>
            <p className="text-[14px] font-bold">Passing Year : 2012</p>
            <p className="text-[14px] font-bold">Result : 4.75/5.00</p>
            <button className="text-[14px] bg-gray-900 text-blue-400 rounded-lg  p-3 mt-2 font-bold">Download certificate</button>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: '#161616', color: '#fff' }}
            contentArrowStyle={{ borderRight: '10px solid  #161616' }}

            iconStyle={{ background: '#161616', color: '#fff' }}
            icon={<i className="fa fa-check-circle"></i>}
          >
            <h1 className="text-[28px] font-bold">Secondary School Certificate</h1>
            <p className="text-[14px] font-bold">Session : 2010-2012</p>
            <p className="text-[14px] font-bold">Instritution Name : St. Josephs High School, Khulna</p>
            <p className="text-[14px] font-bold">Subject : Science</p>
            <p className="text-[14px] font-bold">Passing Year : 2012</p>
            <p className="text-[14px] font-bold">Result : 4.75/5.00</p>
            <button className="text-[14px] bg-gray-900 text-blue-400 rounded-lg  p-3 mt-2 font-bold">Download certificate</button>
          </VerticalTimelineElement>
        </VerticalTimeline>

      </div>
      <div><h1 className="text-center text-[40px] mt-20 font-bold mb-20 text-[#161616]">Projects</h1></div>

      <div className="mt-40">
        <h1 className="text-center text-[40px] font-bold  text-[#161616]">Work Experiences</h1>
        

      </div>














    </div>

  );
}

export default Home;
