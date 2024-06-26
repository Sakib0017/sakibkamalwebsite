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

    <div>
      <div className="relative ">
        

        <header className=" bg-gray-100 shadow  z-20 fixed top-0 w-full">
          <nav className="mx-auto flex max-w-7xl h-[75px] items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link to='/'><p className="text-[#2c3748] font-extrabold text-[28px] font-ubuntu">S <span className="text-[18px] animate-ping">*</span> K <span className="text-[18px] animate-ping">*</span> R</p></Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-2c3748-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <PopoverGroup className="hidden lg:flex lg:gap-x-12">


             
             
              <Link to="/education"><a href="#" className="text-sm font-semibold leading-6 text-[#2c3748]">
                Education
              </a></Link>
              
              <a href="#" className="text-sm font-semibold leading-6 text-[#2c3748]">
                Work Experiance
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-[#2c3748]">
                Projects
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-[#2c3748]">
                Contact
              </a>
            </PopoverGroup>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-semibold leading-6 text-[#2c3748]">
                Resume <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-r from-[#2c3748]/80 via-[#2c3748]/80 to-[#2c3748]/80 px-6 py-6 sm:max-w-sm sm:ring-1 ">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  
                  <img
                    className="h-8 w-auto "
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md  p-2.5 text-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6 text-[#2c3748]" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-20 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">

                    
                   
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-2c3748-50"
                    >
                      Education
                    </a>
                    
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-2c3748-50"
                    >
                      Work Experinces
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-2c3748-50"
                    >
                      Projects
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-2c3748-50"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-2c3748-50"
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
      </div>


      
     
    </div>
  );
}

export default Navbar;
