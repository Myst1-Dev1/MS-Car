import { Avaliations } from "@/components/Avaliations";
import { Banner } from "@/components/Banner";
import { BookCar } from "@/components/BookCar";
import { CarTypes } from "@/components/CarTypes";
import { Offer } from "@/components/Offer";
import { RentalWorks } from "@/components/RentalWorks";

export default function Home() {
  return (
    <>
      <Banner />
      <CarTypes />
      <RentalWorks />
      <BookCar />
      <Avaliations />
      <Offer />
    </>
  );
}
