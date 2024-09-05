import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";


export default function AppProvider({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <ChakraProvider>
                    {children}
                </ChakraProvider>
            </BrowserRouter>
        </RecoilRoot>
    )
}