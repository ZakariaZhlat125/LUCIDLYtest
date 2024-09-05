import React, { useState } from "react";
import {
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Flex,
    Text,
    Circle,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import {
    currentPageState,
    inputValueNameState,
    inputValueLangState,
    inputValueCountryState,
    selectedItemsState,
} from "../../states/modalState";
import Welcom from "./Welcom";
import PickLang from "./PickLang";
import SelectImage from "./SelectImage";
import { ModalProps } from "../../types/pageData";
import Lottie from "react-lottie-player";
import { LottieData } from "../../constants/lottiedata";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Success from "./Success";

export default function Modal({ isOpen, onClose }: ModalProps) {
    const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
    const [inputValueName, setInputValueName] = useRecoilState(inputValueNameState);
    const [inputValueLang, setInputValueLang] = useRecoilState(inputValueLangState);
    const [inputValueCountry, setInputValueCountry] = useRecoilState(inputValueCountryState);
    const [selectedItems, setSelectedItems] = useRecoilState(selectedItemsState);

    // State to manage success popup visibility
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);

    const totalPages = 3;

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        } else {
            handleFinish(); // Call handleFinish when on the last page and clicking "Next"
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPageText = currentPage === totalPages ? "Finish" : "Next";

    const isNextButtonDisabled =
        (currentPage === 1 && inputValueName.trim() === "") ||
        (currentPage === 2 &&
            (inputValueLang.trim() === "" || inputValueCountry.trim() === "")) ||
        (currentPage === 3 && selectedItems.length < 3);

    const getOrangeCount = (): number => {
        switch (currentPage) {
            case 2:
                return 1;
            case 3:
                return 2;
            default:
                return 0;
        }
    };

    const handleFinish = () => {
        console.log("Name:", inputValueName);
        console.log("Language:", inputValueLang);
        console.log("Country:", inputValueCountry);
        console.log("Selected Items:", selectedItems);

        // Open the success popup after finishing
        setIsSuccessOpen(true);
    };

    const closeSuccessModal = () => {
        setIsSuccessOpen(false);
        onClose(); // Close the main modal after success
    };

    return (
        <>
            <ChakraModal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Flex justify="space-between" align="center">
                            Step {currentPage} of {totalPages}
                            <ModalCloseButton />
                        </Flex>
                    </ModalHeader>
                    <ModalBody>
                        {currentPage === 1 && (
                            <Welcom
                                inputValueName={inputValueName}
                                setInputValueName={setInputValueName}
                            />
                        )}
                        {currentPage === 2 && (
                            <PickLang
                                inputValueLang={inputValueLang}
                                setInputValueLang={setInputValueLang}
                                inputValueCountry={inputValueCountry}
                                setInputValueCountry={setInputValueCountry}
                            />
                        )}
                        {currentPage === 3 && (
                            <SelectImage
                                selectedItems={selectedItems}
                                setSelectedItems={setSelectedItems}
                            />
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Flex flexDir="column" align="center" width="100%">
                            <Button
                                onClick={nextPage}
                                isDisabled={isNextButtonDisabled}
                                colorScheme={isNextButtonDisabled ? "gray" : "orange"}
                                width="100%"
                            >
                                {nextPageText}
                            </Button>
                            {currentPage > 1 && (
                                <Button onClick={prevPage} mt={4} variant="outline" width="100%">
                                    Back
                                </Button>
                            )}

                            <Flex mt={4}>
                                {[...Array(totalPages)].map((_, index) => (
                                    <Circle
                                        key={index}
                                        size="10px"
                                        bg={index < getOrangeCount() ? "orange.500" : "gray.300"}
                                        mx={1}
                                    />
                                ))}
                            </Flex>
                        </Flex>

                    </ModalFooter>
                </ModalContent>
            </ChakraModal>

            {/* Success Popup Modal with Lottie Animation */}
            <ChakraModal isOpen={isSuccessOpen} onClose={closeSuccessModal} size="sm">
                <ModalOverlay />
                <Success closeSuccessModal={closeSuccessModal} />
            </ChakraModal>
        </>
    );
}
