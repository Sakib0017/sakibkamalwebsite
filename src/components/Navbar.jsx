import React from "react";
import {  useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'



const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
    <>
    <div className=" bg-gray-900   shadow-2xl ">
    
    
  </div>
        

        <div className=" bg-gray-900  ">
          <nav className="mx-auto flex max-w-7xl h-[90px] items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link to='/'><p className="text-[#161616]/90 w-[50px] rounded flex items-center justify-center p-1 h-[50px] bg-white font-extrabold text-[20px] font-ubuntu">SK</p></Link>
              <p  className="flex pl-5 items-center font-extrabold text-white justify-center">SAKIB KAMAL<span className="pl-1 text-[24px] font-extrabold text-purple-300">.</span></p>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-2c3748-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 text-white w-6" aria-hidden="true" />
              </button>
            </div>
            <PopoverGroup className="hidden lg:flex lg:gap-x-12">


            <Link to="/"><p className="font-bold text-white">Home</p>
                
                </Link>
             
              <Link to="/education"><p className="font-bold text-white">Services</p>
                
             </Link>
              
             
               
                <p className="font-bold text-white">Work</p>
                <p className="font-bold text-white">Contact</p>
                
                <div className="hidden lg:flex lg:flex-1 lg:justify-end font-bold text-white">
              
              Resume <span aria-hidden="true">&rarr;</span>
            
          </div>
              
                
              
            </PopoverGroup>
            
          </nav>
          <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed  inset-0 z-40" />
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-r from-white/80 via-white/80 to-white/80 px-6 py-6 sm:max-w-sm sm:ring-1 ">
              <div className="flex items-center justify-between">
                
                
               
                <button
                  type="button"
                  className="-m-2.5 rounded-md  p-2.5 text-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-20 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">

                  <Link to="/education"><p className="font-bold text-white">Home</p>
                
                </Link>
                  
              <Link to="/education"><p className="font-bold text-white">Services</p>
                
                </Link>
                 
                
                  
                   <p className="font-bold text-white">Work</p>
                   <p className="font-bold text-white">Contact</p>
                   
                   <div className="hidden lg:flex lg:flex-1 lg:justify-end font-bold text-white">
                 
                 Resume <span aria-hidden="true">&rarr;</span>
               
             </div>
            
          </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
          
        </div>



        
        </>
     
  );
}

export default Navbar;
