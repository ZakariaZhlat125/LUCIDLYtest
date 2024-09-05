import React, { ChangeEvent } from "react";
import { Box, Text, Input } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { WelcomProps } from "../../types/pageData";


export default function Welcom({ inputValueName, setInputValueName }: WelcomProps) {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValueName(e.target.value);
    };

    return (
        <Box className="flex flex-col justify-center items-center px-32">
            <Box className="bg-gray-600 w-32 h-32 flex rounded-lg justify-center items-center my-2">
                <Text className="text-white text-[50px] font-bold">A</Text>
            </Box>

            <Text className="my-2 text-zinc-400 text-sm font-medium">
                alice@wonderland.space
            </Text>
            <Text className="text-gray-600 text-[28px] font-bold">
                Welcome to Giki
            </Text>
            <Box className="flex w-[60vw] justify-center  items-center" position="relative" mt={4} width={235}>
                <Input
                    type="text"
                    placeholder="Enter your name"
                    value={inputValueName}
                    onChange={handleInputChange}
                    bg="neutral.100"
                    fontWeight="bold"
                    color="orange.500"
                    fontSize={{ base: "16px", sm: "18px" }}
                    // py={2}
                    // px={8}
                    // pr="3rem" 
                    width={{ base: "40rem", sm: "20rem", lg: "20rem" }} 
                />
                <FontAwesomeIcon
                    icon={faPencilAlt}
                    className="absolute right-[2rem] md:right-[1rem] top-2 text-slate-400 w-5 h-5 sm:w-6 sm:h-6 cursor-pointer z-10" 
                />
            </Box>
            <Text className="w-[314px] text-center text-neutral-800 text-[13px] font-medium">
                Your answers to the next few questions will help us find the right
                communities for you
            </Text>
        </Box>
    );
};

