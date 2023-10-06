import React from 'react'
import logo from '../Images/logo.svg'

export default function HeaderSection() {
  return (
    <>
    <header className="absolute top-0 left-0 p-5 flex items-center justify-between w-full lg:py-0">
        <div>
            <img src={logo} alt="SpaceX" className="w-16 lg:w-auto items-center" />
        </div>
        </header>
    </>
  )
}