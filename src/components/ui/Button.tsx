import { Button } from "@chakra-ui/react";
import React from "react";

interface ButtonModalProps {
  isActive: boolean;
  text: string;
  onClick: () => void;
}

const ButtonUI: React.FC<ButtonModalProps> = ({
  isActive,
  text,
  onClick,
}) => {
  const buttonStyle = isActive
    ? "cursor-pointer w-[244.71px] h-[41.14px] bg-orange-500"
    : "w-[244.71px] h-[41.14px] bg-zinc-400";

  return (
    <Button
      className={`${buttonStyle} rounded-lg`}
      onClick={onClick}
      isDisabled={!isActive}
      _hover={{ bg: isActive ? "orange.600" : "zinc.500" }}
    >
      {text}
    </Button>
  );
};

export default ButtonUI;
