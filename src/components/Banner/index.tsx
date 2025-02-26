'use client';

import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image"
import { useRef } from "react";
import { FaApple, FaGooglePlay, FaStar } from "react-icons/fa"

export function Banner() {
    gsap.registerPlugin(ScrollTrigger);

    const yearsRef = useRef(null);
    const clientsRef = useRef(null);
    const satisfactionRef = useRef(null);
    const statsRef = useRef(null);

    useGSAP(() => {
        gsap.to('.banner-title', { y:-10, opacity:1, duration:0.4, ease:'power3' });
        gsap.to('.car-img', { opacity:1, marginLeft:window.innerWidth >= 991 ? '-40px' : '', duration:0.4, ease:'power1.inOut' });
        gsap.to('.st-opacity', {opacity:1, marginLeft:0, duration:0.4, stagger:0.4, ease:'bounce'});
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: statsRef.current, // Ativa quando este elemento entra na tela
            start: "top 80%", // Inicia quando o topo do elemento estiver 25% visível
            toggleActions: "play none none none", // Anima apenas uma vez
          }
        });
    
        tl.to(yearsRef.current, {
          innerText: 110,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power1.out",
        })
        .to(clientsRef.current, {
          innerText: 60,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power1.out",
        }, "-=1.5") // Começa antes da anterior terminar
        .to(satisfactionRef.current, {
          innerText: 99,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power1.out",
        }, "-=1.5"); // Começa antes da anterior terminar
      }, []);

    return (
        <>
            <div className="mask-banner">
                <div className="bg-[#1F1F1F] w-full h-full flex justify-center items-center text-white">
                    <div className="container flex flex-wrap justify-between items-center py-10">
                        <div className="flex flex-col gap-10">
                            <h2 className="banner-title opacity-0 font-bold text-[35px] lg:text-[60px]">Find Book And <br />Rental Car <br />In Easy Steps</h2>
                            <div className="flex w-full gap-10">
                                <div className="st-opacity -ml-3 opacity-0 button min-w-50 lg:max-w-52 px-3 h-16 py-0 lg:py-1 flex items-center gap-2">
                                    <FaApple className="flex-shrink-0 text-xl lg:text-3xl" />
                                    <div>
                                        <span className="text-xs">Download On The</span>
                                        <h6 className="font-bold">App Store</h6>
                                    </div>
                                </div>
                                <div className="st-opacity -ml-3 opacity-0 button bg-black h-16 min-w-40 lg:max-w-52 py-1 px-3 flex items-center gap-2">
                                    <FaGooglePlay className="flex-shrink-0 text-xl lg:text-3xl" />
                                    <div>
                                        <span className="text-xs">Get It On</span>
                                        <h6 className="font-bold">Google Play</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5 mb-20">
                                <div className="flex flex-col gap-2">
                                    <span className="st-opacity opacity-0 text-gray-400">Base Price</span>
                                    <h6 className="st-opacity opacity-0 font-bold">$4.215</h6>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="st-opacity opacity-0 text-gray-400">Power</span>
                                    <h6 className="st-opacity opacity-0 font-bold">355HP</h6>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="st-opacity opacity-0 text-gray-400">Engine</span>
                                    <h6 className="st-opacity opacity-0 font-bold">428 V8</h6>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] flex items-center justify-center aspect-square">
                            <div className="absolute w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full border-8 border-red-800 aspect-square"></div>
                            <div className="relative flex items-center justify-center w-72 h-72 lg:w-[350px] lg:h-[350px] rounded-full bg-red-800 aspect-square">
                                <Image
                                    loading="lazy"
                                    className="opacity-0 max-w-96 lg:max-w-xl car-img object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    src="/images/red-car.webp"
                                    width={900}
                                    height={900}
                                    alt="foto de um carro vermelho"
                                />
                            </div>
                        </div>
                            <div className="flex flex-col gap-5 mt-5 lg:mt-0">
                                <p className="text-gray-400 max-w-80">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat about the car industry of the years.</p>
                                <div className="flex gap-4">
                                    <div className="flex">
                                        <Image src="/images/user1.webp" className="w-10 h-10 rounded-full object-cover border-2 border-white" width={200} height={200} alt="foto de um usuário que avaliou os carros" />
                                        <Image src="/images/user2.webp" className="-ml-2 w-10 h-10 rounded-full object-cover border-2 border-white" width={200} height={200} alt="foto de um usuário que avaliou os carros" />
                                        <Image src="/images/user3.webp" className="-ml-2 w-10 h-10 rounded-full object-cover border-2 border-white" width={200} height={200} alt="foto de um usuário que avaliou os carros" />
                                        <Image src="/images/user4.webp" className="-ml-2 w-10 h-10 rounded-full object-cover border-2 border-white" width={200} height={200} alt="foto de um usuário que avaliou os carros" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold">Happy Costumers</h5>
                                        <h6 className="flex items-center gap-1"><FaStar className="text-sm text-yellow-400" /> 4.5(120k Reviews)</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={statsRef} className="flex flex-wrap gap-10 py-10 container text-black mt-2 lg:-mt-[120px] 2xl:-mt-[180px]">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                        <h5 ref={yearsRef} className="font-bold text-2xl">0</h5>
                        <span className="text-red-700 font-bold text-xl">+</span>
                    </div>
                    <h6 className="text-gray-600 font-bold">Years Service</h6>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                        <h5 ref={clientsRef} className="font-bold text-2xl">0</h5>
                        <span className="text-red-700 font-bold">K+</span>
                    </div>
                    <h6 className="text-gray-600 font-bold">Happy Clients</h6>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                        <h5 ref={satisfactionRef} className="font-bold text-2xl">0</h5>
                        <span className="text-red-700 font-bold">%</span>
                    </div>
                    <h6 className="text-gray-600 font-bold">Customer Satisfaction</h6>
                </div>
            </div>
        </>
    )
}