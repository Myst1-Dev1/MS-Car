

export function Offer() {
    return (
        <>
            <div className="mb-10 container bg-gradient-to-r from-red-100 to-red-300 text-black rounded-md py-16 flex flex-col gap-10 justify-center items-center">
                <h2 className="font-bold text-3xl">Limited Time Offer! Are You Ready <br /> To The <span className="text-red-700">Car Rental?</span></h2>
                <div className="flex justify-center items-center w-full gap-5">
                    <button className="button p-3 max-w-40">Book Now</button>
                    <button className="button p-3 bg-transparent border text-red-700 border-red-700 max-w-40">Free Consultants</button>
                </div>
            </div>
        </>
    )
}