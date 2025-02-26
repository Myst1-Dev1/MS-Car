import Image from "next/image";
import { FaChair, FaCog, FaGasPump, FaSearch } from "react-icons/fa";

export function BookCar() {
    return (
        <>
            <div id="car" className="container py-16">
                <h2 className="text-center text-3xl font-bold">Regular Car <br /> Book Your Suitable Car</h2>
                <div className="mt-10 p-3 border border-gray-300 shadow-md flex lg:flex-row flex-col gap-5 lg:gap-0 justify-between">
                    <div className="flex lg:flex-row flex-col gap-10">
                        <div className="flex flex-col gap-1 border-none lg:border-r border-gray-300 pr-0 lg:pr-6">
                            <label className="text-gray-500" htmlFor="location">Location</label>
                            <select className="p-2 w-full lg:w-60 bg-gray-100 text-black rounded-md outline-none">
                                <option value="Bangladesh">Bangladesh</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1 border-none lg:border-r border-gray-300 pr-0 lg:pr-6">
                            <label className="text-gray-500" htmlFor="category">Category</label>
                            <select className="p-2 w-full lg:w-40 bg-gray-100 text-black rounded-md outline-none">
                                <option value="category">All</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-gray-500" htmlFor="price">Price Range</label>
                            <select className="p-2 w-full lg:w-60 bg-gray-100 text-black rounded-md outline-none">
                                <option value="price">$40.00 - $60.00</option>
                            </select>
                        </div>
                    </div>
                    <button className="flex-shrink-0 button max-w-40 flex p-3 justify-center gap-3 items-center"><FaSearch /> Search</button>
                </div>

                <div className="mt-16 flex justify-between items-center gap-5 flex-wrap m-auto">
                    <div className="m-auto flex flex-col gap-3 max-w-80 w-full p-3 rounded-md border border-gray-200">
                        <Image src="/images/forber-car.webp" className="h-40 rounded-tl-md rounded-tr-md w-full object-cover" width={500} height={500} alt="foto de um carro" />
                        <span className="p-1 bg-gray-100 rounded-md w-fit">Sedan</span>
                        <div className="flex justify-between items-center">
                            <h5 className="font-bold text-xl">Range Rover Evoque</h5>
                            <h6 className="text-red-700 font-bold -mt-4">$24.00 <span className="text-black text-xl">/hr</span></h6>
                        </div>
                        <div className="flex justify-between items-center pt-3 w-full border-t border-gray-200">
                            <div className="flex gap-3 items-center">
                                <FaCog className="text-red-700" />
                                <h6>Automatic</h6>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaGasPump className="text-red-700" />
                                <h6>Petrol</h6>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaChair className="text-red-700" />
                                <h6>6 Seats</h6>
                            </div>
                        </div>
                    </div>
                    <div className="m-auto flex flex-col gap-3 max-w-80 w-full p-3 rounded-md border border-gray-200">
                        <Image src="/images/blue-car.webp" className="rounded-tl-md rounded-tr-md w-full h-40 object-cover" width={500} height={500} alt="foto de um carro" />
                        <span className="p-1 bg-gray-100 rounded-md w-fit">Sedan</span>
                        <div className="flex justify-between items-center">
                            <h5 className="font-bold text-xl">Range Rover Evoque</h5>
                            <h6 className="text-red-700 font-bold -mt-4">$24.00 <span className="text-black text-xl">/hr</span></h6>
                        </div>
                        <div className="flex justify-between items-center pt-3 w-full border-t border-gray-200">
                            <div className="flex gap-3 items-center">
                                <FaCog className="text-red-700" />
                                <h6>Automatic</h6>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaGasPump className="text-red-700" />
                                <h6>Petrol</h6>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaChair className="text-red-700" />
                                <h6>6 Seats</h6>
                            </div>
                        </div>
                    </div>
                    <div className="m-auto flex flex-col gap-3 max-w-80 w-full p-3 rounded-md border border-gray-200">
                        <Image src="/images/white-car.webp" className="h-40 rounded-tl-md rounded-tr-md w-full object-cover" width={500} height={500} alt="foto de um carro" />
                        <span className="p-1 bg-gray-100 rounded-md w-fit">Sedan</span>
                        <div className="flex justify-between items-center">
                            <h5 className="font-bold text-xl">Range Rover Evoque</h5>
                            <h6 className="text-red-700 font-bold -mt-4">$24.00 <span className="text-black text-xl">/hr</span></h6>
                        </div>
                        <div className="flex justify-between items-center pt-3 w-full border-t border-gray-200">
                            <div className="flex gap-3 items-center">
                                <FaCog className="text-red-700" />
                                <h6>Automatic</h6>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaGasPump className="text-red-700" />
                                <h6>Petrol</h6>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaChair className="text-red-700" />
                                <h6>6 Seats</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}