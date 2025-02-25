import Image from "next/image"
import { FaApple, FaGooglePlay, FaStar } from "react-icons/fa"

export function Banner() {
    return (
        <>
            <div className="mask-banner">
                <div className="bg-[#1F1F1F] w-full h-full flex justify-center items-center text-white">
                    <div className="container flex flex-wrap justify-between items-center py-10">
                        <div className="flex flex-col gap-10">
                            <h2 className="font-bold text-[60px]">Find Book And <br />Rental Car <br />In Easy Steps</h2>
                            <div className="flex gap-5">
                                <div className="button max-w-52 px-3 py-1 flex items-center gap-3">
                                    <FaApple className="flex-shrink-0 text-3xl" />
                                    <div>
                                        <span>Download On The</span>
                                        <h6 className="text-xl font-bold">App Store</h6>
                                    </div>
                                </div>
                                <div className="button bg-black max-w-52 py-1 px-3 flex items-center gap-3">
                                    <FaGooglePlay className="flex-shrink-0 text-3xl" />
                                    <div>
                                        <span>Get It On</span>
                                        <h6 className="text-xl font-bold">Google Play</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5 mb-20">
                                <div className="flex flex-col gap-2">
                                    <span className="text-gray-400">Base Price</span>
                                    <h6 className="font-bold">$4.215</h6>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-gray-400">Power</span>
                                    <h6 className="font-bold">355HP</h6>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-gray-400">Engine</span>
                                    <h6 className="font-bold">428 V8</h6>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="relative w-[448px] h-[448px] flex items-center justify-center">
                                <div className="absolute w-[420px] h-[420px] rounded-full border-[10px] border-red-800"></div>
                                <div className="relative flex items-center justify-center w-[380px] h-[380px] rounded-full bg-red-800">
                                    <Image className="-ml-10 max-w-xl object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/images/red-car.webp" width={900} height={900} alt="foto de um carro vermelho" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
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
            <div className="flex flex-wrap gap-10 py-10 container text-black -mt-[120px] 2xl:-mt-[180px]">
                <div className="flex flex-col gap-2">
                    <h5 className="font-bold text-2xl">110<span className="text-red-700">+</span></h5>
                    <h6 className="text-gray-600 font-bold">Years Service</h6>
                </div>
                <div className="flex flex-col gap-2">
                    <h5 className="font-bold text-2xl">60K<span className="text-red-700">+</span></h5>
                    <h6 className="text-gray-600 font-bold">Happy Clients</h6>
                </div>
                <div className="flex flex-col gap-2">
                    <h5 className="font-bold text-2xl">99<span className="text-red-700">%</span></h5>
                    <h6 className="text-gray-600 font-bold">Customer Satisfaction</h6>
                </div>
            </div>
        </>
    )
}