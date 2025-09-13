import React from 'react'
import Image from 'next/image';
import logo from '../../public/header-logo.svg'
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Link from 'next/link'


export default function Navbar() {
    return (
        <div className='bg-white border-t-1 border-b-1 border-gray-300 '>
            <div className="container m-2 flex flex-wrap justify-between items-center">
                <div className="flex-none order-1 lg:order-1 mb-2 lg:mb-0">
                    <Link href="/"><Image src={logo} height={130} width={150} alt="the logo" /></Link>
                </div>

                <div className="flex order-2 lg:order-3 items-center mb-2 lg:mb-0">
                    <button
                        aria-label="submit"
                        className="hover:bg-gray-300 hover:text-black text-gray-700 m-1 rounded-sm p-1 text-[15px]"
                    >
                        My Account
                    </button>
                    <span className="hover:bg-gray-300 hover:text-black text-gray-700 m-1 rounded-sm p-1 text-[15px] flex items-center gap-1">
                        <p>Cart</p>
                        <FaShoppingCart className="w-6 h-6" />
                    </span>
                </div>

                {/* Search Form */}
                <div className="order-3 lg:order-2 w-full lg:w-auto lg:flex-grow lg:mx-10">
                    <form>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg bg-gray-200"
                                placeholder="Search here"
                                required
                            />
                            <button
                                type="submit"
                                className="text-white absolute end-0 bottom-0 bg-purple-900 hover:bg-purple-800  font-medium rounded-lg text-sm w-[50px] h-full"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>


            <div className="overflow-x-auto border-t-1 border-gray-300">
                <div className='container flex justify-between'>
                    <ul className='flex gap-3 text-[15px]'>
                        <li className='hover:bg-gray-300  rounded-sm p-2'>DISCOVER PRODUCTS</li>
                        <li className='hover:bg-gray-300  rounded-sm p-2'>CATEGORIES</li>
                        <li className='hover:bg-gray-300  rounded-sm p-2'>BRANDS</li>
                        <li className='hover:bg-gray-300  rounded-sm p-2'>HOT DEALS</li>
                    </ul>

                    <ul className='flex gap-3 text-[15px] '>
                        <li className='hover:bg-gray-300  rounded-sm p-2'>TRACK ORDER</li>
                        <li className='hover:bg-gray-300  rounded-sm p-2'>FAQ</li>
                        <li className='hover:bg-gray-300  rounded-sm p-2'>HELP</li>
                        <li className='hover:bg-gray-300  rounded-sm p-2'>CONTACT US</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
