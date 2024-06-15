import React from 'react'
import ThemeSwitch from '../Theme/ThemeSwitch'

const NavBar = () => {
  return (
    <div>
        <div className=' flex justify-between px-10 py-4 bg-slate-50 dark:bg-slate-900 fixed w-full'>
            <div>
                <h1 className=' font-bold text-xl'>Mini<span className=' text-purple-600'>Me.</span></h1>
            </div>
            <div className=' text-xl'>
                <ThemeSwitch  />
            </div>
        </div>
    </div>
  )
}

export default NavBar