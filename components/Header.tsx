import React from 'react'
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg"
import { navValue } from "@/constant/values";
export default function Header() {
  return (
    <header className="flex justify-between items-center p-2 h-[60px]">
      <div className="logo">
        <Link href={"/"}>
          <Image src={logo} alt="Logo" height={36} width={150} className="fill-[#6347F9]" />
        </Link>
      </div>
      <div>
        <nav className="flex gap-6">
          {
            navValue.map((nav) => {
              return (
                <div key={nav.id} className='flex items-center gap-2'>
                  <p>{nav.label}</p>
                  {/* add icon here */}
                  <div>
                    {nav.icon && <Image src={nav.icon} alt='down-icon' width={18} height={18} />}
                  </div>
                </div>
              )
            })
          }
        </nav>
      </div>
      <div className="flex gap-4">
        <button>
          Login
        </button>
        <button className="bg-primary-blue text-white font-normal rounded-lg  px-8 py-3">
          Sign Up
        </button>
      </div>
    </header>
  )
}
