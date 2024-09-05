import { Box, Image, Text } from "@chakra-ui/react";
import { SelectImageProps } from "../../types/pageData";
import { items } from "../../constants/data";


export default function SelectImage({
    selectedItems,
    setSelectedItems,
}: SelectImageProps) {

    const toggleSelection = (itemId: number) => {
        const isSelected = selectedItems.includes(itemId);
        if (isSelected) {
            setSelectedItems(selectedItems.filter((id) => id !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    return (
        <Box className="flex flex-col items-center pt-8">
            <Text
                fontSize="28px"
                fontWeight="bold"
                width={72}
                className="text-gray-600 text-center"
            >
                Tell us what you’re  interested in
            </Text>
            <Box className="flex flex-wrap pt-8">
                {items.map((item) => (
                    <Box
                        key={item.id}
                        className={`sm:w-1/4 w-1/2 rounded-lg border ${selectedItems.includes(item.id)
                            ? "border-2 border-orange-500"
                            : "border-transparent"
                            }`}
                        onClick={() => toggleSelection(item.id)}
                    >
                        <Box className="relative m-1">
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-auto rounded-lg"
                            />
                            <Text
                                className="absolute bottom-0 left-0 ml-2 mb-2 text-white"
                                fontWeight="bold"
                            >
                                {item.title}
                            </Text>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};
