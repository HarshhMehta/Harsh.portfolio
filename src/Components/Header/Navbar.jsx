import React, { useEffect, useState } from 'react';
import light from '../../assets/light.png';
import dark from '../../assets/dark.png';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';

function Navbar() {
    const [click, setClick] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [visible, setVisible] = useState(false); // State for button visibility

    const toggleTheme = (event) => {
        setDarkMode(event.target.checked);
        document.documentElement.setAttribute('class', event.target.checked ? 'dark' : '');
    };

    useEffect(() => {
        document.documentElement.setAttribute('class', 'dark');

        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setVisible(true); // Show button if scrolled down
            } else {
                setVisible(false); // Hide button otherwise
            }
        };

        window.addEventListener('scroll', handleScroll); // Listen for scroll events
        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleClick = () => setClick(!click);
    const navItems = ['Home', 'About', 'TechStack', 'Projects', 'Contact'];

    const handleNavItemClick = () => {
        setClick(false); // Close the menu on item click
    };

    const content = (
        <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-white dark:bg-slate-900 transition'>
            <ul className='text-center text-xl p-20'>
                {navItems.map((item, index) => (
                    <Link key={index} to={item} spy={true} smooth={true} onClick={handleNavItemClick}>
                        <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>{item}</li>
                    </Link>
                ))}
                <div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            onChange={toggleTheme}
                            checked={darkMode}
                        />
                        <div className="w-[49px] h-6 bg-slate-500 rounded-full peer-checked:after:translate-x-6 after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all">
                            <img src={light} alt="light" className="absolute w-4 z-10 m-[4px] text-white " />
                            <img src={dark} alt="dark" className="absolute w-4 z-10 m-[4px] text-white right-0 " />
                        </div>
                    </label>
                </div>
            </ul>
        </div>
    );

    return (
        <>
            <nav className='sticky top-0 bg-white text-black dark:bg-slate-900 dark:text-white'>
                <div className='h-10vh flex justify-between z-50 lg:py-5 pl-20 pr-14 py-4 border-b border-slate-800'>
                    <div className='flex items-center flex-1'>
                        <span className='text-3xl font-bold'>
                            <Link to='Home' spy={true} smooth={true} onClick={() => setClick(false)}>&lt;har.shh/&gt;</Link>
                        </span>
                    </div>
                    <div className='lg:flex md:flex flex-1 items-center justify-end font-normal hidden'>
                        <ul className='flex gap-8 text-[18px]'>
                            {navItems.map((item, index) => (
                                <Link key={index} to={item} spy={true} smooth={true} onClick={handleNavItemClick}>
                                    <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>{item}</li>
                                </Link>
                            ))}
                            <div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        onChange={toggleTheme}
                                        checked={darkMode}
                                    />
                                    <div className="w-[49px] h-6 bg-slate-500 rounded-full peer-checked:after:translate-x-6 after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all">
                                        <img src={light} alt="light" className="absolute w-4 z-10 m-[4px] text-white " />
                                        <img src={dark} alt="dark" className="absolute w-4 z-10 m-[4px] text-white right-0 " />
                                    </div>
                                </label>
                            </div>
                        </ul>
                    </div>
                    <button
                        className='block md:hidden transition text-2xl'
                        onClick={handleClick}>
                        {click ? <FaTimes /> : <CiMenuFries />}
                    </button>
                    <div className='md:hidden'>
                        {click && content}
                    </div>
                </div>
            </nav>

            {/* Scroll to Top Button - Only Visible on Small Screens */}
            {visible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-[rgba(217,70,239,0.8)] text-white p-3 rounded-full shadow-lg transition-opacity duration-300 md:hidden"
                >
                    ↑ Top
                </button>
            )}
        </>
    );
}

export default Navbar;
