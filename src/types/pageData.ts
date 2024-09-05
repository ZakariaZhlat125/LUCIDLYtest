export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

export type WelcomProps = {
    inputValueName: string;
    setInputValueName: (value: string) => void;
}

export type SelectImageProps = {
    selectedItems: number[];
    setSelectedItems: (items: number[]) => void;
}

export type PickLangProps = {
    inputValueLang: string;
    setInputValueLang: (value: string) => void;
    inputValueCountry: string;
    setInputValueCountry: (value: string) => void;
}
