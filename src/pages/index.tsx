import { useState } from "react";
import logo from "../assets/Images/Logo.png";
import Modal from "../components/Home/Modal";

export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="h-screen w-screen bg-[#434E61] flex flex-col justify-center items-center p-4 sm:p-0">
            <img
                src={logo}
                alt="logo"
                className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[315px] md:h-[313px] mx-2"
            />
            <button
                onClick={() => setIsModalOpen(true)}
                className="mt-12 sm:mt-16 md:mt-24 w-full max-w-[309px] h-[41px] sm:max-w-[409px] shadow-md bg-orange-500 hover:bg-orange-600 rounded-lg text-white text-sm font-semibold font-['Montserrat']"
            >
                Open Modal
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
