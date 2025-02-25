import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLocationPin, FaTwitter } from "react-icons/fa6";


export function Footer() {
    return (
        <>
            <footer className="bg-[#303030] text-white w-full">
                <div className="container grid grid-cols-1 lg:grid-cols-4 gap-5 py-8">
                    <div className="flex flex-col gap-3 m-auto lg:m-0 max-w-80">
                        <h2 className="font-bold text-2xl">MS Car</h2>
                        <p>Run car dealership or car rental business. It is the best choice for car dearlershps. Car Listing, Eletric Car Dealerships, Boat</p>
                        <div className="flex items-center gap-3">
                            <span className="font-bold">Follow Us</span>
                            <div className="border-b-2 border-white w-10"></div>
                        </div>
                        <div className="flex gap-3">
                            <div className="bg-red-950 rounded-full w-10 h-10 flex justify-center items-center text-white transition-all duration-500 hover:bg-red-700"><FaFacebookF /></div>
                            <div className="bg-red-950 rounded-full w-10 h-10 flex justify-center items-center text-white transition-all duration-500 hover:bg-red-700"><FaTwitter /></div>
                            <div className="bg-red-950 rounded-full w-10 h-10 flex justify-center items-center text-white transition-all duration-500 hover:bg-red-700"><FaInstagram /></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 m-auto lg:m-0 max-w-80">
                        <h2 className="font-bold text-xl">Get in Touch</h2>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3 items-center">
                                <FaLocationPin />
                                <h6>1901 Thornridge Cir, Shiloh, Hawaii</h6>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaEnvelope />
                                <h6>mscar@business.com</h6>
                            </div>
                            <div className="flex gap-3 items-center">
                                <FaPhoneAlt />
                                <h6>(319) 555-0115</h6>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 m-auto lg:m-0 max-w-40">
                        <h2 className="font-bold text-xl">Resources</h2>
                        <div>
                            <h6>Download</h6>
                            <h6>Help</h6>
                            <h6>Guides</h6>
                            <h6>Partner Network</h6>
                            <h6>Cruises</h6>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 m-auto lg:m-0 max-w-80">
                        <h2 className="font-bold text-2xl">Subscribe Our <br /> Newsletter</h2>
                        <input type="text" className="p-3 outline-none w-full border border-white rounded-lg bg-transparent" placeholder="Enter your email" />
                        <button className="button p-3">Subscribe</button>
                    </div>
                </div>
                <div className="container py-4 border-t border-gray-300 w-full">
                    <p className="text-center">©2025, Desenvolvido por <Link className="text-gray-800" href="https://www.mystdev.com.br/" target="_blank">Myst1 Dev</Link></p>
                </div>
            </footer>
        </>
    )
}