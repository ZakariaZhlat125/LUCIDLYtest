import { Button, Flex, ModalBody, ModalContent, Text } from '@chakra-ui/react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React from 'react'

const Success = ({closeSuccessModal}) => {
  return (
    <ModalContent>
    <ModalBody>
        <Flex direction="column" align="center" justify="center" p={5}>
            <Text fontSize="4xl" fontWeight="bold" color="purple.900" textAlign="center">
                 Success!
            </Text>
            <Text fontSize="2xl" fontWeight="bold" color="green.500" textAlign="center">
                Your data has been submites successfully.
                you can see it in console
            </Text>

            {/* Lottie Animation */}
            <DotLottieReact 
                src="https://lottie.host/829a3d27-8c8e-4fa8-8381-548f10390879/WqrzrsO9jF.json"
                background="transparent"
                speed="1"
                style={{ width: "250px", height: "250px"}}
                loop
                autoplay
            ></DotLottieReact>

            <Button
                mt={4}
                colorScheme="blue"
                onClick={closeSuccessModal}
                width="full"
                colorScheme="orange"

            >
                Close
            </Button>
        </Flex>
    </ModalBody>
</ModalContent>
  )
}

export default Success