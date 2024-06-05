
import Sakib from "../assets/Sakib.png";
import React from "react";
import { Fragment } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,

} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
const navigation = [


    { name: 'About', href: '/about', current: true },
    { name: 'Skills', href: '/skills', current: false },
    { name: 'Expertise', href: '/expertise', current: false },
    { name: 'Education', href: '/education', current: false },
    { name: 'Experiance', href: '/experiance', current: false },
    { name: 'Projects', href: '/project', current: false },
    { name: 'Testimonials', href: '/testimonials', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
const Home = () => {
    
 
    return (
        
        <div>
            <div className="relative ">
    <div className="h-[600px] bg-gradient-to-r from-blue-500 via-purple-500 to-gray-500  sm:h-[600px] w-screen object-cover object-center top-0 left-0 pb-[1px] "></div>

    <Disclosure as="nav" className="bg-gray-800 z-20 fixed top-0 w-screen bg-gradient-to-r from-blue-500 via-purple-500 to-gray-500">
        {({ open }) => (
            <>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </DisclosureButton>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <h1 className="text-white font-bold font-ubuntu">sakibkamal.dev</h1>
                            </div>
                            <div className="hidden sm:ml-6 sm:block ">
                                <div className="flex space-x-5  "> {/* Centering the navigation links */}
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white ' : 'text-white hover:bg-gray-700  hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-extrabold ' // Adding font-bold class
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button
                                type="button"
                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="sm:hidden ">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-extrabold'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </DisclosurePanel>
            </>
        )}
    </Disclosure>
</div>

            <div className="max-w-7xl h-auto mx-auto rounded -mt-[350px] z-10 relative left-0 right-0  bg-white shadow-lg" id="about">
                <div className="grid md:grid-cols-2">
                    <div className="col-span-1 p-20  mx-auto text-start items-center relative">
                        <p className="text-[15px] text-gray-500 font-medium">HELLO EVERYBODY, I'M</p>
                        <h1 className="text-gray-900 text-gray-500 font-extrabold text-[32px]">MD. SAKIB KAMAL</h1>
                        <p className="text-[15px] text-gray-500 font-medium">JUNIOR WEB DEVELOPER</p>
                        <p className="text-[13px] text-gray-600/60 pt-5 font-medium text-gray-600/60">I'm A Computer Science & Engineering Certified Student Of Daffodil International University</p>
                        <div className="flex items-center pt-5">
                            <svg className="w-[20px] h-[20px] fill-blue-800/70" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

                                <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path>

                            </svg>
                            <p className="text-[13px] ps-5  font-medium text-gray-600/60">19th September, 1997</p>
                        </div>
                        <div className="flex items-center pt-5">
                            <svg className="w-[20px] h-[20px] fill-blue-800/70" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

                                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z"></path>

                            </svg>
                            <p className="text-[13px] ps-5 font-medium text-gray-600/60">+8801921777053</p>
                        </div>
                        <div className="flex items-center pt-5">
                            <svg className="w-[20px] h-[20px] fill-blue-800/70" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>

                            </svg>
                            <p className="text-[13px] ps-5 font-medium text-gray-600/60">sakibkamal0017@gmail.com</p>
                        </div>
                        <div className="flex items-center pt-5">
                            <svg className="w-[22px] h-[22px] fill-blue-800/70" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">

                                <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32V448c0 35.3 28.7 64 64 64H448.5c35.5 0 64.2-28.8 64-64.3l-.7-160.2h32zM288 160a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM176 400c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H192c-8.8 0-16-7.2-16-16z"></path>

                            </svg>
                            <p className="text-[13px] ps-5 font-medium text-gray-600/60">50, East Circular Road, South Tootpara, Khulna</p>
                        </div>

                        <div className="flex items-center pt-5">
                            <svg className="w-[50px] h-[50px] p-1 fill-gray-400/60 hover:fill-blue-500/50" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

                                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>

                            </svg>
                            <svg className="w-[50px] h-[50px] p-1 fill-gray-400/60 hover:fill-gray-900/50" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

                                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path>

                            </svg>
                            <svg className="w-[50px] h-[50px] p-1 fill-gray-400/60 hover:fill-purple-500/50" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

                                <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path>

                            </svg>
                        </div>
                    </div>
                    <div className="col-span-1 p-10  mx-auto mt-10 relative">

                        <img src={Sakib} alt="Sakib" className="w-[360px]   rounded-full border-[1px] border-dotted border-blue-500/50 bg-gray-300 hover:bg-gray-100  h-[460px]" />

                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 max-w-7xl mx-auto" id="expertise">
                <div className="col-span-1 p-20  mx-auto text-start items-center relative">

                    <h1 className="text-gray-900 text-gray-500 font-extrabold text-[32px]">ABOUT MYSELF & SKILLS</h1>

                    <p className="text-[16px] text-gray-600/60 pt-5 font-medium text-gray-600/60">I'm Performing as a Software Developer in <span className="text-blue-500 font-bold">Popular Diagnostic Centre Limited</span> at Dhanmondi.
                        My Theoritical Knowladge of Computer Science was gained from A well Raputed University At Bangladesh Which is <span className="text-blue-500 font-bold">Daffodil International University</span>.
                        And all the Practical Skills That I Have Learned from <span className="text-blue-500 font-bold">Klower Cloud</span>, <span className="text-blue-500 font-bold">Automation Research Centre</span>, <span className="text-blue-500 font-bold">Popular Diagnostic Centre Ltd</span> .
                        between 1st January 2020 to Current Time Space </p>




                </div>
                <div className="col-span-1 p-10  mt-10 mx-auto  relative">
                    <div className="flex flex-col  gap-2">
                        <p className="text-start text-[14px] animate-pulse font-extrabold">html 90%</p>
                        <div class="w-[350px] h-[17px] bg-gray-200 rounded dark:bg-gray-700">
                            <div class="bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-gray-500/50  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '90%' }}> 90%</div>
                        </div>
                    </div>
                    <div className="flex flex-col  gap-2">
                        <p className="text-start text-[14px] animate-pulse font-extrabold">css 90%</p>
                        <div class="w-[350px] h-[17px] bg-gray-200 rounded dark:bg-gray-700">
                            <div class="bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-gray-500/50  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '90%' }}> 90%</div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col  gap-2">
                        <p className="text-start text-[14px] animate-pulse font-extrabold">react.js 70%</p>
                        <div class="w-[350px] h-[17px] bg-gray-200 rounded dark:bg-gray-700">
                            <div class="bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-gray-500/50  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '70%' }}> 70%</div>
                        </div>
                    </div>
                    <div className="flex flex-col  gap-2">
                        <p className="text-start text-[14px] animate-pulse font-extrabold">tailwindcss 90%</p>
                        <div class="w-[350px] h-[17px] bg-gray-200 rounded dark:bg-gray-700">
                            <div class="bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-gray-500/50  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '90%' }}> 90%</div>
                        </div>
                    </div>
                    <div className="flex flex-col  gap-2">
                        <p className="text-start text-[14px] animate-pulse font-extrabold">node.js 70%</p>
                        <div class="w-[350px] h-[17px] bg-gray-200 rounded dark:bg-gray-700">
                            <div class="bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-gray-500/50  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '70%' }}> 70%</div>
                        </div>
                    </div>
                    <div className="flex flex-col  gap-2">
                        <p className="text-start text-[14px] animate-pulse font-extrabold">Mongodb 70%</p>
                        <div class="w-[350px] h-[17px] bg-gray-200 rounded dark:bg-gray-700">
                            <div class="bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-gray-500/50  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded" style={{ width: '70%' }}> 70%</div>
                        </div>
                    </div>

                </div>
            </div>


            




            
            
            
            <div className="text-center mx-auto text-[32px] font-extrabold mt-20 max-w-7xl">
                <h1>OFFERING TO MY ORGANIZATION</h1>

            </div>

            <div className="grid md:grid-cols-3 max-w-7xl mx-auto">
                <div className="col-span-1 p-10  mt-10 mx-auto  relative">


                    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg p-[50px] shadow dark:bg-gray-800 dark:border-gray-700">
                    <svg className="w-[75px] h-[75px] hover:fill-[#8e8e8e] fill-blue-500/50" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

                    <path d="M352 96c0 14.3-3.1 27.9-8.8 40.2L396 227.4c-23.7 25.3-54.2 44.1-88.5 53.6L256 192h0 0l-68 117.5c21.5 6.8 44.3 10.5 68.1 10.5c70.7 0 133.8-32.7 174.9-84c11.1-13.8 31.2-16 45-5s16 31.2 5 45C428.1 341.8 347 384 256 384c-35.4 0-69.4-6.4-100.7-18.1L98.7 463.7C94 471.8 87 478.4 78.6 482.6L23.2 510.3c-5 2.5-10.9 2.2-15.6-.7S0 501.5 0 496V440.6c0-8.4 2.2-16.7 6.5-24.1l60-103.7C53.7 301.6 41.8 289.3 31.2 276c-11.1-13.8-8.8-33.9 5-45s33.9-8.8 45 5c5.7 7.1 11.8 13.8 18.2 20.1l69.4-119.9c-5.6-12.2-8.8-25.8-8.8-40.2c0-53 43-96 96-96s96 43 96 96zm21 297.9c32.6-12.8 62.5-30.8 88.9-52.9l43.7 75.5c4.2 7.3 6.5 15.6 6.5 24.1V496c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6 .7l-55.4-27.7c-8.4-4.2-15.4-10.8-20.1-18.9L373 393.9zM256 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path>

                    </svg>
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Expertise At Frontend</h5>
                   
                    <ul class="w-full  text-gray-500 list-inside dark:text-gray-400">
                        <li class="flex items-center">
                            <svg class="w-3.5 h-3.5 me-2 text-blue-500 dark:text-blue-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                           HTML
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3.5 h-3.5 me-2 text-blue-500 dark:text-blue-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Tailwind css
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3.5 h-3.5 me-2 text-blue-500 dark:text-blue-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                           React js
                        </li>
                        
                    </ul>
                    
                    </div>


                </div>
                <div className="col-span-1 p-10  mt-10 mx-auto  relative">

                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow p-[50px] dark:bg-gray-800 dark:border-gray-700">
                <svg className="w-[75px] h-[75px] hover:fill-[#8e8e8e] fill-blue-500/50" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">

                <path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"></path>

                </svg>
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Expertise At Backend</h5>
                    <ul class="w-full  text-gray-500 list-inside dark:text-gray-400">
                        <li class="flex items-center">
                            <svg class="w-3.5 h-3.5 me-2 text-blue-500 dark:text-blue-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                           Node js
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3.5 h-3.5 me-2 text-blue-500 dark:text-blue-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Express js
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3.5 h-3.5 me-2 text-blue-500 dark:text-blue-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                           PHP
                        </li>
                        
                    </ul>
                    </div>
                </div>
                <div className="col-span-1 p-10  mt-10 mx-auto  relative">
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  p-[50px] dark:bg-gray-800 dark:border-gray-700">
                <svg className="w-[75px] h-[75px] hover:fill-[#8e8e8e] fill-blue-500/50" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

                <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"></path>

                </svg>
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Expertise At Database</h5>
                    <ul class="w-full  text-gray-500 list-inside dark:text-gray-400">
                        <li class="flex items-center">
                            <svg class="w-3.5 h-3.5 me-2 text-blue-500 dark:text-blue-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                           Mongodb
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3.5 h-3.5 me-2 text-blue-500 dark:text-blue-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Mariadb
                        </li>
                        <li class="flex items-center">
                            <svg class="w-3.5 h-3.5 me-2 text-blue-500 dark:text-blue-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                           Mysql
                        </li>
                        
                    </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;
