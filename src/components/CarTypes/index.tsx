import Image from "next/image";

export function CarTypes() {
    return (
        <>
            <div className="container py-16">
                <h2 className="text-center text-3xl font-bold">Browse Top Car Popular <br /> Car Body Types</h2>
                <div className="mt-10 flex justify-center items-center flex-wrap gap-5">
                    <div className="bg-red-50 max-w-32 p-3 w-full flex justify-center items-center flex-col gap-3 rounded-lg transition-all duration-500 hover:bg-red-700 hover:text-white">
                        <div className="w-12 h-12 rounded-full bg-red-100 p-3 flex justify-center items-center">
                            <Image className="flex-shrink-0 w-10 h-10 object-contain" src="/images/sedan.png" width={200} height={200} alt="foto de um modelo de carro sedan" /> 
                        </div>
                        <h6 className="font-bold">Sedan</h6>
                    </div>
                    <div className="bg-red-50 max-w-32 p-3 w-full flex justify-center items-center flex-col gap-3 rounded-lg transition-all duration-500 hover:bg-red-700 hover:text-white">
                        <div className="w-12 h-12 rounded-full bg-red-100 p-3 flex justify-center items-center">
                            <Image className="flex-shrink-0 w-10 h-10 object-contain" src="/images/convertible-car.png" width={200} height={200} alt="foto de um modelo de carro sedan" /> 
                        </div>
                        <h6 className="font-bold">Convertible</h6>
                    </div>
                    <div className="bg-red-50 max-w-32 p-3 w-full flex justify-center items-center flex-col gap-3 rounded-lg transition-all duration-500 hover:bg-red-700 hover:text-white">
                        <div className="w-12 h-12 rounded-full bg-red-100 p-3 flex justify-center items-center">
                            <Image className="flex-shrink-0 w-10 h-10 object-contain m-auto" src="/images/crossover.png" width={200} height={200} alt="foto de um modelo de carro sedan" /> 
                        </div>
                        <h6 className="font-bold">Crossover</h6>
                    </div>
                    <div className="bg-red-50 max-w-32 p-3 w-full flex justify-center items-center flex-col gap-3 rounded-lg transition-all duration-500 hover:bg-red-700 hover:text-white">
                        <div className="w-12 h-12 rounded-full bg-red-100 p-3 flex justify-center items-center">
                            <Image className="flex-shrink-0 w-10 h-10 object-contain" src="/images/car.png" width={200} height={200} alt="foto de um modelo de carro sedan" /> 
                        </div>
                        <h6 className="font-bold">Sport Coupe</h6>
                    </div>
                    <div className="bg-red-50 max-w-32 p-3 w-full flex justify-center items-center flex-col gap-3 rounded-lg transition-all duration-500 hover:bg-red-700 hover:text-white">
                        <div className="w-12 h-12 rounded-full bg-red-100 p-3 flex justify-center items-center">
                            <Image className="flex-shrink-0 w-10 h-10 object-contain m-auto" src="/images/pickup-car.png" width={200} height={200} alt="foto de um modelo de carro sedan" /> 
                        </div>
                        <h6 className="font-bold">Pickup</h6>
                    </div>
                    <div className="bg-red-50 max-w-32 p-3 w-full flex justify-center items-center flex-col gap-3 rounded-lg transition-all duration-500 hover:bg-red-700 hover:text-white">
                        <div className="w-12 h-12 rounded-full bg-red-100 p-3 flex justify-center items-center">
                            <Image className="flex-shrink-0 w-10 h-10 object-contain m-auto" src="/images/crossover.png" width={200} height={200} alt="foto de um modelo de carro sedan" /> 
                        </div>
                        <h6 className="font-bold">Family MPV</h6>
                    </div>
                </div>
            </div>
        </>
    )
}