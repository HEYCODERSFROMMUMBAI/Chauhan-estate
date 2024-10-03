// import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch, faUser, faBars } from '@fortawesome/free-solid-svg-icons'

// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     }

//     return (
//         <>
//             <header className='bg-slate-200 h-[100px] shadow-md'>
//                 <div className='flex justify-between items-center max-w-6xl mx-auto h-full px-4 sm:px-8'>
//                     {/* Logo Section */}
//                     <h1 className='font-bold text-lg sm:text-xl text-center'>
//                         <span className='text-slate-600'>Chauhan</span>
//                         <span className='text-slate-600'>Estate</span>
//                     </h1>

//                     {/* Search Bar */}
//                     <form className='relative hidden sm:block'>
//                         <input
//                             type='search'
//                             placeholder='Search...'
//                             className='border-b-2 border-slate-600 bg-transparent focus:outline-none focus:border-slate-800 pr-10 text-sm'
//                         />
//                         <FontAwesomeIcon
//                             icon={faSearch}
//                             className='absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-600'
//                         />
//                     </form>

//                     {/* Hamburger Menu for Mobile */}
//                     <div className='sm:hidden'>
//                         <button onClick={toggleMenu} className='text-slate-600'>
//                             <FontAwesomeIcon icon={faBars} size="lg" />
//                         </button>
//                     </div>

//                     {/* Icons and Links Section */}
//                     <div className={`flex-col sm:flex-row sm:flex items-center space-x-6 ${isOpen ? 'flex' : 'hidden'} sm:space-x-6 sm:static absolute top-16 left-0 right-0 bg-slate-200 sm:bg-transparent sm:top-auto sm:left-auto sm:right-auto`}>
//                         <h3 className='text-center sm:text-left'><a href='/home' className='block py-2 sm:py-0 px-4 sm:px-0'>Home</a></h3>
//                         <h3 className='text-center sm:text-left'><a href='/about' className='block py-2 sm:py-0 px-4 sm:px-0'>About</a></h3>
//                         <a href="/profile" className='text-slate-600 hover:text-slate-800 text-center sm:text-left block py-2 sm:py-0 px-4 sm:px-0'>
//                             <FontAwesomeIcon icon={faUser} size="lg" />
//                         </a>
//                     </div>
//                 </div>
//             </header>
//         </>
//     )
// }

// export default Header


import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <header className='bg-slate-200 h-[100px] shadow-md'>
                <div className='flex justify-between items-center max-w-6xl mx-auto h-full px-4 sm:px-8'>
                    {/* Logo Section */}
                    <h1 className='font-bold text-lg sm:text-xl text-center'>
                        <span className='text-slate-600'>Chauhan</span>
                        <span className='text-slate-600'>Estate</span>
                    </h1>

                    {/* Search Bar */}
                    <form className='relative hidden sm:block'>
                        <input
                            type='search'
                            placeholder='Search...'
                            className='border-b-2 border-slate-600 bg-transparent focus:outline-none focus:border-slate-800 pr-10 w-[500px] text-sm'
                        />
                        <FontAwesomeIcon
                            icon={faSearch}
                            className='absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-600'
                        />
                    </form>

                    {/* Hamburger Menu for Mobile */}
                    <div className='sm:hidden'>
                        <button onClick={toggleMenu} className='text-slate-600'>
                            <FontAwesomeIcon icon={faBars} size="lg" />
                        </button>
                    </div>

                    {/* Icons and Links Section for Desktop */}
                    <div className='hidden sm:flex items-center space-x-6'>
                        <h3><a href='/home' className='block py-2'>Home</a></h3>
                        <h3><a href='/about' className='block py-2'>About</a></h3>
                        <a href="/profile" className='text-slate-600 hover:text-slate-800 block py-2'>
                            <FontAwesomeIcon icon={faUser} size="lg" />
                        </a>
                    </div>
                </div>
            </header>

            {/* Side Drawer Menu */}
            <div className={`fixed top-0 left-0 w-64 h-full bg-slate-200 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className='flex flex-col p-6 space-y-6'>
                    <h3><a href='/home' className='text-slate-600 text-lg hover:text-slate-800'>Home</a></h3>
                    <h3><a href='/about' className='text-slate-600 text-lg hover:text-slate-800'>About</a></h3>
                    <a href="/profile" className='text-slate-600 hover:text-slate-800'>
                        <FontAwesomeIcon icon={faUser} size="lg" />
                    </a>
                </div>
            </div>

            {/* Overlay for mobile when the menu is open */}
            {isOpen && (
                <div className='fixed inset-0 bg-black opacity-50 z-40' onClick={toggleMenu}></div>
            )}
        </>
    )
}

export default Header
