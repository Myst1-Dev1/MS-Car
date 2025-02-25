import { FaCalendarCheck, FaCarAlt, FaMapMarkedAlt } from "react-icons/fa";

export function RentalWorks() {
    return (
        <>
            <div className="py-16 container grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                    <h2 className="font-bold text-2xl">A Better Way Search For <br /> Rental Works 3 Steps</h2>
                    <div className="max-w-[500px] transition-all duration-500 w-full p-3 flex items-center gap-4 shadow-lg rounded-md mt-5">
                        <FaMapMarkedAlt className="text-red-600 flex-shrink-0 text-3xl" />
                        <div>
                            <h6 className="font-bold">Choose Location</h6>
                            <p className="text-gray-500">Interactively embrace cross-platform potentialities wheres plug-and-play schemas.Monotectally expedite integrated</p>
                        </div>
                    </div>
                    <div className="max-w-[500px] transition-all duration-500 w-full p-3 flex items-center gap-4 shadow-lg rounded-md mt-5">
                        <FaCalendarCheck className="text-red-600 flex-shrink-0 text-3xl" />
                        <div>
                            <h6 className="font-bold">Pick Up Date</h6>
                            <p className="text-gray-500">Interactively embrace cross-platform potentialities wheres plug-and-play schemas.Monotectally expedite integrated</p>
                        </div>
                    </div>
                    <div className="max-w-[500px] transition-all duration-500 w-full p-3 flex items-center gap-4 shadow-lg rounded-md mt-5">
                        <FaCarAlt className="text-red-600 flex-shrink-0 text-3xl" />
                        <div>
                            <h6 className="font-bold">Book You Car</h6>
                            <p className="text-gray-500">Interactively embrace cross-platform potentialities wheres plug-and-play schemas.Monotectally expedite integrated</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#303030] border border-gray-600 rounded-lg max-w-xl w-full">
                    <div className="flex">
                        <div className="bg-white p-3 flex justify-center items-center w-1/2 font-bold">
                            New Car
                        </div>
                        <div className="bg-red-700 text-white p-3 flex justify-center items-center w-1/2 font-bold">
                            Motor Bike
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 text-white mt-5 px-8">
                        <h6 className="font-bold">Pick Up</h6>
                        <select className="rounded-lg w-full bg-[#303030] outline-none border border-gray-600 p-3 text-gray-400">
                            <option value="Westheimer Rd Santa Ana">Westheimer Rd Santa Ana</option>
                        </select>
                        <div className="flex items-center gap-3">
                            <input type="checkbox" id="returnCheckbox" className="appearance-none bg-transparent border border-white w-3 h-3 checked:bg-blue-300 checked:border-transparent checked:before:content-['✔'] checked:before:text-black checked:before:leading-3 checked:before:flex checked:before:justify-center checked:before:items-center" />
                            <label htmlFor="returnCheckBox">Return the same location</label>
                        </div>
                        <input type="date" className="rounded-lg w-full bg-[#303030] outline-none border border-gray-600 p-3 text-gray-400" />
                    </div>
                    <div className="flex flex-col gap-4 text-white mt-8 mb-4 px-8">
                        <h6 className="font-bold">Return</h6>
                        <select className="rounded-lg w-full bg-[#303030] outline-none border border-gray-600 p-3 text-gray-400">
                            <option value="Westheimer Rd Santa Ana">Thornridge Cir Shilloh Ha</option>
                        </select>
                        <input type="date" className="rounded-lg w-full bg-[#303030] outline-none border border-gray-600 p-3 text-gray-400" />
                    </div>
                </div>
            </div>
        </>
    )
}