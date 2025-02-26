'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

export function Header() {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

    function handleOpenMobileMenu() {
        setIsOpenMobileMenu(true);
        setTimeout(() => {
            gsap.to('.mobile-menu', { left: 0, duration: 0.4, ease: 'power1.inOut' });
        }, 5);
    }

    function handleCloseMobileMenu() {
        gsap.to('.mobile-menu', { left:'-100%', duration:0.4, ease:'power1.inOut' })
    }

    useGSAP(() => {
        if (!isOpenMobileMenu) return;
    
        gsap.fromTo('.nav-title', 
            { right: 30 }, 
            { right: 0, duration: 0.4, ease: 'power1.inOut' }
        );
    }, [isOpenMobileMenu]);
    
    useGSAP(() => {
        if (!isOpenMobileMenu) return;
    
        gsap.fromTo('.nav-item', 
            { left: -40, opacity: 0 }, 
            { left: 0, opacity: 1, delay: 0.5, duration: 0.4, stagger: 0.2, ease: 'power1.inOut' }
        );
    }, [isOpenMobileMenu]);
    
    useGSAP(() => {
        if (!isOpenMobileMenu) return;
    
        gsap.fromTo('.nav-btn',
            { opacity: 0 }, 
            { opacity: 1, duration: 0.4, stagger: 0.3, ease: 'power1.out' }
        );
    }, [isOpenMobileMenu]);

    return (
        <>
            <header className="container py-3 flex justify-between items-center">
                <h1 className="font-bold text-xl lg:text-3xl">MS Car</h1>
                <nav className="hidden lg:flex gap-6">
                    <Link className="transition-all duration-500 hover:text-red-700" href="/">Home</Link>
                    <Link className="transition-all duration-500 hover:text-red-700" href="#about">About</Link>
                    <Link className="transition-all duration-500 hover:text-red-700" href="#car">Car</Link>
                    <Link className="transition-all duration-500 hover:text-red-700" href="#avaliations">Avaliations</Link>
                </nav>
                <div className="hidden lg:flex items-center gap-8">
                    <h6 className="cursor-pointer p-3 rounded-lg transition-all duration-500 hover:bg-red-700 hover:text-white">Contact</h6>
                    <button className="max-w-44 p-3 button">Sign Up</button>
                </div>
                <FaBars onClick={handleOpenMobileMenu} className="text-xl lg:hidden block cursor-pointer" />
            </header>
            {isOpenMobileMenu &&
                <div className="mobile-menu bg-[#303030] text-white z-50 max-w-80 w-full h-screen fixed top-0 -left-full flex flex-col justify-between items-center py-8">
                    <FaTimes onClick={handleCloseMobileMenu} className="absolute top-4 left-72 cursor-pointer transition-all duration-500 hover:text-red-700" />
                    <h1 className="nav-title font-bold text-xl">MS Car</h1>
                    <nav className="flex justify-center items-center m-auto flex-col gap-6">
                        <Link className="nav-item transition-all duration-500 hover:text-red-700" onClick={handleCloseMobileMenu} href="/">Home</Link>
                        <Link className="nav-item transition-all duration-500 hover:text-red-700" onClick={handleCloseMobileMenu} href="#about">About</Link>
                        <Link className="nav-item transition-all duration-500 hover:text-red-700" onClick={handleCloseMobileMenu} href="#car">Car</Link>
                        <Link className="nav-item transition-all duration-500 hover:text-red-700" onClick={handleCloseMobileMenu} href="#avaliations">Avaliations</Link>
                    </nav>
                    <div className="flex items-center gap-8">
                        <h6 className="nav-btn cursor-pointer p-3 rounded-lg transition-all duration-500 hover:bg-red-700">Contact</h6>
                        <button className="nav-btn max-w-44 p-3 button">Sign Up</button>
                    </div>
                </div>
            }
        </>
    )
}