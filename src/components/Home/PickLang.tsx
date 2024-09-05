import { Box, Text, Select } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { PickLangProps } from "../../types/pageData";
import { countriesItems, langItems } from "../../constants/data";


export default function PickLang({
    inputValueLang,
    setInputValueLang,
    inputValueCountry,
    setInputValueCountry,
}: PickLangProps) {
    const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setInputValueLang(event.target.value);
    };

    const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setInputValueCountry(event.target.value);
    };

    return (
        <Box className="flex flex-col items-center pt-8">
            <Text
                fontSize="28px"
                fontWeight="bold"
                className="text-gray-600 text-center"
            >
                Pick your language and country/region
            </Text>

            <Box className="mb-4 my-2">
                <Select
                    placeholder="Select Language"
                    value={inputValueLang}
                    onChange={handleLanguageChange}
                    width={80}
                    className="sm:w-[20rem]  text-zinc-400 bg-neutral-100"
                >
                    {langItems.map(item => (
                        <option key={item.id} value={item.name}>{item.name}</option>
                    ))}

                </Select>
            </Box>

            <Box className="my-2">
                <Select
                    placeholder="Select Country"
                    value={inputValueCountry}
                    onChange={handleCountryChange}
                    width={80}
                    className="sm:w-[20rem]  text-zinc-400 bg-neutral-100"
                >
                    {countriesItems.map(item => (
                        <option key={item.id} value={item.name}>{item.name}</option>
                    ))}
                </Select>
            </Box>
        </Box>
    );
};
