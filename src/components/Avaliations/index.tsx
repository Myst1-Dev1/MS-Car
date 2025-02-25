import Image from "next/image";
import { FaClock, FaPlus, FaStar } from "react-icons/fa";


export function Avaliations() {
    return (
        <>
            <div className="container py-16 flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col gap-10">
                    <h2 className="font-bold text-3xl">What Are The <br /> Customers Saying <br /> About Us</h2>
                    <div className="flex">
                        <Image src="/images/user1.webp" className="w-10 h-10 rounded-full object-cover border-2" width={200} height={200} alt="foto de um usuário que avaliou os carros" />
                        <Image src="/images/user2.webp" className="-ml-3 w-10 h-10 rounded-full object-cover border-2" width={200} height={200} alt="foto de um usuário que avaliou os carros" />
                        <Image src="/images/user3.webp" className="-ml-3 w-10 h-10 rounded-full object-cover border-2" width={200} height={200} alt="foto de um usuário que avaliou os carros" />
                        <Image src="/images/user4.webp" className="-ml-3 w-10 h-10 rounded-full object-cover border-2" width={200} height={200} alt="foto de um usuário que avaliou os carros" />
                        <div className="-ml-3 rounded-full h-10 w-10 bg-red-700 flex justify-center items-center"><FaPlus className="text-white text-xl cursor-pointer" /></div>
                    </div>
                </div>
                <div className="mt-10 lg:mt-0 flex gap-10 flex-col lg:flex-row">
                    <div className="m-auto flex flex-col gap-3 shadow-md max-w-96 w-full border border-gray-200 rounded-md p-3">
                        <div className="flex items-center gap-3">
                            <Image className="w-16 h-16 object-cover rounded-full" src="/images/user4.webp" width={200} height={200} alt="foto do usuário que avaliou" />
                            <div className="flex flex-col gap-2">
                                <h5 className="font-bold text-xl">John Doe</h5>
                                <h6>Palestine, State of America</h6>
                                <div className="flex gap-1">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nihil sed error voluptatem voluptate quibusdam corrupti dolorem modi consequatur. Totam exercitationem unde optio atque molestias sint, aut sapiente aspernatur debitis?</p>
                        <div className="flex items-center gap-3">
                            <FaClock className="text-gray-400" />
                            <span>4 days ago</span>
                        </div>
                    </div>
                    <div className="m-auto flex flex-col gap-3 shadow-md max-w-96 w-full border border-gray-200 rounded-md p-3">
                        <div className="flex items-center gap-3">
                            <Image className="w-16 h-16 object-cover rounded-full" src="/images/user1.webp" width={200} height={200} alt="foto do usuário que avaliou" />
                            <div className="flex flex-col gap-2">
                                <h5 className="font-bold text-xl">John Doe</h5>
                                <h6>Palestine, State of America</h6>
                                <div className="flex gap-1">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nihil sed error voluptatem voluptate quibusdam corrupti dolorem modi consequatur. Totam exercitationem unde optio atque molestias sint, aut sapiente aspernatur debitis?</p>
                        <div className="flex items-center gap-3">
                            <FaClock className="text-gray-400" />
                            <span>4 days ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}